import React,{Component} from 'react';
import '../styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import i from '../imgs/me_main.jpg';


const Index = () =>{
  
    return(
      
      <div className="Home">


        <div id="containerI" className="container-fluid px-0 ">
          <div className="col justify-content-center">
            <img src={i} id="me_main" className="img-fluid"  alt=""/>
            <p id ="name"><span>N</span><span>I</span><span>K</span><span>I</span><span>T</span><span>A</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>B</span><span>L</span><span>I</span><span>U</span><span>M</span><span>K</span><span>I</span><span>N</span></p>
            <p id ="developer">Software Developer</p>
            <p id = "welcome">Let's create together</p>
          </div>
          

        
        
      </div>
      
    </div>

    )
  
}
export default Index;