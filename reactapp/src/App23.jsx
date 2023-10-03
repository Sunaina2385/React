import React, { useEffect, useState } from 'react'

const App23 = () => {
     
    const [num,setNum]=useState(0);
    const changeNum=()=>{
        setNum(num+1);
    }

    useEffect(()=>{
        document.title=`You Clicked ${num} times`;
    })
  return (
    <>
        <button onClick={changeNum}>Click Me {num}</button>
    </>
  )
}

export default App23
