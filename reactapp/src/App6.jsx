import React, { useState } from 'react';
import './App5.css';

const App6=()=>{

    const state=useState();
    const dateTime=new Date();
    const [currTime,setcurrTime]=useState(dateTime.toLocaleTimeString());
 
    const time=()=>{
        const date=new Date();
        setcurrTime(date.toLocaleTimeString());
    }
    return(
        <>
            <div className='root'>
                <h1>{currTime}</h1>
                <button onClick={time}>Display Time</button>
            </div>
        </>
    );
}

export default App6;    