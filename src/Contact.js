import React, { useState } from 'react';
import './Styles/contact.css'
import Footer from './Footer'
import Axios from 'axios';

function Contact() {

    const [contactName, setContactName] = useState('');
    const [contactMail, setContactMail] = useState('');
    const [contactRequest, setContactRequest] = useState('');

    const addToList = () => {
        Axios.post('http://localhost:3001/contactRequest', {
        contactName: contactName,
        contactMail: contactMail,
        contactRequest: contactRequest,
       
    } );
    
    alert('Amalga oshirildi')
    };

    return(
        <div className = 'aboutContainer'>
           <h1 className = 'contactHeader'>Biz bilan Bog'lanish</h1>
           <form action = '/'>
         
           <p className = 'formInfo'>Ismingiz</p>
           <input onChange = {(event) => {setContactName(event.target.value)}} type = 'text' name = 'name' required></input>
           <p className = 'formInfo'>Elektron manzilingiz</p>
           <input onChange = {(event) => {setContactMail(event.target.value)}} type = 'Email' required></input>
           <p className = 'formInfo'>Sizga qanday yordam bera olamiz?</p>
           <textarea onChange = {(event) => {setContactRequest(event.target.value)}} rows = '10' cols = '40' type = 'text' name = 'messages' required></textarea>
           <button onClick = {addToList} className = 'submit-btn'>Yuborish</button>

           </form>
           
           

           <Footer />
        </div>
    )

    
}

export default Contact;