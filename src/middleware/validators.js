const {check , validationResult} = require("express-validator");

exports.signupValidator = [

        check('username')
            .not().isEmpty()
            .trim()
            .withMessage("All fields Are required"),
        check('email')
            .isEmail()
            .normalizeEmail()
            .withMessage("Invalid email"),
        check('password')
            .isLength({min : 6})
            .withMessage("Password must be at least 6 characters long")

]

exports.validatorResult = (req,res,next)=>{
    const result = validationResult(req)
    const hasError= !result.isEmpty(); 

    if(hasError){
        const firsterror=result.array()[0].msg
        return res.status(400).json({
            errorMessage:firsterror,
        })

        console.log('hasErrors' , hasError)
        console.log('result ', result)
}


    next();
}



exports.signinValidatorResult = (req , res , next) => {

    const result = validationResult(req)
    const hasError= !result.isEmpty(); 

    if(hasError){
        const firsterror=result.array()[0].msg
        return res.status(400).json({
            errorMessage:firsterror,
        })

        console.log('hasErrors' , hasError)
        console.log('result ', result)



    }
    
    next();
}
exports.signinValidator = [
        
    check('email')
        .isEmail()
        .normalizeEmail()
        .withMessage("Invalid email"),
    check('password')
        .isLength({min : 6})
        .withMessage("Password must be at least 6 characters long")

]