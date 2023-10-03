import React from 'react'

const Note = (props) => {

const deleteItem=()=>{
    props.removeItem(props.id);
}

  return (
    <>
        <div className='note'>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <button onClick={deleteItem}><i className="fa-solid fa-trash"></i></button>
        </div>
    </>
  )
}

export default Note;
