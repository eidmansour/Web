const express = require("express") 
const router = express.Router()
const instructorController = require("../Controller/instructor")
const guestController = require('../Controller/guest')





router.get("/viewcourse",guestController.getcourses)



router.post('/addcourse', instructorController.AddCourse)

router.get("/dashboard/:id",instructorController.getMycourses)

router.get('/get' , instructorController.getme)




module.exports = router