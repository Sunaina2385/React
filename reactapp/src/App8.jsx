import React, { useState } from "react";

const App8=()=>{

    const [item,setItem]=useState('black');
    const [context,setContext]=useState("Click");

    const bgChange=()=>{
        setItem('purple');
        setContext("Let's See");
    }

    const bgColorChange=()=>{
        setItem('DarkGreen');
        setContext("What Happen!");
    }

    return (
        <>
            <div className="root" style={{backgroundColor:item}}>
                {/* <button onClick={bgChange} onDoubleClick={bgColorChange}>{context}</button> */}
                <button onMouseOver={bgChange} onMouseLeave={bgColorChange}>{context}</button>
            </div>
        </>
    );
}

export default App8;