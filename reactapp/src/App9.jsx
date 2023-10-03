import React, { useState } from 'react';
import "./App9.css";

// In React we have two Components-> Controlled Component and Uncontrolled Componenet
// An input form element whose value is controlled by React in this way is called a "Controlled Component"


const App9=()=>{
    const [item,setItem]=useState();
    const [fullName,setFullName]=useState();

    const inputEvent=(event)=>{
        setItem(event.target.value);
        console.log(event.target.value);
    }

    const ItemChange=()=>{
        setFullName(item);
    }
    return (
        <>
            <div class="container">
                <h1>Hello {fullName}</h1>
                <input type="text" placeholder='Enter your name here'
                onChange={inputEvent}
                value={item}
                />
                <button onClick={ItemChange}>Submit</button>
            </div>
        </>
    );
}

export default App9;