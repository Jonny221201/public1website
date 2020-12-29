import React, {useState} from 'react';
import './Styles/logIn.css';
import Footer from './Footer'
import Axios from 'axios';
import { Link } from 'react-router-dom';

function SignUp () {


    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
  

    const addToAccounts = () => {
        Axios.post('http://localhost:3001/signUpData', {
            name: name,
            mail: mail,
            password: password,
       
    } );
       
    };


    return(
        <div>
        <div className = 'logInContainerMain'>
            <form className = 'logInContainer'>
                <h1 className = 'logInHeader'>Akkaunt Ochish</h1>
                <div className = 'logInFormHolder'>
                    <p className = 'logInText'>Ismingizni Yozing</p>
                    <input onChange = {(event) => {setName(event.target.value)}} className = 'logInInput' type = 'text' required></input>
                    <p className = 'logInText'>Elektron Manzil Kiriting</p>
                    <input onChange = {(event) => {setMail(event.target.value)}} className = 'logInInput' type = 'email' required></input>
                    <p className = 'logInText'>Parol Kiriting</p>
                    <input onChange = {(event) => {setPassword(event.target.value)}} className = 'logInInput' type = 'password' required></input>

                    <button onClick = {addToAccounts} type = 'submit' className = 'logInSubmit'>Kirish</button>
                </div>
            </form>
         
        </div>
        <div className = 'signUp'>
        <p className = 'signUpLinkText'>Agar akkountingiz bo'lsa, akkountga kirish 
        sahifasiga o'ting. <Link className = "signUpLink" to = './LogIn'> Akkountga kirish. </Link>
         Siz akkountga kirish orqali barcha belgilangan shartlarimizga rozi bo'lasiz. 
         
        </p>
        </div>
        <Footer />
        </div>
       
    )
}


export default SignUp;
