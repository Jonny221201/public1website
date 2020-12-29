import React from 'react';
import './Styles/footer.css'
import { Link } from "react-router-dom";


function Footer() {
    return(
        <div className = 'footerBigContainer'>
        <div className = 'footerContainer'>
            <ul className = 'footerUl'>

        <Link to = './Contact'>    <li className = 'footerList'>Aloqa</li></Link>
        <Link to = './TermsOfService'>    <li className = 'footerList'>Foydalanish Shartlari</li></Link>
        <Link to = './PrivacyPolicy'>    <li className = 'footerList'>Qonun-qoida</li></Link>
            
            </ul>
        </div>
        </div>
    )
}

export default Footer;