import React, { useState } from 'react';
import './App5.css';

const App7=()=>{

    const state=useState();
    let dateTime=new Date().toLocaleTimeString();
    const [currTime,setcurrTime]=useState(dateTime);

    setInterval(()=>{
        dateTime=new Date().toLocaleTimeString();
        setcurrTime(dateTime);
    },1000)

    return(
        <>
            <div className='root'>
                <h1>{currTime}</h1>
            </div>
        </>
    );
}

export default App7;