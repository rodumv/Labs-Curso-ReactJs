import React from 'react';
import {
    NavLink
  } from 'react-router-dom';
const Header = () => {
return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="/">React</a>
                </div>
              <ul className="nav navbar-nav">
                    <li><NavLink  to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/courses">Cursos</NavLink></li>
                    <li><NavLink to="/gallery">Galería</NavLink></li>
                    
               </ul>   
            </div>
        </nav>
    );
}


export default Header;