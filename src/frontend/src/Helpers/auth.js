import { setCookie ,getCookie , deleteCookie} from "./cookies"; 
import {setLocalStorage ,getLocalStorage ,deleteLocalStorage} from "./localStorage"




export const setAuthentication =(token , user) =>{
    setCookie('token',token);
    setLocalStorage('user' , user);
}; 


export const isAusthenticated = ()=>{

    if(getCookie('token') && getLocalStorage('user')){
        return getLocalStorage('user'); 

    }
    else { return false; }

}


export const logOut = next =>{

deleteCookie('token'); 
deleteLocalStorage('user'); 

next() ;


}



  