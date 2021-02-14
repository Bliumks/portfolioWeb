import React,{Component} from 'react';
import '../styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFrown } from '@fortawesome/free-solid-svg-icons'




const  Error = () =>{
  
    return(
        <div className="Home">
            <div id="containerI" className="container-fluid justify-content-center " style={{height: '100vh'}} >
        
                <h1 style={{fontWeight: 200,fontSize:"3rem"}}>Page doesnt exist!<FontAwesomeIcon icon= {faFrown} style={{marginBottom:"0px"}} /></h1>
        
            </div>
        </div>
        
    )

}

export default Error