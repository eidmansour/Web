const express = require("express") 
const router = express.Router()
const instructorController = require("../Controller/instructor")
const guestController = require('../Controller/guest')





router.get("/viewcourse",guestController.getcourses)



router.post('/addcourse', instructorController.AddCourse)

router.get("/mycourse",instructorController.getMycourses)




module.exports = router