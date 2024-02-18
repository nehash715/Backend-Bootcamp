const express=require("express")
const app=express()
const scheduler=require("node-cron")
const {transporter,options}=require("./services/email")

const PORT=5000

scheduler.schedule("* * * * * *",()=>{
    console.log("inside scheduler")
    transporter.sendMail(options,(err,info)=>{
        if(err){
            console.error(err)
        }
        console.log("email send with info",info)
    })
})

app.listen(PORT,()=>{
    console.log("server is running")
})