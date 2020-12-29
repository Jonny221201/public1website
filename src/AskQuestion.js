import React, {useState} from 'react';
import './Styles/contact.css'
import Footer from './Footer'
import Axios from 'axios';



function AskQuestion() {

    const [question, setQuestion] = useState('');
  

    const addToQuestions = () => {
        Axios.post('http://localhost:3001/questions', {
        question: question,
       
    } );
       
    };
    return(
        <div className = 'aboutContainer'>
            
           <h1 className = 'askQuestionHeader'>Qiziqtirgan Savolingizni Yozing</h1>
           <ol className = 'askQuestionOl'>
                <li className = 'askQuestionList'>Savolingiz aniq va tushunarli bo'lsin.</li>
                <li className = 'askQuestionList'>Savolingizda mumkin bo'lmagan so'zlar ishlatmang.</li>
                <li className = 'askQuestionList'>Bergan savolingizga javob bergan insonlar 3-shaxs hisoblanadilar va 
                    ularni bergan javoblari noto'g'ri ham bo'lishi mumkin.
                </li>
            </ol>

           <form  className = 'questionForm' action = '/'>
         
         
           <textarea onChange = {(event) => {setQuestion(event.target.value)}} className = 'questionInput' rows = '20' cols = '40' type = 'text' placeholder = 'Shu yerga yozing...' required></textarea>
         
           <button onClick = {addToQuestions} className = 'submit-btn' >Joylash</button>
           </form>
           
           

           <Footer />
        </div>
    )

    
}

export default AskQuestion;