const express = require("express") 
const router = express.Router()

const guestController = require('../Controller/guest')



router.get("/viewcourse",guestController.getcourses)

module.exports = router