import React from 'react';

const list={
    listStyle:'none',
}

const ToDoList=(props)=>{
    return(
        <>
            <div className='todoStyle'>
                <li style={list}>
                    <span>
                        <i className="fa fa-times" aria-hidden="true" onClick={()=>{
                            props.onSelect(props.id)
                        }}/>
                    </span>
                    {props.text}
                </li>
            </div>
        </>
    );
}

export default ToDoList;