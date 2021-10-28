import React from 'react'

export default function Question({ ele }) {

    const {question,answer}=ele

    return <div>
      
        <h2>{question}</h2>
        <h2>{answer}</h2>
        
  </div>;
}
