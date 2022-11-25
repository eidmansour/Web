const express = require("express")
const route = express.Router() 
const guestController = require("../Controller/guest")


route.get("/viewcourse" , guestController.getcourses)



module.exports = route  