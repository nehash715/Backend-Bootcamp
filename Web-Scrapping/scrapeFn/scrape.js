const pupepeteer=require("puppeteer")
const fs=require("fs")

const data={
    list:[]
}
async function main(skill){
    //launches chromium
const browser=await pupepeteer.launch({headless:false})
//open new tab
const page=await browser.newPage()
//https://in.indeed.com/jobs?q={sde}skill&l=banglore&vjk=3caa42b0706b3ed5
console.log(skill)
await page.goto(`https://in.indeed.com/jobs?q=${skill}&l=banglore&vjk=3caa42b0706b3ed5`,{
    timeout:0,
    waitUntil:'networkidle0'
})


/*const pdf=page.pdf({
    path:'',
    format:"A4"
})

const screenshot=page.screenshot({
    path:'',
    fullPage:tue
})*/

const jobData=await page.evaluate(async (data)=>{
    const items=document.querySelectorAll('td.resultContent')
    items.forEach((item,index)=>{
        const title=item.querySelector('h2.jobTitle>a')?.innerText
        const link=item.querySelector('h2.jobTitle>a')?.href;
        const salary=item.querySelector('div.metadata.salary-snippet-container > div')?.innerText;
const companyName=item.querySelector('span.companyName')?.innerText

if(salary==null){
    salary="not defined"
}
 data.list.push({
    title,
    salary,
    companyName,
    link
 })
})
return data;
},data);
let response=await jobData;
let json= JSON.stringify(jobData,null,2);
fs.writeFileSync('job.json',json,"utf-8",()=>{
    console.log("written in job.json")
})
browser.close();
console.log(response)
return response;

}
module.exports=main