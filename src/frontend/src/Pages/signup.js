import React from 'react' ; 
import { Link } from 'react-router-dom';



const Signup = () =>{



    const showSignupForm = ()=>(
        
                <><><button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Select Type
            </button><div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link to="./user" class="dropdown-item">User</Link>
                    <Link to="./admin" class="dropdown-item">admin</Link>
                    <Link to='./instructor' class="dropdown-item">instructor</Link>
                </div></></>
                
                  
                
              );

    return (
        <div className='row px vh-100' >
            <div className=' mx-auto align-self-center'>{showSignupForm()}</div></div>
    );
}

export default Signup ; 