const User = require('../model/userSchema');

let changepasswordController = async (req,res) =>{

    let {email,password} = req.body
    // let data = await User.find({email:email})
    

    // if(data[0].otp == otp){
    //     await User.findOneAndUpdate({email:email},{otp:"",verify:true})
    // }
    // else{
    //     res.send('Otp Not Match!!')

    // }
    res.send({success:'Otp Verify Successfully!!'})
    
}

module.exports =  changepasswordController;