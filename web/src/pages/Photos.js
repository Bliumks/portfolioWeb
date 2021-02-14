import React,{Component} from 'react';
import '../styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import a from '../imgs/1.jpg';
import b from '../imgs/2.jpg';
import c from '../imgs/3.jpg';
import d from '../imgs/4.jpg';




const Photos = () =>{
  
    return(
      <div className="Home">
        <section className="container-fluid px-0">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div id="headingGroup" className="text-white text-center d-none d-lg-block mt-5">
              <h1 class="">KEEP <span>|</span> IT <span>|</span> SIMPLE</h1>
              <h1 class="">KEEP <span>|</span> IT <span>|</span> SIMPLE</h1>
              <h1 class="">KEEP <span>|</span> IT <span>|</span> SIMPLE</h1>
              <h1 class="">KEEP <span>|</span> IT <span>|</span> SIMPLE</h1>
              <h1 class="">KEEP <span>|</span> IT <span>|</span> SIMPLE</h1>
              <h1 class="">KEEP <span>|</span> IT <span>|</span> SIMPLE</h1>
              <h1 class="">KEEP <span>|</span> IT <span>|</span> SIMPLE</h1>
              
            </div>
          </div>
          <div className="col-lg-6 ">
            <img className="img-fluid" src={a} alt=""/>
          </div>
        </div>
      </section>

    <section className="container-fluid px-0 ">
      <div className="row align-items-center content">
        <div className="col-md-6 order-2 order-md-1">
          <img className="img-fluid" src={d}  alt=""/>
        </div>
        <div className="col-md-6 text-center order-1 order-md-2">
          <div className="row justify-content-center">
            
            <div className="col-10 col-lg-8 mb-5 mb-md-0 con">
              <h2>PHOTO</h2>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-pin mg-6 d-none d-lg-inline"
                viewBox="0 0 16 16">
                <path
                  d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354zm1.58 1.408l-.002-.001zm-.002-.001l.002.001A.5.5 0 0 1 6 2v5a.5.5 0 0 1-.276.447h-.002l-.012.007-.054.03a4.922 4.922 0 0 0-.827.58c-.318.278-.585.596-.725.936h7.792c-.14-.34-.407-.658-.725-.936a4.915 4.915 0 0 0-.881-.61l-.012-.006h-.002A.5.5 0 0 1 10 7V2a.5.5 0 0 1 .295-.458 1.775 1.775 0 0 0 .351-.271c.08-.08.155-.17.214-.271H5.14c.06.1.133.191.214.271a1.78 1.78 0 0 0 .37.282z" />
              </svg>
              <p className="lead">
                Taking a photo is like an attempt to memorize the last moments of sleep, before someone turns on the light.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
    <section className="container-fluid px-0 ">
      <div className="row align-items-center content">
        <div className="col-md-6  text-center order-2 order-sm-1">
          <div className="row justify-content-center">
          
            <div className="col-10 col-lg-8 mb-5 mb-md-0 con">
              <h2>MONOCHROME</h2>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                className="bi bi-pin mg-6 d-none d-lg-inline" viewBox="0 0 16 16">
                <path
                  d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354zm1.58 1.408l-.002-.001zm-.002-.001l.002.001A.5.5 0 0 1 6 2v5a.5.5 0 0 1-.276.447h-.002l-.012.007-.054.03a4.922 4.922 0 0 0-.827.58c-.318.278-.585.596-.725.936h7.792c-.14-.34-.407-.658-.725-.936a4.915 4.915 0 0 0-.881-.61l-.012-.006h-.002A.5.5 0 0 1 10 7V2a.5.5 0 0 1 .295-.458 1.775 1.775 0 0 0 .351-.271c.08-.08.155-.17.214-.271H5.14c.06.1.133.191.214.271a1.78 1.78 0 0 0 .37.282z" />
              </svg>
              <p className="lead">
                From the moment, I saw an old film of my parent, I fall in love with b/w photography. Monochrome opens up a
                completely
                new perspective on the everyday world and allows to rediscover it to fill it with new stories.
              </p>
            </div>
          
          </div>
        </div>
        <div className="col-md-6 order-1 order-sm-2">
          <img className="img-fluid" src={c} alt=""/>
        </div>
      </div>
    </section>


    <section className="container-fluid px-0 ">
      <div className="row align-items-center content">
        <div className="col-md-6 order-2 order-md-1">
          <img className="img-fluid" src={b} alt=""/>
        </div>
        <div className="col-md-6 text-center order-1 order-md-2">
          <div className="row justify-content-center">
            
            <div className="col-10 col-lg-8 mb-5 mb-md-0 con">
              <h2>CONTEXT</h2>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-pin mg-6 d-none d-lg-inline"
                viewBox="0 0 16 16">
                <path
                  d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354zm1.58 1.408l-.002-.001zm-.002-.001l.002.001A.5.5 0 0 1 6 2v5a.5.5 0 0 1-.276.447h-.002l-.012.007-.054.03a4.922 4.922 0 0 0-.827.58c-.318.278-.585.596-.725.936h7.792c-.14-.34-.407-.658-.725-.936a4.915 4.915 0 0 0-.881-.61l-.012-.006h-.002A.5.5 0 0 1 10 7V2a.5.5 0 0 1 .295-.458 1.775 1.775 0 0 0 .351-.271c.08-.08.155-.17.214-.271H5.14c.06.1.133.191.214.271a1.78 1.78 0 0 0 .37.282z" />
              </svg>
              <p className="lead">
                I don't like to give discription or titles to my works for the viewer to create a unique personal connection with seen.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
      </div>
    )

}

export default Photos