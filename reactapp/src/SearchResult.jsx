import React from 'react'

const SearchResult = (props) => {
    const img=`https://source.unsplash.com/400x300/?${props.text}`;
  return (
    <>  
      <div>
        <img src={img}/>
      </div>
    </>
  )
}

export default SearchResult;
