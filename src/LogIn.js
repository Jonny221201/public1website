import React, {useState} from 'react';
import './Styles/logIn.css';
import Footer from './Footer'
import Axios from 'axios';
import { Link } from 'react-router-dom';

function LogIn () {


   
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
  

    const addToAccounts = () => {
        Axios.post('http://localhost:3001/logInData', {
            name: name,
            mail: mail,
            password: password,
       
    } );
       
    };


    return(
        <div>
        <div className = 'logInContainerMain'>
            <form className = 'logInContainer'>
                <h1 className = 'logInHeader'>Akkauntga Kirish</h1>
                <div className = 'logInFormHolder'>
                    
                    <p className = 'logInText'>Elektron Manzilingizni Kiriting</p>
                    <input onChange = {(event) => {setMail(event.target.value)}} className = 'logInInput' type = 'email' required></input>
                    <p className = 'logInText'>Parolingizni Kiriting</p>
                    <input onChange = {(event) => {setPassword(event.target.value)}} className = 'logInInput' type = 'password' required></input>

                    <button onClick = {addToAccounts} type = 'submit' className = 'logInSubmit'>Kirish</button>
                </div>
            </form>
         
        </div>
        <div className = 'signUp'>
        <p className = 'signUpLinkText'>Agar akkountingiz bo'lmasa, yangi akkount oching. <Link className = "signUpLink" to = './SignUp'> Akkount ochish. </Link> Siz akkount ochish orqali 
            belgilangan barcha shartlarimizga rozi bo'lasiz.
        </p>
        </div>
        <Footer />
        </div>
       
    )
}


export default LogIn;
