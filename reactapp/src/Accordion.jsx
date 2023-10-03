import React, { useState } from 'react';
import {questions} from './AccordionApi';
import './Accordion.css';
import Accord from './Accord';

const Accordion=()=>{

    const [data,setData]=useState(questions);
    return(
        <>
        <section className='accordion'>
            <div className='accordSection'>
                <h1>React Interview Questions</h1>
                {
                    data.map((currEle)=>{
                        const {id}=currEle;
                        return <Accord key={id} {...currEle}/>;
                    })
                }
            </div>
        </section>
        </>
    );
}

export default Accordion;