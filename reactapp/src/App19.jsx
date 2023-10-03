import React,{useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';


const App19=()=>{

    const [addItem,setAddItem]=useState([]);

    const addNote=(note)=>{
        setAddItem((prevVal)=>{
            return [...prevVal,note];
        })

        console.log(note);
    }

    const removeItems=(id)=>{
        setAddItem((oldData)=>{
            oldData.filter((currEle,idx)=>{
                return id!==idx;    
            })
        })
    }

    return(
        <>
            <Header/>
            <CreateNote passNote={addNote}/>
            {
                addItem.map((val,index)=>{
                    return <Note
                    key={index}
                    id={index}
                    title={val.title}
                    content={val.content}
                    removeItem={removeItems}
                    />
                })
            }
            <Footer/>
        </>
    );
}

export default App19;