import React, { Fragment } from 'react'
import { useState , useEffect } from 'react'
import {showErrorMsg, showSuccessMsg } from "../../Helpers/message";
import {showloading} from "../../Helpers/loading"; 
import isEmpty from 'validator/lib/isEmpty'; 
import {isAusthenticated} from "../../Helpers/auth"
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

 
const instructorDashboard = () =>{
    const [insts , setInst] = useState([])


    const instrucotList = async ()=>{


        await axios.get("/instructor/get").then(
            (res) => {

                const insts = res.data 
                setInst(insts)
            }
        )  





    }

    


    const [formData ,setcourse]=useState({
        Title:'',
        TotalHours:0,
        ShortSummary:'',
        Price:0,
        Subject:'',
        errorMsg:'',
        successMsg:'',          
        loading:false , 
    })  
    
    const {Title,TotalHours,ShortSummary, Price,Subject,errorMsg,successMsg,loading} = formData

    const [subjects , setSubjects]=useState(null)
    useEffect(() =>{

        const loadSubjects = async () =>{
         const response = await fetch('/admin/getsubject')
         const json = await response.json()
         if(response.ok){
             setSubjects(json)
             console.log(subjects)
     
     
         }
 
 
        }
        loadSubjects()
     },[])












    
    


    const handelChange = (evt) =>{

        setcourse({
            ...formData,
            [evt.target.name] : evt.target.value,
})



    }

    const handelcourseSubmit = async(evt) => {
        evt.preventDefault(); 
        const {_id} = isAusthenticated();

        const course = {Title , TotalHours , ShortSummary , Price,Subject,_id}

        

        const response = await fetch("/instructor/addcourse" , 
                            {
                                method:'POST',
                                body:JSON.stringify(course),
                                headers:{
                                    'Content-Type':'application/json'
                                }
                        }
)

        const json = await response.json()

        if(!response.ok){

            setcourse({...formData , errorMsg:json.errorMessage})
        }

        if(response.ok){
            setcourse({
                Title:'',
                TotalHours:0,
                ShortSummary:'',
                Price:0,
                Subject:'',
                errorMsg:'' ,
            })
            console.log("new workout added: " ,json )


        }




    }


    const showHeader = ()=>(

        <div className='bg-dark text-white py-4'>
            <div className='container'>
                 <div className='row'>
                    <div className='col-md-6'>
                        <h1>
                            <i className='fas fa-home'> Dashboard</i>
                        </h1>
                    </div>
                </div>

            </div>

         </div>

    )



    const showActionButtons = () => (

        <div className='bg-light'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <button className='btn btn-outline-info btn-block' data-toggle='modal'  data-target='#addcourse' >
                            <i className='fas fa-plus' aria-hidden='true'> Add course</i>
                        </button>
                    </div>
                    <div className='col-md-4'>
                        <Link to="/mycourses"role ='button' className='btn btn-outline-info btn-block' >
                            <i className='fas fa-brain' aria-hidden='true'> View my courses</i>
                        </Link>
                       
                        
                    </div>
                    <div className='col-md-4'>
                        <Link to="/allcourses" role ='button' className='btn btn-outline-info btn-block'>
                            <i className='fas fa-brain' aria-hidden='true'> view all courses</i>
                        </Link>
                    </div>

                </div>

            </div>

        </div>
        )

    


  

        const showcourses = () => (
                
            <div id ="addcourse" className='modal'>
                    <div className='modal-dialog modal-dialog-center modal-lg'>
                        <div className='modal-content'>
                        <form onSubmit={handelcourseSubmit}>
                            <div className='modal-header bg-info text-white' >
                                 <h5 className='modal-title'>Add Course</h5>
                                 <button className='close' data-dismiss='modal'>
                                    <span> <i className='fas fa-times'></i></span>
                                 </button>
                                  </div>

                                  
                            <div className='modal-body my-2'>
                                {errorMsg&& showErrorMsg(errorMsg)}
                                {successMsg && showSuccessMsg(successMsg)}


                                {
                                    loading ? (
                                         showloading()
                                    ) :(
                                        <Fragment>
                                    <label className='text-secondary'> Course Title </label>
                                    <input
                                    type='text'
                                    className='form-control'
                                    onChange={handelChange}
                                    name='Title'
                                    value={Title}
                                    />

                                     <label className='text-secondary py-1'> TotalHours </label>
                                    <input
                                    type='number'
                                    className='form-control'
                                    onChange={handelChange}
                                    name="TotalHours"
                                    value={TotalHours}
                                    min='0'
                                    />
                                    <label className='text-secondary py-1'> Subject </label>
                                  
                                    <select className='custom-select mr-sm-2' onChange={handelChange} name="Subject" value={Subject}>
                                        <option>Choose one..</option>
                                        {subjects && subjects.map(s =>(
                                            <option key = {s._id} value={s._id}>
                                                {s.subject}
                                            </option>
                                        ))}
                                       
                                    </select>
                                    <label className='text-secondary py-1'> Price </label>
                                    <input
                                    type='number'
                                    className='form-control'
                                    onChange={handelChange}
                                    name='Price'
                                    value={Price}
                                    min='0'
                                    />
                                    <label className='text-secondary py-1'> Short Summary </label>
                                    <textarea
                                    rows="3"
                                    type='text'
                                    className='form-control'
                                    onChange={handelChange}
                                    name = "ShortSummary"
                                    value={ShortSummary}>
                                    </textarea>
                                    </Fragment>


                                    )
                                    




                                }
                                     
                            </div>
                            <div className='modal-footer'>

                                <button className='btn btn-secondary' data-dismiss='modal'>Close </button>
                                <button type = 'submit'className='btn btn-info '> Add course</button>




                            </div>
                            </form>
                        </div>

                    </div>
            </div>
                
                )

                


    return (
        <section>
            {showHeader()};
            {showActionButtons()};
            {showcourses()}
            {errorMsg && showErrorMsg(errorMsg)}
         </section>
    )
}
  
export default instructorDashboard;