const express = require("express") 
const router = express.Router()
const signinController = require("../Controller/signin");

const {signinValidator,signinValidatorResult} = require("../middleware/validators")



router.post('/user',signinController.individualSignin , signinValidator,signinValidatorResult); 
router.post('/admin' , signinController.adminSignin , signinValidator,signinValidatorResult);
router.post('/instructor' , signinController.instructorSignin , signinValidator,signinValidatorResult);
router.post('/cortrainee' , signinController.cortraineeSignin ,signinValidator,signinValidatorResult);



module.exports=router;