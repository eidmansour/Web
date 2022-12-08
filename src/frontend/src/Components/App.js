import React from "react";
import { BrowserRouter  , Routes , Route} from 'react-router-dom'
import Header from './header'; 
import Home from '../Pages/home'; 
import Signin from "../Pages/signin";
import Signup from "../Pages/signup";
import NotFound from "./notfound";
import AdminSignupForm from "../Pages/myAdmin/commonsignup";
import UsersignupForm from "../Pages/user/usersignup"; 
import InstructorsignupForm from "../Pages/instructor/instructorsignup"
import SigninForm from "../Pages/myAdmin/commonLogin";
import AdminDashboard from "../Pages/myAdmin/admindashboard";
import UserDashboard from "../Pages/user/userdashboard";
import InstructorDashboard from "../Pages/instructor/instructordashboeard";
import Instructorlogin from "../Pages/instructor/instructorsignin";
import Userlogin from "../Pages/user/usersignin"             
import Cortraineedashboard from "../Pages/cortrainee/cortraineedashboard";
import GuestDashboard from "../Pages/guest/guestdashboard";
import InstructorAllCourses from "../Pages/instructor/allcourses"
import InstructorCourses from "../Pages/instructor/mycourses"
import AllCourses from "../Pages/allcourses"
import {isAusthenticated} from "../Helpers/auth"
import AuthHeader from "./authHeader"

import "../index.css"
 
const  App = () =>(

  
  <BrowserRouter>
    {isAusthenticated() ? <AuthHeader/> : <Header/>} 
    {/* <Header/> */}
    <main>    
       <Routes>
      
        <Route path="/" element={<Home/>}/>
        <Route exact path = "/signup" element = {<Signup/>} /> 
        <Route exact path = "/signup/instructor" element = {<InstructorsignupForm/>} /> 
        <Route exact path = "/signup/user" element = {<UsersignupForm/>}/> 
        <Route exact path = "/signup/admin" element = {<AdminSignupForm/>}/> 
        <Route  path = "/signin" element = {<Signin/>} />
        <Route exact path = "/signin/user" element = {<Userlogin/>} />
        <Route exact path = "/signin/admin" element = {<SigninForm/>} />
        <Route exact path = "/signin/instructor" element = {<Instructorlogin/>} />
        <Route exact path = "/signin/cortrainee" element = {<SigninForm/>} />
        <Route exact path = "/admin/dashboard" element = {<AdminDashboard/>} />
        <Route  path = "/instructor/dashboard" element = {<InstructorDashboard/>} />
        <Route exact path = "/individual/dashboard" element = {<UserDashboard/>} />
        <Route exact path = "/cortrainee/dashboard" element = {<Cortraineedashboard/>} />
        <Route exact path = "/guest/dashboard" element = {<GuestDashboard/>} />
        <Route exact path = "/instructor/dashboard/mycourses" element = {<InstructorCourses/>} />
        <Route exact path = "/allcourses" element = {<AllCourses/>} />
        <Route exact path = "/mycourses" element = {<InstructorCourses/>} />

        <Route element = {<NotFound/>} />  

    </Routes>

  
    </main>
    
    
    
  </BrowserRouter>
  
);

export default App;


