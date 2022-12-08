const express = require("express") 
const router = express.Router()
const cortraineeController = require("../Controller/cortrainee")






router.get("/viewcourse" , cortraineeController.getcourses)



module.exports = router