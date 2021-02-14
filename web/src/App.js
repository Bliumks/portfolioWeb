import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './pages/About'
import Projects from './pages/Projects'
import Phtotos from './pages/Photos'
import Contact from './pages/Contact'
import Home from './pages/Index'
import { NavLink } from 'react-router-dom';
import Error from './pages/Error'

class App extends Component {
  constructor(props){
        super(props);
        this.state = { showNav: false };
        this.toggleNav = this.toggleNav.bind(this);
    }
    
    toggleNav() {
        this.setState({ 
            showNav: !this.state.showNav
        })
    }
    
    render() {
        const { showNav } = this.state
  
    return (      
       <BrowserRouter>
        <div>
          <nav id="mainNavbar" className="navbar navbar-light navbar-expand-md py-0 fixed-top">
            <NavLink to="/" className="navbar-brand">BLIUMKIN</NavLink>

            <button className="navbar-toggler"  onClick={this.toggleNav} dataToggle="collapse" dataTarget="#navLinks" ariaLabel="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
          <div className={(showNav ? 'show' : '') + ' collapse navbar-collapse'} id="navLinks">
              <ul className="navbar-nav">
                  <li className="nav-item">
                      <NavLink to="/about" className="nav-link">ABOUT</NavLink>
                  </li>
                  <li className="nav-item">
                      <NavLink to="/projects" className="nav-link">PROJECTS</NavLink>
                  </li>
                  <li className="nav-item">
                      <NavLink to="/photos" className="nav-link">PHOTOS</NavLink>
                  </li>
                  
                  <li className="nav-item">
                      <NavLink to="/contact" className="nav-link">CONTACT</NavLink>
                  </li>
              </ul>
              {/* <div className="navbar-nav mx-auto" style={{height:"18px", width:"875px"}}>
                  <label className="switch">
                      <input type="checkbox"/>
                      <span className="slider round"></span>
                  </label>
              </div> */}
          </div>  
        </nav>
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/about" component={About} exact/>
             <Route path="/projects" component={Projects} exact/>
             <Route path="/photos" component={Phtotos} exact/>
             <Route path="/contact" component={Contact} exact/>
             <Route component={Error} exact/>
           </Switch>
        </div> 
        
      </BrowserRouter>
    );
  }
}
export default App