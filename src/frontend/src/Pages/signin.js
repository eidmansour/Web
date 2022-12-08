import React from 'react' ; 
import {Link} from 'react-router-dom';
import userLogo from "../assets/default-user.png"




const Signin = () =>{


    const showtype = ()=>(
        

        <><><button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Select Type
            </button><div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link to="./user" class="dropdown-item">User</Link>
                    <Link to="./admin" class="dropdown-item">admin</Link>
                    <Link to='./instructor' class="dropdown-item">instructor</Link>
                    <Link to='/guest/dashboard' class="dropdown-item">guest</Link>
                    <Link to='./cortrainee' class="dropdown-item">cortrainee</Link>
                </div></></>




    );

    return (
        <div className='row px ' >
            <div className=' mx-auto '>{showtype()}</div></div>
       
    );
}

export default Signin ; 