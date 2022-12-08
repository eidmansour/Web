import React from 'react'

import { Link } from 'react-router-dom';
 
const GuestDashboard = () =>{

    


    
    const showActionButtons = () => (

        <div className='bg-light'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <Link to="/allcourses" role ='button' className='btn btn-outline-info btn-block'>
                            <i className='fas fa-brain' aria-hidden='true'> view all courses</i>
                        </Link>
                    </div>

                </div>

            </div>

        </div>
        )

        
                

                
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


    return (
        <section>
            {showHeader()};
            {showActionButtons()};
            {/* {showcourses()} */}
            {/* {errorMsg && showErrorMsg(errorMsg)} */}
        </section>
    )
}

export default GuestDashboard;