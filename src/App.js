require("dotenv").config();

const express = require("express"); 
const cors = require('cors')
const mongoose = require("mongoose"); 
// const morgan = require('morgan')
const homeRoutes = require("./Routes/home")

const userRoutes = require("./Routes/individual")

const instructorRoutes = require("./Routes/instructos")

const adminRoutes = require("./Routes/Admin")

const changePasswordRoutes = require("./Routes/changingpassword")

const cortraineeRoutes = require("./Routes/corTrainee")

const guestRoutes  = require("./Routes/guest")

const {signupValidator , validatorResult , signinValidatorResult ,signinValidator} = require("./middleware/validators"); 

const signupRoutes = require("./Routes/signup");

const signinRoutes = require("./Routes/signin"); 
const cookieParser = require("cookie-parser")


const app = express();


// middleware 

app.use(cors()) ;

app.use(express.json());  
app.use(cookieParser())



// Connecting to DB 

mongoose.connect(process.env.MONGOURI)
    .then(() =>{
        console.log("MongoDB is connected ")
        app.listen(process.env.PORT, () => {
        console.log("Hello im listening ")
            })
    })
    .catch((error) => {
        console.log(error)
    })
app.use("/api",homeRoutes); 
app.use ("/individual",userRoutes); 
app.use("/instructor" , instructorRoutes);
app.use("/admin", adminRoutes);
app.use("/cortrainee",cortraineeRoutes);
app.use ("/guest" , guestRoutes);
app.use("/signup",signupValidator,validatorResult );
app.use("/signup", signupRoutes);
app.use("/signin",signinRoutes);

app.use('/change',changePasswordRoutes)
// app.use("/signin",signinValidator,signinValidatorResult );


 
