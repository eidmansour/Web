import React ,{useState }from 'react';
import { Link } from 'react-router-dom';
import "../../css/signup.css";
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import equals from 'validator/lib/equals';
import {showErrorMsg , showSuccessMsg} from "../../Helpers/message"; 
import {showloading} from "../../Helpers/loading"; 




const signup =() =>{
    const[formData ,  setFormData]=useState({

        username:'',
        email:'',
        password:'',
        password2:'',
        successMsg:false,
        errorMsg:false, 
        loading:false


    })
        const {username , email , password , password2 , successMsg , errorMsg,loading} = formData;

    const handleChange = (evt) =>{
        setFormData({
            ...formData,
            [evt.target.name] : evt.target.value,
            errorMsg:'',
            successMsg:'',
        })

    };
    const handleSubmit = async (evt) =>{
        evt.preventDefault(); 
        console.log(formData);

        if(isEmpty(username) || isEmpty(email) || isEmpty(password) || isEmpty(password2)){
            setFormData({
                ...formData , errorMsg:'All fields are required'
            })
        }
        else if(!isEmail(email)){
            setFormData({
                ...formData , errorMsg:'invalid email'
            })
        }
        else if(!equals(password,password2)){
            setFormData({
                ...formData , errorMsg:'passwords do not match'
            })
        }
        else {
           
            const admindata = {username,email,password}

            setFormData({...formData , loading:true});

            const response = await fetch('/signup/instructor',{
                method:'POST', 
                body:JSON.stringify(admindata),
                headers:{
                    'Content-Type':'application/json'
                }
            })
           
            const json = await response.json()
           
            if(!response.ok){setFormData({...formData , errorMsg:json.errorMessage , loading:false})}

           if(response.ok){
            setFormData({...formData , successMsg:json.successMessage , loading:false})
            setFormData({
                username:'',
                email:'',
                password:'',
                password2:'',
                loading:false, 
                errorMsg:'',
                
})
           }

        }


    }

    const showSignupForm =() =>(

        <form className='signup-form' onSubmit={handleSubmit}  noValidate>
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-user'></i>


                    </span>
                </div>
                <input
                  name = 'username'
                  value={username}
                  className='form-control'
                  placeholder='Name'
                  type='text'
                  onChange={handleChange}
                  
                  />
            </div>
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-envelope'></i>


                    </span>
                </div>
                <input
                  name = 'email'
                  value = {email}
                  className='form-control'
                  placeholder='Email adress'
                  type='email'
                  onChange={handleChange}
                  
                  />
            </div>
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-lock'></i>


                    </span>
                </div>
                <input
                  name = 'password'
                  value={password}
                  className='form-control'
                  placeholder='Create Password'
                  type='password'
                  onChange={handleChange}
                  
                  />
            </div>
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-lock'></i>


                    </span>
                </div>
                <input
                  name = 'password2'
                  value = {password2}
                  className='form-control'
                  placeholder='Confirm password'
                  type='password'
                  onChange={handleChange}
                  
                  />
            </div>
            <div className='form-group'>
                <button type ='submit' className='btn btn-primary btn-block'>Signup</button>
             </div>

            <p className='text-center text-white'>Have an account?<Link to ="../signin">Log in </Link>
            
            </p>
            

        </form>

)
return( 
    <div className='signup-container'>
        <div className='row px-3 vh-100'>
            <div className='col-md-5 mx-auto  align-self-center' >
                {showSignupForm()}
                {successMsg && showSuccessMsg(successMsg)}
                {errorMsg && showErrorMsg(errorMsg)}
                 <div className='text-center'>{loading && showloading()}</div> 
                            
            </div>
                 </div>
                    </div>

)}

export default signup;