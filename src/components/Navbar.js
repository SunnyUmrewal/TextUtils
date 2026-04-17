/*
we created a navbar component
and will import this file in app.js

and use the by writing <Navbar/> in the code


now go to app.js and see i am imported Navbar from /components/Navbar 
and have used <Navbar/> there at the end.


to not make the app.js conjusted we will do is the navabar code which was written here


when making a component keep its first letter of the file always capital


*/

import React from 'react'
import PropTypes from 'prop-types'


//props once given should never be changed like (prop.title+=1;) no one should do that. we can use state to do so.

export default function Navbar(props) {  //giving args for title
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>   {/* //using title here */}

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              

              <li className="nav-item">
                <a className="nav-link active" href="/">
                  {props.aboutText}
                </a>
              </li>
            </ul>

            <div className={`form-check form-switch me-3 text-${props.mode==='light'?'dark':'light'}`}>  {/*if i want to change something dynamically then i can write java script here */}
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode==='light'?'dark':'light'} mode</label>
            </div>
            
            
            
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
            

          </div>
        </div>
      </nav>


      
    </>
  );
}



//now learning about proptype:


//syntax: component name.propTypes(p is small) = {firstPropName: propTypes.datatype}
Navbar.propTypes = {title: PropTypes.string,aboutText: PropTypes.string,}

//now for title prop we can only write string input in it, so to avoid wrong input we do so


//this is passing default props values when we do not specify them in app.js when we call a component then these are used by default.
Navbar.defaultProps = {
  title: 'set title here',
  aboutText: 'default about',
};







/*

Navbar.propTypes = {title: PropTypes.string,aboutText: PropTypes.string,}

in this if i write 
title: PropTypes.string.isRequired

then we must provide title a value,
if not then it will take default value 
if default value is also not present then it will give error
so if its mentioned in proptype that its  required then its should be entered


*/







