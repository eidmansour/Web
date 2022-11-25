const express = require("express") 
const router = express.Router()
const signupController = require("../Controller/signup")


router.post('/user',signupController.individualSignup); 

router.post('/admin' , signupController.adminSignup);

router.post('/instructor' , signupController.instructorSignup);


module.exports=router;