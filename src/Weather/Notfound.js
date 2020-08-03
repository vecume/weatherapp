import React from 'react';
import './css/notfound.css';

function Notfound() {


  return (
    <div className="notfound">
      <div className="box">
        <h2 id="toBeActivated">404</h2>
        <h2>404</h2>
      </div>
      <div className="wrapper">
        <div className="textbox">
          <h3 className="glitch">CITY</h3>
        </div>
        <div className="textbox textbox2">
          <h3 className="glitch">NOT</h3>
        </div>
        <div className="textbox textbox3">
          <h3 className="glitch">FOUND!</h3>
        </div>
      </div>
    </div>
  )
}

export default Notfound;