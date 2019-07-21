const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.post('/api/form',(req,res) => {
    console.log(req.body);
    nodemailer.createTestAccount((err,account) =>{
        const htmlEmail = `
        <h3>Confirm Message</h3>
        <p>Dear: ${req.body.Email} We have confirm your email!</p><br/>
        <p>Enjoy <a href="https://www.tukaglobal.com/">Tuka</a>!</p>
        
       `;

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'renfeng.zhou96@gmail.com',
                pass: 'jzycsgc@Holly123'
            }
        });

        let mailOptions = {
            form : 'renfeng.zhou96@gmail.com',
            to: 'renfeng_zhou@yeah.net',
            replyTo: 'renfeng.zhou96@gmail.com',
            subject: 'client verification',
            text: req.body.message,
            html: htmlEmail
        };

        transporter.sendMail(mailOptions,(err,info) => {
            if(err){
                return console.log(err)
            }
            console.log('Message sent: %s', info.message);
            console.log('Message URL: %s', nodemailer.getTestMessageUrl(info))
        })
    })
});

const PORT = process.env.PORT || 3002;

app.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`)
});
