const instructor = require("../Schema/instructor")
const admin = require("../Schema/Admin")
const cortrainee = require("../Schema/cor_trainee")
const Subject = require("../Schema/courseSubject")



// add instructor to db 

const addinstructor = async(req,res) => {

    const {username , email , password} =  req.body 
try{
    const addition = await instructor.create({username , email , password})
    res.status(200).json(addition)
}
catch(error){

    res.status(400).json({errorMessage:"Not Added"})
}
} ; 


// add cortrinee to db

const addcortrainee = async (req , res ) => {
    const {Name , Email , Password , Company} =  req.body 
try{
    const addition = await cortrainee.create({Name , Email , Password , Company})
    res.status(200).json(addition)
}
catch(error){

    res.status(400).json({error : error.message})
}
}


const addSubject = async (req,res) => {

    const {subject} = req.body 
    try {
        const subjectExist = await Subject.findOne({subject}) ; 

        if(subjectExist){

            return res.status(400).json({

                errorMessage:"Subject Already Exists"
            })
        }
        const addition = await Subject.create({subject})
        res.status(200).json(addition);


    }
    catch (error) {
        res.status(400).json({error : error.message})

    }




}


// add another Admin to db 

const addadmin = async (req , res ) => {
    const {username , email , password } =  req.body 
try{
    const addition = await admin.create({username , email , password })
    res.status(200).json(addition)
}
catch(error){

    res.status(400).json({error : error.message})
}
}


const getSubject = async (req , res ) => {
try{
    const addition = await Subject.find({})
    res.status(200).json(addition)
}
catch(error){

    res.status(400).json({errorMessage : "Try again later"})
}
}



module.exports = {addinstructor , addcortrainee , addadmin , addSubject ,getSubject}