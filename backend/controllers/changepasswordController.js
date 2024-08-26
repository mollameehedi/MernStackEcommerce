const User = require('../model/userSchema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

let changepasswordController = async (req,res) =>{

    let {token,password} = req.body
    bcrypt.hash(password, 10, async function(err, hash) {
    jwt.verify(token, 'mehedi', async function(err, decoded) {
        let axistingUser = await User.find({email:decoded.email})
        let userData = await User.findOneAndUpdate({email:decoded.email},{password:hash,token:''})
      });

   
    res.send({success:'Otp Verify Successfully!!'})
});
    
}

module.exports =  changepasswordController;