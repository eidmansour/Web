import  React , { useEffect,useState } from "react"

import CourseDetails from "../Components/courseDetails"


const InstructorAllCourses = () =>{
    const [courses,setCourses]= useState(null)

    useEffect(()=>{
    const fetchCourses = async () => {
        const response= await fetch('/admin/allcourses')
        const json= await response.json()

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
                        <p key={course._id}>
                       <CourseDetails key={course._id} course={course}/>
                    </p>
                ))}
            </div>
        </div>
    )
}
export default InstructorAllCourses