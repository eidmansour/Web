
const  mongoose  = require("mongoose");
const course = require("../Schema/courses")
const inst = require("../Schema/instructor")
const Subject = require("../Schema/courseSubject")



// add new Course 

const AddCourse = async (req , res) => {
    const {Title,TotalHours,Price,Subject,ShortSummary,_id} = req.body

try{
    const coursesUpload =  await course.create({Title,TotalHours,Price,Subject,ShortSummary,instructor:_id})


    res.status(200).json(coursesUpload)
} 

catch(error)
{
    res.status(400).json({error:error.message})
}
};
const getMycourses = async (req ,res) => {

    const {id} = req.params

    if(id) {
        const result = await course.find({instructor:mongoose.Types.ObjectId(id)}).lean()

        for (let i = 0 ; i<result.length ; i++){

            const tr = await inst.findById(result[i].instructor)

            const trin = tr.username 

            result[i].instructor = trin 


            const temp = await Subject.findById(result[i].Subject)

    
            const sub = temp.subject
    
            result[i].Subject = sub
     }
        res.status(200).json(result)
    }
    
    else {

        res.status(400).json({error:error.message})
    }
}

const getme = async (req , res) => {

    const result = await inst.find({}).lean()


    res.status(200).json(result)
}

module.exports = {AddCourse , getMycourses , getme}