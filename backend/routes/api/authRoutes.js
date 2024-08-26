const express = require("express");
const _ = express.Router()
const registrationController = require("../../controllers/registrationController");
const loginController = require("../../controllers/loginController");
const otpController = require("../../controllers/otpController")
const forgotpasswordController = require("../../controllers/forgotpasswordController")
const changepasswordController = require("../../controllers/changepasswordController");
const allUserController = require("../../controllers/allUserController");

_.post('/registration', registrationController)
_.post('/otpverify', otpController)
_.post('/login', loginController)
_.post('/forgotpassword', forgotpasswordController)
_.post('/changepassword', changepasswordController)
_.get('/alluser', allUserController)




module.exports = _;