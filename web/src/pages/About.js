import React,{Component} from 'react';
import '../styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import i from '../imgs/about2.jpg';
import l from '../imgs/location.svg';
import c from '../imgs/calendar.svg';
import e from '../imgs/envelope.svg';

const About = () =>{
  
    return(
        <div className="Home">

            

            <div className="container-fluid px-0">
                <div id="rowA" className="row justify-content-center">
                    <div className="col-lg-5 order-2 order-lg-1" id="leftA"  >
                        <div className="card" id="A" style={{background:"#dee2e6"}} >
                            <img src= {i} className=" me card-img-top img-fluid" style={{marginTop: "15px"}} alt="..."/>
                            <div className="card-body">
                                <h4 className="card-title">NIKITA <span>BLIUMKIN</span></h4>
                                <h5 id='prof' className="card-title">Software Developer</h5>
                                <a href="https://github.com/Bliumks"><FontAwesomeIcon icon={faGithub} className="icon fa-4x"></FontAwesomeIcon></a>
                                <a href="https://www.linkedin.com/in/nikita-bliumkin/"><FontAwesomeIcon icon={faLinkedin} className="icon fa-4x"></FontAwesomeIcon></a>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title" style={{textAlign:" left", marginLeft:"40px"}}><img  alt=""  src={l} width="20"
                                        height="20" fill="currentColor" className="bi bi-pin mg-1 d-none d-lg-inline" viewBox="0 0 16 16"/>
                                    Toronto, ON </h5>
                                <h5 className="card-title " style={{textAlign:" left", marginLeft:"40px"}}><img  alt="" src={c} width="20"
                                        height="20" fill="currentColor" className="bi bi-pin mg-1 d-none d-lg-inline" viewBox="0 0 16 16"/> 21 Feb
                                    1997</h5>
                        
                                <h5 className="card-title" style={{textAlign:" left", marginLeft:"40px"}}><img alt=""  src={e} width="20"
                                        height="20" fill="currentColor" className="bi bi-pin mg-1 d-none d-lg-inline" viewBox="0 0 16 16"/>
                                    n.bliumkin@gmail.com </h5>
                            </div>
                            
                            <div className="my-table" style={{marginTop:"10%"}}>
                                    <h6 id="headA">LANGUAGES</h6>
                                    <h6>Python</h6>
                                    <h6>Java</h6>
                                    <h6>JavaScript</h6>
                                    <h6>CSS</h6>
                                    <h6>HTML</h6>
                                    <h6>C</h6>
                                    <h6>C++</h6>
                                    <h6>SQL</h6>
                            </div>
                            <div className="my-table">
                                    <h6 id="headA">TECHNOLOGIES</h6>
                                    <h6 >Visual Studio</h6>
                                    <h6 >Flask</h6>
                                    <h6 >React.js</h6>
                                    <h6 >Gatsby.js</h6>
                                    <h6 >Bootstrap</h6>
                                    <h6 >Firebase</h6>
                                    <h6 >PostgreSQL</h6>
                                    <h6 >Flask</h6>
                            </div>
                            
                        </div>
                    </div>
                    
                    <div className="col-lg-7  order-1 order-lg-2" >
                        <div id="rightA" className="justify-content-center">
                            <div id="allTextA">
                                <h1>ABOUT ME</h1>
                                <p className="lead">
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello there! My name is <b>Nikita Bliumkin</b>. I am a <b>Software Engineer</b> discovering the ways to
                                    apply my
                                    coding
                                    skills in real-life problems. The area of my main interest
                                    at the moment is <b>web development</b>. Work on the websites allows
                                    me to combine my love of visual arts with my coding passion, and
                                    this is the biggest motivation for me to move forward and
                                    get better in this field.
                                </p>
                                <p className="lead">
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In my spare time, I like to challenge myself with new projects
                                    to sharp my skills and to learn something new. Also, I am doing photography
                                    as a hobby! Whenever I feel that I need some fresh air and rest
                                    from my work, I grab my camera and go outside.
                                </p>
                                <p className="lead">
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;By the way, I recently graduated from university and I am <b>looking for new opportunities</b>. So make sure to download my resume! Also, check out my projects to see what I've
                                    been up to!
                                </p>
                                
                                <a href="../docs/Resume_a.pdf" download><button type="button" className="btn btn-outline-secondary">DOWNLOAD RESUME</button></a>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
    )

}

export default About