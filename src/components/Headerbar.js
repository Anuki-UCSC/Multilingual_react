import React from "react";

function Headerbar() {
    return (
      <div className="Headerbar">
       <nav className="navbar navbar-expand-lg navbar-light bg-info bg-gradient">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
                {/* <img src="./src/img/phoenix.png"></img> */}
                Magical World</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">AboutUs</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Pages</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Portfolio</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">ContactUs</a>
                </li>
                
               
            </ul>
            
            </div>
        </div>
        </nav>
      </div>
    );
  }

export default Headerbar;