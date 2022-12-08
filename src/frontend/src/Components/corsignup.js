import React from 'react';
import { Link } from 'react-router-dom';
import "./signup.css";

const corsignup =() =>{
    const showCorSignupForm =() =>(

        <form className='signup-form'>
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-user'></i>


                    </span>
                </div>
                <input
                  name = ''
                  className='form-control'
                  placeholder='Name'
                  type='text'
                  
                  />
            </div>
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-user'></i>


                    </span>
                </div>
                <input
                  name = ''
                  className='form-control'
                  placeholder='Company Name'
                  type='text'
                  
                  />
            </div>
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-envelope'></i>


                    </span>
                </div>
                <input
                  name = ''
                  className='form-control'
                  placeholder='Email adress'
                  type='email'
                  
                  />
            </div>
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-lock'></i>


                    </span>
                </div>
                <input
                  name = ''
                  className='form-control'
                  placeholder='Create Password'
                  type='password'
                  
                  />
            </div>
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-lock'></i>


                    </span>
                </div>
                <input
                  name = ''
                  className='form-control'
                  placeholder='Confirm password'
                  type='password'
                  
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
            <div className='col-md-5 mx-auto align-self-center'   >{corsignup()}</div>

            
        </div>
            
                </div>

)}

export default signup;