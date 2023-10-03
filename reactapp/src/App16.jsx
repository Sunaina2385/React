import React, { useState } from 'react';
import './App16.css';
import ListItem from './ListItem';

const App16=()=>{

    const [item,setItem]=useState("");
    const [newItems,setNewItems]=useState([]);

    const itemEvent=(event)=>{
        setItem(event.target.value);
    }

    const addItems=(event)=>{
        setNewItems((prevVal)=>{
            return [...prevVal,item];
        })
        setItem("");
    }

    return(
        <>
            <div className='maindiv'>
                <div className='childdiv'>
                    <br/>
                        <h1>ToDo List</h1>
                    <br/>
                    <br/>
                    <div className='subchilddiv'>
                        <input type='text' placeholder='Add Item' onChange={itemEvent} value={item}/>
                        <br/>
                        <button onClick={addItems}>
                           +
                        </button>
                    </div>

                    <ol>
                        {
                            newItems.map((currVal,id)=>{
                                return <ListItem key={id} text={currVal}/>
                            })
                        }
                    </ol>
                </div>
            </div>
        </>
    );
}

export default App16;