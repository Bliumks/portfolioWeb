import React,{Component} from 'react';
import '../styles/style.css';
import {Helmet} from "react-helmet";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import i from '../imgs/contact.jpg';
import e from '../imgs/envelope.svg';




const Contact = () =>{
  
    return(
      <div className="Home container-fluid px-0 ">
        <Helmet>
                
                <title>Contact Me</title>
                
            </Helmet>
        <section id="coneinerI" className="container-fluid px-0" >
        <div id="rowC" className="row align-items-center justify-content-center">
            <div className="col-lg-4 order-lg-1  d-none d-lg-block" id="leftC">
                <div id="linksC" className='col-6'>
                  <a href="https://github.com/Bliumks"><FontAwesomeIcon style={{marginTop: "25px"}} icon={faGithub} className="icon fa-8x"></FontAwesomeIcon></a>
                  <a href="https://www.linkedin.com/in/nikita-bliumkin/"><FontAwesomeIcon style={{marginTop: "25px"}} icon={faLinkedin} className="icon fa-8x"></FontAwesomeIcon></a>
                    
                </div>
            </div>
            <div className="col-lg-4 col-md-6 order-1 order-lg-2" id="centerC">
                <h1 style={{fontWeight: 200}}>LET'S KEEP IN TOUCH</h1>
                <img src={i} id="imgC" className="img-fluid d-none d-md-block" alt=""/>
                <a href="https://docdro.id/FqNFJso"><button type="button" id='btC' className="btn bt" >&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;RESUME&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</button></a>
            </div>
            <div class="col-lg-4 col-md-6 row justify-content-center order-2 order-lg-3" id="rightC">
                <div>
                    <p id='maintextC'>
                        I hope you enjoyed your visit!<br/>
                        To reach me use the links or this email<br/> <img src={e} width="20" height="20"
                            fill="currentColor" className="bi bi-pin mg-1 " viewBox="0 0 16 16" alt=""/><b>
                            &nbsp;&nbsp;n.bliumkin@gmail.com</b>
                        <p class="d-lg-none" > <a href="https://github.com/Bliumks"><FontAwesomeIcon style={{marginTop:"2%", marginRight:"1%"}} icon={faGithub} className="icon fa-2x"></FontAwesomeIcon></a>
                    <a href="https://www.linkedin.com/in/nikita-bliumkin/"><FontAwesomeIcon style={{marginTop:"2%", marginLeft:"1%"}} icon={faLinkedin} className="icon fa-2x"></FontAwesomeIcon></a>
                    </p>
                    </p>
                </div>
                
            </div>
        </div>
    </section>
      </div>

    )

}

export default Contact