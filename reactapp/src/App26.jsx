import React from 'react'
import {Route,Switch,Routes,Redirect, Navigate} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import User from './User';
import Search from './Search';
import Error from './Error';
import Navbar from './Navbar';   
import './Navbar.css';


const App26 = () => {
  return (
    <>
        <div className='menu'>
            <Navbar/>
        </div>   
        <Routes>
            <Route exact path='/' element={<Home name='Home'/>}/>
            <Route path='/about' element={<About
            name='About'/>}/>
            <Route path='/contact' element={<Contact name='Contact'/>}/>
            <Route path='/user/:fname/:lname' element={<User name='User'/>}/>
            <Route path='/search' element={<Search name='Search'/>}/>

            {/* Redirect Alternate 
            // Redirect not working here */}
            {/* 
              <Redirect to="/"/>
            */}
            <Route path="*" element={<Navigate to="/about"/>}/>
            {/* <Route path='*' element={<Error name='error'/>}/> */}
        </Routes>

    </>
  )
}

export default App26;
