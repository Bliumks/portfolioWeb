import React,{Component} from 'react';
import '../styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import i from '../imgs/health.png';
import s from '../imgs/solutions.png';
import r from "../imgs/react.png"


const Projects = () =>{
  
    return(
      <div className="Home pro container-fluid px-0">
        <section id="containerPr" className="container-fluid px-0 ">
          <div className="row align-items-center center ">
              <div id="leftPr" className="col-lg-6 order-1">
                  <div id="cardPr"className="card justify-content-center" style={{background:"#e9ecef" }}>
                      <img src={i} className="card-img-top img-fluid" style={{marginTop: "15px"}} alt="..."/>
                      <div className="card-body">
                          <div id="dis">
                              <h4 className="card-title">Health Monitoring System</h4>
                              <h6 className="card-title">Jan 2020 -Dec 2020</h6>
                          </div>
                      </div>
                      <div className="used"><span className="badge rounded-pill ">Python</span>
                          <span className="badge rounded-pill ">Flask</span>
                          <span className="badge rounded-pill ">React.js</span>
                          <span className="badge rounded-pill ">Python</span>
                          <span className="badge rounded-pill ">HTML</span>
                          <span className="badge rounded-pill ">CSS</span>
                          <span className="badge rounded-pill ">SQL</span>
                      </div>
                  </div>
              </div>
              <div className="col-lg-6 order-2 ">
                  <div id="rightPr"  className="row ">
                      <div id="txtPr" className="col-10 text-center">
                          <p className="text-left">
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As a part of my university capstone project, I was working in a team designing smart sensors for a washroom. The purpose
                              of this device is to help elder people to maintain their independence for a longer period of time.The project was created in collaboration with the scientific laboratory of Carleton University that specializes in the
                              design of smart sensors.
                              </p><p className="text-left">
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The architecture consists of humidity sensors connected to water pipes and pressure sensors located at the entrance. Sensors collect such data as how many times a person entered the washroom per day, the
                              temperature of running water and etc. Then this data is being analyzed by the system and to the caregiver's webpage in
                              form of graphs.
                              </p><p className="text-left">
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;During this project, I worked as a full-stack developer. My responsibilities were to design backend modules and connect
                              them with API. Also, I contributed to the design of the database, and caregiver's page design.
                          </p>
                          <a href="https://github.com/PirateRoberts98/capstone-hygeine-managment?fbclid=IwAR2DkIip-srmbZXqD_cVYsKIJPd78ZM8SArkJGf2jCEtPKoGF5r_NJueJrU"><FontAwesomeIcon icon={faGithub} className="icon fa-3x"></FontAwesomeIcon></a>
                      </div>
                  </div>
              </div>
          </div>
      </section>
        <section id="containerPr" className="container-fluid px-0 ">
          <div className="row align-items-center center ">
              <div id="leftPr" className="col-lg-6 order-1">
                  <div id="cardPr"className="card justify-content-center" style={{background:"#e9ecef" }}>
                      <img src={s} className="card-img-top img-fluid" style={{marginTop: "15px"}} alt="..."/>
                      <div className="card-body">
                          <div id="dis">
                              <h4 className="card-title">Website for Tracking<br/> Constituents</h4>
                              <h6 className="card-title">Dec 2020 - Present</h6>
                          </div>
                      </div>
                      <div className="used"><span className="badge rounded-pill ">Python</span>
                          <span className="badge rounded-pill ">Flask</span>
                          <span className="badge rounded-pill ">WordPress</span>
                          <span className="badge rounded-pill ">Python</span>
                          <span className="badge rounded-pill ">Firebase</span>
                      </div>
                  </div>
              </div>
              <div className="col-lg-6 order-2 ">
                  <div id="rightPr"  className="row ">
                      <div id="txtPr" className="col-10 text-center">
                          <p className="text-left">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; During my volunteering period at Constituent Manager Solution, I was designing a website for tracking information about
                            party voters. Main clients for this product had to become party members who are looking for a cheap and effective
                            service. 
                        </p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The system has a comprehended search engine that helps users retrieve data using multiple search parameters. Clients can
                        also create tags for their voters and assign them into different categories.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My main goal was to design backend architecture that could be reusable and easy to modify. My code is currently used for
                        the beta-test and will be the base for the final product.</p>
                          <a href="https://github.com/Bliumks/consTracker"><FontAwesomeIcon icon={faGithub} className="icon fa-3x"></FontAwesomeIcon></a>
                      </div>
                  </div>
              </div>
          </div>
      </section>
        <section id="containerPr" className="container-fluid px-0 ">
          <div className="row align-items-center center ">
              <div id="leftPr" className="col-lg-6 order-1">
                  <div id="cardPr"className="card justify-content-center" style={{background:"#e9ecef" }}>
                      <img src={r} className="card-img-top img-fluid" style={{marginTop: "15px"}} alt="..."/>
                      <div className="card-body">
                          <div id="dis">
                              <h4 className="card-title">Web Portfolio</h4>
                              <h6 className="card-title">Jan 2021 - Feb 2021</h6>
                          </div>
                      </div>
                      <div className="used"><span className="badge rounded-pill ">Python</span>
                          <span className="badge rounded-pill ">JavaScript</span>
                          <span className="badge rounded-pill ">React.js</span>
                          <span className="badge rounded-pill ">Bootstrap</span>
                          <span className="badge rounded-pill ">HTML</span>
                          <span className="badge rounded-pill ">CSS</span>
                          <span className="badge rounded-pill ">Firebase</span>
                      </div>
                  </div>
              </div>
              <div className="col-lg-6 order-2 ">
                  <div id="rightPr"  className="row ">
                      <div id="txtPr" className="col-10 text-center">
                          <p className="text-left">
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As a part of my university capstone project, I was working in a team designing smart sensors for a washroom. The purpose
                              of this device is to help elder people to maintain their independence for a longer period of time.The project was created in collaboration with the scientific laboratory of Carleton University that specializes in the
                              design of smart sensors.
                              </p><p className="text-left">
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The architecture consists of humidity sensors connected to water pipes and pressure sensors located at the entrance. Sensors collect such data as how many times a person entered the washroom per day, the
                              temperature of running water and etc. Then this data is being analyzed by the system and to the caregiver's webpage in
                              form of graphs.
                              </p><p className="text-left">
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;During this project, I worked as a full-stack developer. My responsibilities were to design backend modules and connect
                              them with API. Also, I contributed to the design of the database, and caregiver's page design.
                          </p>
                          <a href="https://github.com/Bliumks/portfolioWeb"><FontAwesomeIcon icon={faGithub} className="icon fa-3x"></FontAwesomeIcon></a>
                      </div>
                  </div>
              </div>
          </div>
      </section>
        {/* <section id="containerPr" className="container-fluid px-0 ">
          <div className="row align-items-center center ">
              <div id="leftPr" className="col-lg-6 order-1">
                  <div id="cardPr"className="card justify-content-center" style={{background:"#e9ecef" }}>
                      <img src={i} className="card-img-top img-fluid" style={{marginTop: "15px"}} alt="..."/>
                      <div className="card-body">
                          <div id="dis">
                              <h4 className="card-title">Educational Website</h4>
                              <h6 className="card-title"></h6>
                          </div>
                      </div>
                      <div className="used"><span className="badge rounded-pill ">Python</span>
                          <span className="badge rounded-pill ">Flask</span>
                          <span className="badge rounded-pill ">React.js</span>
                          <span className="badge rounded-pill ">Python</span>
                          <span className="badge rounded-pill ">HTML</span>
                          <span className="badge rounded-pill ">CSS</span>
                          <span className="badge rounded-pill ">SQL</span>
                      </div>
                  </div>
              </div>
              <div className="col-lg-6 order-2 ">
                  <div id="rightPr"  className="row ">
                      <div id="txtPr" className="col-10 text-center">
                          <p className="text-left">
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As a part of my university capstone project, I was working in a team designing smart sensors for a washroom. The purpose
                              of this device is to help elder people to maintain their independence for a longer period of time.The project was created in collaboration with the scientific laboratory of Carleton University that specializes in the
                              design of smart sensors.
                              </p><p className="text-left">
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The architecture consists of humidity sensors connected to water pipes and pressure sensors located at the entrance. Sensors collect such data as how many times a person entered the washroom per day, the
                              temperature of running water and etc. Then this data is being analyzed by the system and to the caregiver's webpage in
                              form of graphs.
                              </p><p className="text-left">
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;During this project, I worked as a full-stack developer. My responsibilities were to design backend modules and connect
                              them with API. Also, I contributed to the design of the database, and caregiver's page design.
                          </p>
                          <a href="https://github.com/PirateRoberts98/capstone-hygeine-managment?fbclid=IwAR2DkIip-srmbZXqD_cVYsKIJPd78ZM8SArkJGf2jCEtPKoGF5r_NJueJrU"><FontAwesomeIcon icon={faGithub} className="icon fa-3x"></FontAwesomeIcon></a>
                      </div>
                  </div>
              </div>
          </div>
      </section> */}
        
      
    
        
    
    </div>
    )

}

export default Projects