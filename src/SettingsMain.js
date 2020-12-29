import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Account from './Account';
import Settings from './Settings'
import Language from './Language';
import Footer from './Footer'
import Notifications from './Notifications';
import './Styles/footer.css'

function SettingsMain() {
   return( 
   <Router>
    <div>
    
    <Settings />
        <Switch>
       
        <Route path = "/SettingsMain" exact component = {Account} />
        <Route path = "/Language" exact component = {Language} />
        <Route path = "/Notifications" exact component = {Notifications} />
        </Switch>
        <Footer />
    </div>
    </Router>
   
    )
}

export default SettingsMain;