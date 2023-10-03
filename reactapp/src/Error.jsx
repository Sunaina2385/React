import React from 'react'
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <>
        <h1>404 Error Page</h1>
        <button>
          <NavLink to='/'>
            Go Back
          </NavLink>
        </button>
    </>
  )
}

export default Error;
