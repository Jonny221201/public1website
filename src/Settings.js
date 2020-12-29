import React from 'react';
import './Styles/Settings.css'
import {BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';


let darkMode = localStorage.getItem('darkMode');

const enableDarkMode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkMode", null);
}

if ( darkMode === 'enabled') {
  enableDarkMode();
}
 
function change () {
  darkMode = localStorage.getItem("darkMode"); 
  if ( darkMode !== "enabled" ) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }

}


function Settings() {
    return(

      
        <div className = 'settingsContainer'>

<div className = 'settingsLeftSide'>
<h1 className = 'settingsHeader'> Sozlamalar</h1>

<ul className = 'settingsUl'>
    <NavLink activeClassName = 'active1'  to = '/SettingsMain'  className = "settingsList">Akkount</NavLink>
    <NavLink activeClassName = 'active1'  to = '/Language'  className = "settingsList">Til</NavLink>
    <NavLink activeClassName = 'active1' to = '/Notifications'  className = "settingsList">Eslatmalar</NavLink>
    <div className = "themeContanier">
    <li className = "settingsList"><i className="fas fa-moon"></i></li>
    <div className = 'themeBtnContainer'>
    <input onClick = {change} type = 'checkbox' className = 'themeBtn' id = 'themeBtn'></input>
    </div>
    </div>
</ul>
</div>

        </div>
      
    )  
        
}








export default Settings

