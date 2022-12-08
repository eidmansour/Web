const instructor = require("../Schema/instructor")
const admin = require("../Schema/Admin")
const cortrainee = require("../Schema/cor_trainee")
const individual = require("../Schema/Individual")
const bycrpt = require("bcryptjs")
const jwt = require("jsonwebtoken")


const createToken = (_id) => {

    return jwt.sign({_id} , "SEC" , {expiresIn : '2d'}) 
}


const changeuser = async (req, res)=> {

    const { old , password  } = req.body
    const {id} = req.params

    if(!id){res.status(400).json({errorMessage:"no id passed"})}

    try{
    const ind = await individual.findById(id)

     const isMatch = await bycrpt.compare(old,ind.password)

            if(!isMatch){
                return res.status(400).json({
                    errorMessage:"old password is incorrect"
                })
            }
    const salt = await bycrpt.genSalt(10)


    ind.password = await bycrpt.hash(password , salt )
    ind.save()

    const token = createToken(ind._id)

    res.status(200).json({successMessage:"Password Changed Successfully" , token} )
        }
        catch(error){
            res.status(400).json({error:error.message})
        }

    }


module.exports={changeuser}