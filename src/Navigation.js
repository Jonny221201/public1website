import React from 'react';
import "../src/Styles/Navigation.css";
import { NavLink } from "react-router-dom";


function Navigation() {
    return(
       
        <div className = 'navigation'>

            <h1 className = "logo">Muloqot</h1>
            <i className ="fas fa-search"></i>
            <input type = 'search' className = 'search-bar'  placeholder = 'Qidiring...'></input>
           
            <ul className = "navUl">
              
           <li className = "navList">
                    <NavLink activeClassName = 'active' exact to = '/'  className = "navLinks"> Bosh Sahifa </NavLink>
                </li>
        
        
                <li className = "navList">
                    <NavLink activeClassName = 'active' to = './About'className = "navLinks">  Biz Haqimizda </NavLink>
                </li>
       
       
                <li className = "navList">
                     <NavLink activeClassName = 'active' to = './Answer' className = "navLinks">  Javob Berish  </NavLink>
                </li>
     
        
                <li className = "navList">
                    <NavLink activeClassName = 'active' to = './Contact' className = "navLinks">  Aloqa         </NavLink>
                </li>
        
        
                <li className = "navList">
                    <NavLink activeClassName = 'active' to = './SettingsMain' className = "navLinks">  Sozlamalar    </NavLink>
                </li>
           
            </ul>
            <li>    <NavLink activeClassName = 'active'  to = './AskQuestion'>   <button className = 'question-btn'>Savol Berish</button>
            </NavLink></li>
          <li>  <NavLink activeClassName = 'active3' to = './LogIn' className = 'logIn'>  Kirish    </NavLink></li>
           
           
        </div>
        
    )
}


export default Navigation;