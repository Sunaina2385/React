import React, { useState } from 'react';
import './App16.css';

const ListItem=(props)=>{
    const [line,setLine]=useState(false);
    const cutIt=()=>{
        setLine(true);
    }

    return(
        <>
            <div className='listitems'>
                <span onClick={cutIt}><i class="fa-solid fa-trash"></i></span>
                <li key={props.id} style={{textDecoration:line?'line-through':'none'}}>{props.text}</li>
            </div>
        </>
    );
}

export default ListItem;