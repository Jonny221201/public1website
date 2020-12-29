import React from 'react';
import Navigation from "./Navigation";
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"

import SettingsMain from './SettingsMain'
import Answer from "./Answer"
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TermsOfService from './TermsOfService';
import PrivacyPolicy from './PrivacyPolicy';
import AskQuestion from './AskQuestion';
import LogIn from './LogIn';
import SignUp from './SignUp';




function App() {
 
    return(
        <Router>
        <div>
        <Navigation />
       
   <Switch>
    <Route path = "/" exact component = {Home} />
    <Route path = "/About" component = {About} />
    <Route path = "/Answer" component = {Answer} />
    <Route path = "/Contact" component = {Contact} />
    <Route path = "/SettingsMain" component = {SettingsMain} />
    <Route path = "/TermsOfService" component = {TermsOfService} />
    <Route path = "/PrivacyPolicy" component = {PrivacyPolicy} />
    <Route path = "/AskQuestion" component = {AskQuestion} />
    <Route path = "/LogIn" component = {LogIn} />
    <Route path = "/SignUp" component = {SignUp} />
    
    </Switch>
        </div>

        </Router>
        
    )
    
}


export default App;

