const mongoose = require("mongoose")

const courses = require("../Schema/courses") 


const getcourses = async(req , res) => {

   try{
    const course = await courses.find({} , {"Title" :1 ,"TotalHours" : 1 , "Rating" : 1,"_id":0})
    res.status(200).json( course)
   }
   catch (error){
    res.status(400).json({error : error.message})
}
}

module.exports = {getcourses}