import React , {Fragment} from 'react'; 
import {Link , useNavigate} from 'react-router-dom'

import {isAusthenticated} from "../Helpers/auth"

const Header = ()=>{

    const history = useNavigate()

    const showNavi = () =>(
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link to ="/" className="navbar-brand" >LOGO</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    {/* {!isAusthenticated() && (



                        <Fragment>
                            <li className="nav-item">
                                <Link to ="/" className="nav-link" >Home</Link>
                                </li>
                                <li className="nav-item">
                                <Link to ="/signin" className="nav-link active" aria-current="page">Signin</Link>
                                </li>
                                <li className="nav-item">
                                <Link to ="/signup" className="nav-link" >Signup</Link>
                            </li>
                    

                        </Fragment>
 )} */}


                    <li className="nav-item">
                    <Link to ="/" className="nav-link" >
                        <i className='fas fa-home'/> Home
                        </Link>
                    </li>
                    <li className="nav-item">
                    <Link to ="/signin" className="nav-link active" aria-current="page">
                       <i className='fas fa-sign-in-alt' /> Signin</Link>
                    </li>
                    <li className="nav-item">
                    <Link to ="/signup" className="nav-link" >
                        <i className='fas fa-edit'/> Signup</Link>
                    </li>
                    
                    
                </ul>


                
                </div>
                    
                </div>
        </nav>

    );

    //render 
        return <header id = 'header'>{showNavi()}</header>
            
    
       


};


export default Header;