const express=require("express");
const router=express.Router();
const path=require('path')
router.get('/',async(req,res)=>{
   
    const htmlPath=path.join(__dirname,"public","index.html");
    console.log('__dirName',__dirname,htmlPath)
    res.sendFile(htmlPath);
})


module.exports=router