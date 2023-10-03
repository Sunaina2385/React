import React, {useState } from 'react';
import ToDoList from './ToDoList';

const App14=()=>{

    const [inputList,setInputList]=useState();
    const [items,setItems]=useState([]);
    const itemEvent=(event)=>{
        setInputList(event.target.value);
    }

    const AddItems=()=>{
        setItems((oldItems)=>{
            return [...oldItems,inputList];
        })
        setInputList("");
    }

    const deleteItems=(id)=>{
        console.log("deleted");
        setItems((olditems)=>{
            return olditems.filter((currEle,idx)=>{
                return id!==idx;
            })
        })
    }
    
    return (
        <>
            <div className='main_container'>
                <div className='child_contaner'>
                    <br/>
                    <h1>To Do List App</h1>
                    <br/>
                    <input type='text' placeholder='Add an Item' onChange={itemEvent} value={inputList}/>
                    <button onClick={AddItems}>+</button>

                    <ol>

                        {
                            items.map((currVal,index)=>{
                                return <ToDoList 
                                id={index}
                                key={index}
                                onSelect={deleteItems}
                                text={currVal}/>;
                            })
                        }
                    </ol>
                </div>
            </div>
        </>
    );
}

export default App14;