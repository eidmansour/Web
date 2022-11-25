const express = require("express") 
const router = express.Router()
const adminController = require("../Controller/admin")


router.post("/addinstructor" ,adminController.addinstructor)


router.post("/addcortrainee", adminController.addcortrainee)


router.post("/addadmin" , adminController.addadmin)

router.post("/addSubject" ,adminController.addSubject)
router.get("/getsubject" ,adminController.getSubject)









module.exports = router