import React,{useState} from 'react';
// import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';

const App15=()=>{

    const [num,setNum]=useState(0);

    const incNum=()=>{
        setNum(num+1);
    }

    const decNum=()=>{
        if(num>0){
            setNum(num-1);
        }

        if(num==0){
            alert('Zero Limit Reached!!');
        }
    }

    return(
        <>
            <div className='main_div'>
                <div className='child_div'>
                    <h1>{num}</h1>
                    <div className='btns'>
                        <Button onClick={incNum}>
                           +
                        </Button>
                        <button onClick={decNum}>
                           -
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App15;