
const  mongoose  = require("mongoose");
const course = require("../Schema/courses")


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

   


// if(userId){

//     const result = await course.find({instructor:mongoose.Types.ObjectId(userId)}).populate('instructor');
//     res.status(200).json(result)

// }
// else {
//     res.status(400).json({errorMessage:"instructorId is required"})
// }

}


module.exports = {AddCourse , getMycourses}