const User = require('../model/userSchema');

let otpController = async (req,res) =>{
    let {email,otp} = req.body
    let data = await User.find({email:email})
    

    if(data[0].otp == otp){
        await User.findOneAndUpdate({email:email},{otp:"",verify:true})
    }
    else{
        res.send('Otp Not Match!!')

    }
    res.send({success:'Otp Verify Successfully!!'})
    
}

module.exports =  otpController;