const nodemailer=require("nodemailer")

const {USER_EMAIL,USER_PASSWORD}=require("../config/credentials")


const SMTP_PORT=587
const HOST_SERVICE="smtp-relay.brevo.com"

const SENDER_EMAIL=USER_EMAIL

const RECEIVER_EMAIL="ssneha01deo@gmail.com"

const CC=["HR"]
const BCC=["Parent"]
 const EMAIL_SUBJECT="Happy Coding";

 const EMAIL_BODY_HTML="<h1>Happy Coding</h1>"


 const options={
    from:SENDER_EMAIL,
    to:RECEIVER_EMAIL,
    cc:CC,
    bb:BCC,
    subject:EMAIL_SUBJECT,
    html:EMAIL_BODY_HTML
 }


 const transporter=nodemailer.createTransport({
    host:HOST_SERVICE,
    port:SMTP_PORT,
    secure:false,
    auth:{
        user:USER_EMAIL,
        pass:USER_PASSWORD
    }
 })


module.exports={transporter,options};