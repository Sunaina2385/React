import React,{useState} from 'react'

const CreateNote = (props) => {

    const [note,setnote]=useState({
        title:'',
        content:'',
    })

    const addNote=(event)=>{

        /*const value=event.target.value;
        const name=event.target.name;*/

        const {name,value}=event.target;
        
        setnote((prevData)=>{
            return{
                ...prevData,
                [name]:value,
            }
        });
    }

    const addEvent=(e)=>{
        e.preventDefault();
        props.passNote(note);
        setnote({
            title:"",
            content:"",
        })
    }

    return (
    <>
      <div className="mainNote">
        <form>
            <input type='text'  placeholder="Title"
            name="title"
            autoComplete='off' onChange={addNote} value={note.title}/>
            <br/>
            <textarea rows="" cols="" placeholder='Write a note.....'
            name="content" onChange={addNote} value={note.content}></textarea>
            <button onClick={addEvent}>+</button>
        </form>
      </div>
    </>
  )
}

export default CreateNote;
