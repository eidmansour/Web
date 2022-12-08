const express = require("express")
const route = express.Router() 
const changePasswordController = require("../Controller/changepassword")




route.put('/user/:id', changePasswordController.changeuser)





module.exports= route