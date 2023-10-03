import React, { useState,useEffect } from 'react'

const App22 = () => {
    const [num,setNum]=useState(0); 
    const [nums,setNums]=useState(0);


    // useEffect expect always function
    useEffect(()=>{
        alert("I am Clicked!");
    },[num])

    const changeNum=()=>{
        setNum(num+1);
    }
    const changeNums=()=>{
        setNums(nums+1);
    }

    return (
    <>
       <button onClick={changeNum}> Click Me {num}</button>
       <button onClick={changeNums}> Click Me {nums}</button>
    </>
  )
}

export default App22
