import React, { useState } from 'react';
import './App5.css';

const App5=()=>{

    const state=useState();
    const [count,setCount]=useState(1);

    const IncNum=()=>{
        setCount(count+1);
    } 

    const DecNum=()=>{
        if(count>0){
            setCount(count-1);
        }
    } 
    
    return(
        <>
            <div className='root'>
                <h1>{count}</h1>
                <div className='btns'>
                    <button onClick={IncNum}>Increment</button>
                    <button onClick={DecNum}>Decrement</button>
                </div>
            </div>
        </>
    );
}

export default App5;    