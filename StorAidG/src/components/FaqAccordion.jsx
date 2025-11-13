import React, { useEffect } from 'react'
import { useState } from 'react';

const FaqAccordion = () => {

    const [isOpen, setIsOpen] = useState(null);
    const [accordionItems, setAccordionItems] = useState([])


    const toggleOpen = (index) => {
        setIsOpen(isOpen === index ? null : index);
    };

    const fetchData = async () =>{

        try{
            const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/faqs')
            const data = await res.json()
            setAccordionItems(data)
        }
        catch(error){
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    
  /* FICK HJÄLP AV CHATGPT ATT GÖRA ETT ACCORDION SOM STÄNGER SIG SJÄLVT NÄR DE ANDRA FRÅGORNA ÖPPNAS */
  return (
   <div className="faq">

      {accordionItems.length > 0 ? (accordionItems.map((question, index) => (
        
          <div key={index} className="faq-card">
            <div className={`faq-question ${isOpen === index ? 'faq-question-open' : ''}`} onClick={() => toggleOpen(index)}>
              <h5>{question.title}</h5>
              
              <button className="faq-button" type="button">
                <span className="material-symbols-outlined">
                  {isOpen === index ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
                </span>
              </button>
            </div>

            <div className={`faq-answer ${isOpen === index ? 'faq-answer-open' : ''}`}>
              <div className="expandable">
                <p>{question.description}</p>
              </div>
            </div>
          </div>
        ))
      ):
        <p>Loading FAQs...</p>
      }
    </div>
  )
}

export default FaqAccordion