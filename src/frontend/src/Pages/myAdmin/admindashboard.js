import React, { Fragment} from 'react'
import { useState } from 'react'
import {showErrorMsg, showSuccessMsg } from "../../Helpers/message";
import {showloading} from "../../Helpers/loading"; 
import isEmpty from 'validator/lib/isEmpty';

 
const AdminDashboard = () =>{



    const [formData ,setData]=useState({
        username:"",
        email:'',
        password:"",
        errorMsg:"",
        successMsg:"",
        loading:false,

    })  
    
    const {username , email, password,errorMsg,successMsg,loading} = formData


 const handelinstructorchange = (evt) =>{

        setData({
            ...formData,
            [evt.target.name] : evt.target.value,
})



    }

    const handelinstructor = async(evt) => {
        evt.preventDefault(); 
    
        const instructor = {username, email,password}

        const response = await fetch("/admin/addinstructor" , 
                            {
                                method:'POST',
                                body:JSON.stringify(instructor),
                                headers:{
                                    'Content-Type':'application/json'
                                }
                        }
)

        const json = await response.json()

        if(!response.ok){

            setData({...formData , errorMsg:json.errorMessage})
        }

        if(response.ok){
            setData({
                username:"",
                email:'',
                password:"",
                errorMsg:"",
            })
            console.log("new instructor  added: " ,json )


        }

    


    }

    const handleadminSubmission = async (evt)=>{
        evt.preventDefault(); 
    
        const admin = {username, email,password}

        const response = await fetch("/admin/addadmin" , 
                            {
                                method:'POST',
                                body:JSON.stringify(admin),
                                headers:{
                                    'Content-Type':'application/json'
                                }
                        }
)

        const json = await response.json()

        if(!response.ok){

            setData({...formData , errorMsg:json.errorMessage})
        }

        if(response.ok){
            setData({
                username:"",
                email:'',
                password:"",
                errorMsg:"",
            })
            console.log("new admin  added: " ,json )


        }



    }
    const [formcor ,setCor]=useState({
        Name:"",
        Email:'',
        Password:"",
        Company:"",
        errorMsg:"",
})  
    
 const handelcorchange = (evt) =>{

        setCor({
            ...formcor,
            [evt.target.name] : evt.target.value,
})



    }
    const Name = formcor.Name
    const Company = formcor.Company
    const Email = formcor.Email 
    const Password = formcor.Password


    const handelcorsubmission = async(evt)=>{

        evt.preventDefault();
        
        const cor = {Name ,Email , Password , Company}
        const response = await fetch("/admin/addcortrainee" , 
                            {
                                method:'POST',
                                body:JSON.stringify(cor),
                                headers:{
                                    'Content-Type':'application/json'
                                }
                        }
)

        const json = await response.json()
        if(!response.ok){

            setCor({...formcor , errorMsg:json.errorMessage})
        }
        if(response.ok){
            setCor({
                username:"",
                email:'',
                password:"",
                errorMsg:"",
            })
            console.log("new cortrainee  added: " ,json )


        }





    }
    const [formsubject ,setSubject]=useState({
        subject:"",
}) 
    
    const {subject} = formsubject

    const handelSujectSubmission = async(evt) =>{
        evt.preventDefault();
        setData({...formData , loading:true})
        if(isEmpty(subject)){
            setData({
                ...formData,errorMsg:"Please Enter the Subject"
            })
        }
        else {
            setData({...formData ,  loading:true})
        const response = await fetch("/admin/addsubject" , 
                            {
                                method:'POST',
                                body:JSON.stringify({subject}),
                                headers:{
                                    'Content-Type':'application/json'
                                }
                        }
)
                    
        const json = await response.json()
        if(!response.ok){

            setData({...formData , errorMsg:json.errorMessage , loading:false})
        }
        if(response.ok){
            setSubject({
                subject:"",
                
                errorMsg:"",
            })
            setData({
                ...formData,successMsg:" Updated",loading:false
            })


        }
    }





    }






    const handelSubjectChange = (evt) =>{
        setData({
            ...formData,successMsg:"",errorMsg:""
        })

        setSubject({
            ...formsubject,
            [evt.target.name] : evt.target.value,
})





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
                <div className='row ' >
                    <div className='col-md-4'>
                        <button className='btn btn-outline-info btn-block' data-toggle='modal'  data-target='#addinstructor' >
                            <i className='fas fa-plus' aria-hidden='true'> Add Instructor</i>
                        </button>
                    </div>
                    <div className='col-md-4'>
                        <button className='btn btn-outline-info btn-block' data-toggle='modal' data-target='#addadmin'>
                            <i className='fas fa-plus' aria-hidden='true'> Add Admin</i>
                        </button>
                    </div>
                    <div className='col-md-4'>
                        <button className='btn btn-outline-info btn-block' data-toggle='modal' data-target='#addcortrainee'>
                            <i className='fas fa-plus' aria-hidden='true'> Add cortrainee</i>
                        </button>
                    </div>

                    <div className='col-md-4 py-2'>
                        <button className='btn btn-outline-warning btn-block' data-toggle='modal' data-target='#addSubjectModal'>
                            <i className='fas fa-plus' aria-hidden='true'> Add Subject</i>
                        </button>
                    </div>

                </div>

            </div>

        </div>
        )


        const showSubject=()=>(
            <div id ="addSubjectModal" className='modal'>
            <div className='modal-dialog modal-dialog-center modal-lg'>
                <div className='modal-content'>
                <form onSubmit={handelSujectSubmission}>
                    <div className='modal-header bg-warning text-white' >
                         <h5 className='modal-title'>Add Subject</h5>
                         <button className='close' data-dismiss='modal'>
                            <span> <i className='fas fa-times'></i></span>
                         </button>
                          </div>

                          
                    <div className='modal-body my-2'>
                        {errorMsg && showErrorMsg(errorMsg)}
                        {successMsg && showSuccessMsg(successMsg)}
                        {
                            
                            loading ?(
                                showloading()
                            ):(
                                    <Fragment>
                                        <label className='text-secondary'> Subject </label>
                                            <input
                                            type='text'
                                            className='form-control'
                                            onChange={handelSubjectChange}
                                            name='subject'
                                            value={subject}
                                            />

                                    </Fragment>




                        ) }
                          
                           
                    </div>
                    <div className='modal-footer'>

                        <button className='btn btn-secondary ' data-dismiss='modal'>Close </button>
                        <button type = 'submit'className='btn btn-warning text-white'> Add Subject</button>




                    </div>
                    </form>
                </div>

            </div>
    </div>





        )

        const showcortrainee = () =>(
            <div id ="addcortrainee" className='modal'>
            <div className='modal-dialog modal-dialog-center modal-lg'>
                <div className='modal-content'>
                <form onSubmit={handelcorsubmission}>
                    <div className='modal-header bg-info text-white' >
                         <h5 className='modal-title'>Add Company Trainee</h5>
                         <button className='close' data-dismiss='modal'>
                            <span> <i className='fas fa-times'></i></span>
                         </button>
                          </div>

                          
                        <div className='modal-body my-2'>
                            <label className='text-secondary'> User Name </label>
                            <input
                            type='text'
                            className='form-control'
                            onChange={handelcorchange}
                            name='Name'
                            value={Name}
                            />

                            <label className='text-secondary py-1'> Email </label>
                            <input
                            type='text'
                            className='form-control'
                            onChange={handelcorchange}
                            name="Email"
                            value={Email}
                            />
                            <label className='text-secondary'> Company Name </label>
                            <input
                            type='text'
                            className='form-control'
                            onChange={handelcorchange}
                            name='Company'
                            value={Company}
                            />
                            <label className='text-secondary py-1'> Password </label>
                            <input
                            type='password'
                            className='form-control'
                            onChange={handelcorchange}
                            name='Password'
                            value={Password}
                            />
                           
                    </div>
                    <div className='modal-footer'>

                        <button className='btn btn-secondary' data-dismiss='modal'>Close </button>
                        <button type = 'submit'className='btn btn-info '> Add The Trainee</button>




                    </div>
                    </form>
                </div>

            </div>
    </div>



        )



        const showadmin =() =>(
            <div id ="addadmin" className='modal'>
            <div className='modal-dialog modal-dialog-center modal-lg'>
                <div className='modal-content'>
                <form onSubmit={handleadminSubmission}>
                    <div className='modal-header bg-info text-white' >
                         <h5 className='modal-title'>Add Admin</h5>
                         <button className='close' data-dismiss='modal'>
                            <span> <i className='fas fa-times'></i></span>
                         </button>
                          </div>

                          
                    <div className='modal-body my-2'>
                            <label className='text-secondary'> User Name </label>
                            <input
                            type='text'
                            className='form-control'
                            onChange={handelinstructorchange}
                            name='username'
                            value={username}
                            />

                            <label className='text-secondary py-1'> Email </label>
                            <input
                            type='text'
                            className='form-control'
                            onChange={handelinstructorchange}
                            name="email"
                            value={email}
                            />
                            <label className='text-secondary py-1'> Password </label>
                            <input
                            type='password'
                            className='form-control'
                            onChange={handelinstructorchange}
                            name='password'
                            value={password}
                            />
                           
                    </div>
                    <div className='modal-footer'>

                        <button className='btn btn-secondary' data-dismiss='modal'>Close </button>
                        <button type = 'submit'className='btn btn-info '> Add Admin</button>




                    </div>
                    </form>
                </div>

            </div>
    </div>







        )

        const showinstructor = () => (
                
            <div id ="addinstructor" className='modal'>
                    <div className='modal-dialog modal-dialog-center modal-lg'>
                        <div className='modal-content'>
                        <form onSubmit={handelinstructor}>
                            <div className='modal-header bg-info text-white' >
                                 <h5 className='modal-title'>Add Instructor</h5>
                                 <button className='close' data-dismiss='modal'>
                                    <span> <i className='fas fa-times'></i></span>
                                 </button>
                                  </div>

                                  
                            <div className='modal-body my-2'>
                                    <label className='text-secondary'> User Name </label>
                                    <input
                                    type='text'
                                    className='form-control'
                                    onChange={handelinstructorchange}
                                    name='username'
                                    value={username}
                                    />

                                    <label className='text-secondary py-1'> Email </label>
                                    <input
                                    type='text'
                                    className='form-control'
                                    onChange={handelinstructorchange}
                                    name="email"
                                    value={email}
                                    />
                                    <label className='text-secondary py-1'> Password </label>
                                    <input
                                    type='password'
                                    className='form-control'
                                    onChange={handelinstructorchange}
                                    name='password'
                                    value={password}
                                    />
                                   
                            </div>
                            <div className='modal-footer'>

                                <button className='btn btn-secondary' data-dismiss='modal'>Close </button>
                                <button type = 'submit'className='btn btn-info '> Add Instructor</button>




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
            {showinstructor()}
            {showadmin()}
            {showcortrainee()}
            {showSubject()}
        </section>
    )
}

export default AdminDashboard ;