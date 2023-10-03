import React from 'react';
import {add,sub,mul,div} from './Calculator';

function App1(){
    return(
        <>
            <h1>Calculator App</h1>
            <ul>
                <li>Addition:{add(40,25)}</li>
                <li>Subtraction:{sub(30,42)}</li>
                <li>Multiplication:{mul(31,8)}</li>
                <li>Division:{div(43,3)}</li>
            </ul>
        </>
    );
}

export default App1;