const express = require("express"); 

const router = express.Router(); 

const course = require("../Schema/courses")


const instructorController = require("../Controller/instructor")

router.get('/', (req,res) => {
    res.json({mssg: "get All"})
});




router.post('/addcourse', instructorController.AddCourse)



router.delete('/:id', (req,res) => {
    res.json({mssg: "Delete something"})
});


module.exports = router; 

