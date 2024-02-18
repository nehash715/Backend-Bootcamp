const express=require("express");
const router=express.Router();
const {nanoid} = require("nanoid")


const createDB=require("../config/db")
const Url=require("../models/urlModel");

const baseUrl="https://Day6.rachitsrivasta5.repl.co/urlapi"
createDB.sync().then(()=>{
    console.log("db is running")
})
//post api call
router.post("/",async(req,res)=>{
    try{
const {longUrl}=req.body
const shortId=nanoid(4)
const shortUrl=await Url.create({
    longUrl,
    shortUrl:shortId
})
return res.status(200).json({

    status:"ok",
    shortUrl:`${baseUrl}/${shortId}`
})
    }
    catch(e){
console.error(e)
return res.send.status(500).send(e)
    }
})


module.exports=router