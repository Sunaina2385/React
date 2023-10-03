import React, { useState } from 'react'
import SearchResult from './SearchResult';

const Search = () => {
    const [img,setImg]=useState("");
    const inputEvent=(event)=>{
        const data=event.target.value;
        setImg(data);

    }
    return (
        <>
        <h1>Search Page</h1>
        <input type='text' placeholder='Search Something' onChange={inputEvent} value={img}/>
        {
            (img==="")?null:<SearchResult text={img}/>
        }
        </>
    )
}

export default Search;
