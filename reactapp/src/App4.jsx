import React from 'react';
import './Slot.css';

const SlotM=(props)=>{
    // let x=props.x;
    // let y=props.y; 
    // let z=props.z;

    let {x,y,z}=props;

    if((x==y) && (y==z)){
        return(
            <>
                <div className='slot_inner'>
                    <h1>{x}{y}{z}</h1>
                    <h1>This is Matching</h1>
                </div>
                <hr/>
            </>
        )
    }
    else{
        return(
            <>
                <div className='slot_inner'>
                    <h1>{x}{y}{z}</h1>
                    <h1>This is Not Matching</h1>
                </div>
                <hr/>
            </>
        )
    }
}
const App4=()=>{
    return (
        <>
        <h1 className='heading_style'>🎰 Welcome to <span style={{fontWeight:'bold'}}>Slot Machine Game </span>🎰 </h1>
        <div className='slot_machine'>
            <SlotM x='😇' y='😇' z='😇' />
            <SlotM x='🍎'  y='🍌'  z='🍎'/>
            <SlotM x='🕗'  y='🕗'  z='⌚' />
        </div>
        </>
    )
}

export default App4;