import React,{useState} from 'react';

const App13=()=>{

    const [num,setNum]=useState(0);

    const IncNum=()=>{
        setNum(num+1);
    }

    const DecNum=()=>{

        if(num==0){
            alert("Zero Limit reached!!");
        }
        
        if(num>0){
            setNum(num-1);
        }
    }

    return(
        <>
            <div className='maindiv'>
                <h1 className='mainheading'>{num}</h1>
                <button className='mainbtn' onClick={IncNum}>Increment</button>
                <button className='mainbtn' onClick={DecNum}>Decrement</button>
            </div>
        </>
    );
}

export default App13;