
let User = require("../model/userSchema")
const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer");
const jwt = require('jsonwebtoken');

let forgotpasswordController = async (req,res) => {
    let {email} = req.body
    let existingUser = await User.findOne({email:email})

    if(existingUser.length == 0){ 
        res.send({error:"Credencial is not valid"})
    }else{
    jwt.sign({ email: email }, 'mehedi', async function(err, token) {
      let userData = await User.updateOne({email:email},{ $set:{
      token:token
    }},{
      returnNewDocument:true,
      new:true, 
      strict:false
    })    
    const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: "mollameehedi@gmail.com",
              pass: "rrsi dfya twdg dxib",
            },
          });
          const info = await transporter.sendMail({
            from: process.env.BASE_EMAIL, 
            to: existingUser.email, 
            subject: "Verify your Email", 
            html: `<div style="display: flex;width: 600px;height: 200px;"> <div style="width: 50%;height: 100px;">Please Change Your Password by click on this button <a href="http://localhost:5173/changepassword/${existingUser.token}">Verify</a></div></div>`,
          });
  res.send({success:'please check you mail '})

  });
         
  
    


  }
   }

module.exports = forgotpasswordController;