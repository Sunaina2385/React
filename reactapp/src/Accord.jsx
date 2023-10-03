import React, { useState } from 'react';
import './Accordion.css';

const Accord=({question,answer})=>{
    // nClick={addAns}
    const [show,setShow]=useState(false);
    const showAnswers=()=>{
        setShow(!show);
    }
    return(
        <>
            <div className='mainHeading'>
                <p className='btn' onClick={showAnswers}>{(show)?'-': '+'}</p>
                <h1>{question}</h1>
            </div>
            {
                show && <p>{answer}</p>
            }
        </>
    );
}

export default Accord;