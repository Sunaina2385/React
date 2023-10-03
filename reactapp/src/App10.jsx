import React, {useState} from 'react';
import './App9.css';

const App10=()=>{

    const [item,setItem]=useState();
    const [Numitem,setNumItem]=useState();
    const [data,setData]=useState();

    const inputEvent=(event)=>{
        setItem(event.target.value);
    }

    const inputNumEvent=(event)=>{
        setNumItem(event.target.value);
    }

    const onSub=(event)=>{
        event.preventDefault();
        setData(item+" "+Numitem);
    }

    return (
        <>
            <>
            <div class="container">
                <form onSubmit={onSub}>
                    <h1>Hello {data}</h1>
                    <input type="text" placeholder='Enter your name here'
                    onChange={inputEvent}
                    value={item}
                    />
                    <input type="number" placeholder='Enter your Password'
                    onChange={inputNumEvent}
                    value={Numitem}
                    />
                    <button>Submit</button>
                </form>
            </div>
        </>
        </>
    );
}

export default App10;