import { useEffect,useState } from "react";
import React from "react";
import { isAusthenticated} from "../../Helpers/auth"

import CourseDetails from "../../Components/courseDetails";
 




const InstructorCourses = () =>{

        // const params = new URLSearchParams(window.location.search); 
        // const {id}} = params.id
        // console.log("123123123")



    const {_id} = isAusthenticated()

    const [courses,setCourses]= useState(null)

    useEffect(()=>{
    const fetchCourses = async () => {
        const response= await fetch(`/instructor/dashboard/${_id}`)
        const json= await response.json()
        console.log(json)

        if(response.ok){
            setCourses(json)
        }
        else {
            console.log("There is an eror here")

        }
        }
        fetchCourses()
    },[])  

    return (
            <div className="instructorAllCourses">
                <div className="courses">
                    {courses && courses.map((course)=>(
                       
                    <p key={course._id} >
                       <CourseDetails key={course._id} course={course}/>
                    </p>
                   
                ))}
            </div>
        </div>
    )

}
export default InstructorCourses
