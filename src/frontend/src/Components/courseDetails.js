import React from "react"
const CourseDetails= ({course}) => {
    return(
        <div className="course-details" onClick={()=>window.location.href=`/course/${course._id}`} hover>
            <h4>{course.Title}</h4>
            <p><strong>Subject: </strong>{course.Subject}</p>
            <p><strong>Instructor: </strong>{course.instructor}</p>
            <p><strong>Price: </strong>{course.Price}</p>
            <p><strong>Hours: </strong>{course.TotalHours}</p>
            <p><strong>Rating: </strong>{course.Rating}</p>
            <p>{course.createdAt}</p>
        </div>
    )
}
export default CourseDetails