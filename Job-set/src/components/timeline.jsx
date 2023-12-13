/* Require Imports */
import React from 'react';
import '../index.css'

const App = () => {
  return (
    <>
      <div className="main">
        <h3 className="head">JOB-TREND'S 2021-22</h3>
        <div className="container">
          <ul>
            <li style={{ boxShadow: '0px 0px 10px rgba(0,0,0,0.5)' }}>
              <h3 className="heading">FrontEnd Developer</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>{/* <Link to="/">Read More </Link> */}
              <span className="date">January 2021</span>
              <span className="circle"></span>
            </li>
            <li style={{ boxShadow: '0px 0px 10px rgba(0,0,0,0.5)' }}>
              <h3 className="heading">BackEnd Developer</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>{/* <Link to="/">Read More </Link> */}
              {/* <Link to="/">Read More </Link> */}
              <span className="date">February 2021</span>
              <span className="circle"></span>
            </li>
            <li style={{ boxShadow: '0px 0px 10px rgba(0,0,0,0.5)' }}>
              <h3 className="heading">Full Stack Developer</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>{/* <Link to="/">Read More </Link> */}
              {/* <Link to="/">Read More </Link> */}
              <span className="date">March 2021</span>
              <span className="circle"></span>
            </li>
            <li style={{ boxShadow: '0px 0px 10px rgba(0,0,0,0.5)' }}>
              <h3 className="heading">App Developer</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>{/* <Link to="/">Read More </Link> */}
              {/* <Link to="/">Read More </Link> */}
              <span className="date">April 2021</span>
              <span className="circle"></span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );



}

export default App
