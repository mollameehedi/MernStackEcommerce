let User = require("../model/userSchema")

let allUserController = async  (req,res) =>{

    let data = await User.find()
    res.send(data);
}
module.exports = allUserController;