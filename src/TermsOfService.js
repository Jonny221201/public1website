import React from 'react';
import './Styles/about.css'
import Footer from './Footer'


function TermsOfService() {
    return(
        <div className = 'aboutContainer'>
           <h1 className = 'aboutHeader'>Muloqot  Mavjud</h1>
           <p className = 'aboutText'>
           er since the 1500s, when an unknown pr
           inter took a galley of type and scrambled it to make a type specimen 
           book. It has survived not only five centuries, but also the leap into electron
           ic typesetting, remaining essentially unchanged. It was popularised in the 1960s with t
           he release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop p
           </p>
           <h1 className = 'aboutHeader'>Insonlar Bilan Muloqotda bo'ling</h1>
           <p className = 'aboutText'>
           er since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived not only five c
            enturies, but also the leap into electronic typesetting, remaining essentially unchanged. It 
            was popularised in the 1960s with the release
            of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop p
           </p>
           

           <Footer />
        </div>
    )

    
}

export default TermsOfService;