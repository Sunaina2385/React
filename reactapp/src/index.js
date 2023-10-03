// Bootstrap
import React from 'react';
import ReactDOM from 'react-dom';
import App27 from './App27';

ReactDOM.render(<App27/>,document.getElementById('root'));








//React Router
//Client-Side Rendering
//Hooks-useParams,useLocation,useHistory
//Redirect Element in ReactJs
/*
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App26 from './App26';

ReactDOM.render(
  <>
    <BrowserRouter>
      <App26/>
    </BrowserRouter>
  </>
,
document.getElementById('root'));
*/


// Rest API Call Pokemon Json Data
//Axios
/*
import React from 'react';
import ReactDOM from 'react-dom';
import App25 from './App25';

ReactDOM.render(<App25/>,document.getElementById('root'));
*/

// India Covid19 State Wise Tracker
/*
import React from 'react';  
import ReactDOM from 'react-dom';
import App24 from './App24';

ReactDOM.render(<App24/>,document.getElementById('root'));
*/

// React Hook Challenge 7:
/*
import React from 'react';
import ReactDOM from 'react-dom';
import App23 from './App23';

ReactDOM.render(<App23/>,document.getElementById('root'));
*/

//UseEffect Hook
// UseEffect works when website render
/*
import React from 'react';
import ReactDOM from 'react-dom';
import App22 from './App22';

ReactDOM.render(<App22/>,document.getElementById('root'));
*/

//useContext Hook
/*
import React from "react";
import ReactDOM from "react-dom";
import App21 from "./App21";

ReactDOM.render(<App21/>,document.getElementById('root'));
*/

//Context API
/*
import React from 'react';
import ReactDOM from 'react-dom';
import App20 from './App20';

ReactDOM.render(<App20/>,document.getElementById('root'));
*/

// Google Keep Clone Project
/*
import React from 'react';
import ReactDOM from 'react-dom';
import App19 from './App19';

ReactDOM.render(<App19/>,document.getElementById('root'));
*/

// Mini Project of Bootstrap
/*
import React from 'react';
import ReactDOM from 'react-dom';
import App18 from './App18';

ReactDOM.render(<App18/>,document.getElementById('root'));
*/

// Accordion in ReactJs
/*
import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './Accordion';

ReactDOM.render(<Accordion/>,document.getElementById('root'));
*/

//Bootstrap in ReactJs
/*
import React from 'react';
import ReactDOM from 'react-dom';
import App17 from './App17';

ReactDOM.render(<App17/>,document.getElementById('root'));
*/

// ToDo List Project
/*
import React from 'react';
import ReactDOM from 'react-dom';
import App16 from './App16';

ReactDOM.render(<App16/>,document.getElementById('root'));
*/

//Material UI Icons
/*
import React from 'react';
import ReactDOM from 'react-dom';
import App15 from './App15';

ReactDOM.render(<App15/>,document.getElementById('root'));
*/

// To-Do List Project
/*
import react from 'react';
import ReactDOM from 'react-dom';
import App14 from './App14';

ReactDOM.render(<App14/>,document.getElementById('root'));
*/

//React Challenge: Incrementing and Decrementing
/*
import react from 'react';
import ReactDOM from 'react-dom';
import App13 from './App13';

ReactDOM.render(<App13/>,document.getElementById('root'));
*/

// Handling Complex Multiple Input Form States
/*
import React from 'react';
import ReactDOM from 'react-dom';
import App12 from './App12';

ReactDOM.render(<App12/>,document.getElementById('root'));
*/

// Handling Complex Multiple Input Form States
/*
import React from 'react';
import ReactDOM from 'react-dom';
import App11 from './App11';

ReactDOM.render(<App11/>,document.getElementById("root"));
*/

//Login Form Submit in ReactJs
/*
import React from 'react';
import ReactDOM from 'react-dom';
import App10 from './App10';

ReactDOM.render(<App10/>,document.getElementById("root"));
*/

//Forms in ReactJs
/*
import React from 'react';
import ReactDOM from 'react-dom';
import App9 from './App9';

ReactDOM.render(<App9/>,document.getElementById("root"));
*/

// Handling Events in React
/*
import React from "react";
import ReactDOM  from "react-dom";
import App8 from './App8';
import './App5.css';

ReactDOM.render(<App8/>,document.getElementById('root'));
*/

//React Mini Project-Digital Clock
/*
import React from 'react';
import ReactDOM  from 'react-dom';
import App7 from './App7';

ReactDOM.render(<App7/>,document.getElementById('root'));
*/

// React Hooks Challenge 6:
/*
import React from 'react';
import ReactDOM  from 'react-dom';
import App6 from './App6';
import './App5.css';

ReactDOM.render(<App6/>,document.getElementById('root'));
*/

// Hooks in React
/*
import React from 'react';
import ReactDOM  from 'react-dom';
import App5 from './App5';

ReactDOM.render(<App5/>,document.getElementById('root'));
*/

//ReactJs Challenge 6: Slot Machine
/*
import React from 'react';
import ReactDOM from 'react-dom';
import App4 from './App4';

ReactDOM.render(<App4/>,document.getElementById('root'));
*/

//Conditional Ternary Operator
/*
import React from "react";
import ReactDOM from 'react-dom';
import App3 from './App3';

ReactDOM.render(<App3/>,document.getElementById('root'));
*/

// If-Else Statement
/*
import React from 'react';
import ReactDOM from 'react-dom';
import App2 from './App2';

ReactDOM.render(<App2/>,document.getElementById('root'));
*/

// React Developer Tools
/*
// Components-React Developer Tool
// Console is Developer Tool For Javascript
// In map method,each child should have unique key for their reference using key prop
// Key:Key help react identify  which items have changed (added/removed/re-ordered).To give a unique identity to every element inside array, a key is required

import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import './CardCSS.css';
import SData from './CardData';


function ncard(currVal){
  return(
    <Card
      src={currVal.imgsrc}
      title={currVal.title}
      sname={currVal.sname}
      link={currVal.link}
      height={currVal.height}
      width={currVal.width}
    />
  );
}

ReactDOM.render(
  <>
    <h1 className="Heading">List of top 5 Netfilx Series in 2020</h1>

    {SData.map((currVal)=>{
      return(
        <Card
        key={currVal.id}
        src={currVal.imgsrc}
        title={currVal.title}
        sname={currVal.sname}
        link={currVal.link}
        height={currVal.height}
        width={currVal.width}
      />
      );
    })};        
  </>,document.getElementById('root'));
*/

// Netflix App
/*
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import './CardCSS.css';
import SData from './CardData';


function ncard(currVal){
  return(
    <Card
      src={currVal.imgsrc}
      title={currVal.title}
      sname={currVal.sname}
      link={currVal.link}
      height={currVal.height}
      width={currVal.width}
    />
  );
}

ReactDOM.render(
  <>
    <h1 className="Heading">List of top 5 Netfilx Series in 2020</h1>

    // First Method:- {SData.map(ncard)}
    {SData.map((currVal)=>{
      return(
        <Card
        src={currVal.imgsrc}
        title={currVal.title}
        sname={currVal.sname}
        link={currVal.link}
        height={currVal.height}
        width={currVal.width}
      />
      );
    })};        
  </>,document.getElementById('root'));
  */

//Props in React
/*
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import './CardCSS.css';
import SData from './CardData';

ReactDOM.render(
  <>
    <h1 className="Heading">List of top 5 Netfilx Series in 2020</h1>
    <div className='NetflixCards'>
        <Card
          src={SData[0].imgsrc}
          title={SData[0].title}
          sname={SData[0].sname}
          link={SData[0].link}
          height={SData[0].height}
          width={SData[0].width}
        />
        <Card
          src={SData[1].imgsrc}
          title={SData[1].title}
          sname={SData[1].sname}
          link={SData[1].link}
          height={SData[1].height}
          width={SData[1].width}
        />
        <Card
          src={SData[2].imgsrc}
          title={SData[2].title}
          sname={SData[2].sname}
          link={SData[2].link}
          height={SData[2].height}
          width={SData[2].width}
        />
        <Card
          src={SData[3].imgsrc}
          title={SData[3].title}
          sname={SData[3].sname}
          link={SData[3].link}
          height={SData[3].height}
          width={SData[3].width}
        />
        <Card
          src={SData[4].imgsrc}
          title={SData[4].title}
          sname={SData[4].sname}
          link={SData[4].link}
          height={SData[4].height}
          width={SData[4].width}
        />
        <Card
          src={SData[5].imgsrc}
          title={SData[5].title}
          sname={SData[5].sname}
          link={SData[5].link}
          height={SData[5].height}
          width={SData[5].width}
        />

    </div>
  </>,document.getElementById('root'));
*/

// React Challenge 5: Calculator
/*
import React from 'react';
import ReactDOM from 'react-dom';
import App1 from './App1';

ReactDOM.render(<App1/>,document.getElementById('root'));
*/


//ES6 Modules Import Export
/*
// In JSX file, there is only one wich can export default

import React from 'react';
import ReactDOM from 'react-dom';
import structure,{style,functionality} from './frontend';

ReactDOM.render(
<>
  <h1>Frontend Development</h1>
  <ol>
    <li>{structure}</li>
    <li>{style}</li>
    <li>{functionality}</li>
  </ol>
</>,document.getElementById('root'));

*/

//React Challenge 4:
/*

import React from 'react';
import ReactDOM from 'react-dom';
import ReactApp from './ReactApp';

ReactDOM.render(<ReactApp/>
,document.getElementById("root"));

*/

//Components in ReactJs
/*
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';


ReactDOM.render(
  <>
    <App/>
  </>,
  document.getElementById('root')
)
*/

// React Challenge 3:
/*

import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

let currDate=new Date();
let currTime=currDate.getHours();
let Greeting='';

const GreetStyle={
  color:'red',
};

if(currTime>=1 && currTime<12){
  Greeting='Good Morning';
  GreetStyle.color='Yellow';
}
else if(currTime>=12 && currTime<19){
  Greeting='Good Evening';
  GreetStyle.color='blue';
}
else{
  Greeting='Good Night';
  GreetStyle.color='black';
}

ReactDOM.render(
  <> 
    <h1>Hello Sir,<span style={GreetStyle}>{Greeting} </span></h1>
  </>
,document.getElementById("root"));

*/

// Internal CSS and Inline CSS Styling
/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const img1="https://picsum.photos/200/200";
const img2="https://picsum.photos/201/200";
const img3="https://picsum.photos/202/200";

//Class is Reserved Keyword => Class component

const heading={
  color:"#fa9191",                 textTransform:'capitalize',textAlign:"center",
  textTransform:"Uppercase",
  fontWeight:"bold",
  marginTop:"3%",
  fontSize: "3em",
  textShadow: "0px 3px 6px black",
  fontFamily: "'Fuggles',cursive",
}

ReactDOM.render(
  <>
    <h1 style={heading}>Image Gallery</h1>
    <div className="image">
        <img src={img1} alt="randomImage"/>
        <img src={img2} alt="randomImage"/>
        <img src={img3} alt="randomImage"/>
    </div>
  </>,document.getElementById('root'));

*/

/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const img1="https://picsum.photos/200/200";
const img2="https://picsum.photos/201/200";
const img3="https://picsum.photos/202/200";

//Class is Reserved Keyword => Class component

ReactDOM.render(
  <>
    <h1 style={
      {
        color:"#fa9191",                 textTransform:'capitalize',textAlign:"center",
        textTransform:"Uppercase",
        fontWeight:"bold",
        marginTop:"3%",
        fontSize: "3em",
        textShadow: "0px 3px 6px black",
        fontFamily: "'Fuggles',cursive",
      }}>Image Gallery</h1>
    <div className="image">
        <img src={img1} alt="randomImage"/>
        <img src={img2} alt="randomImage"/>
        <img src={img3} alt="randomImage"/>
    </div>
  </>,document.getElementById('root'));
*/

// How to use Google fonts
/*
// Link in index.html under head section
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const img1="https://picsum.photos/200/200";
const img2="https://picsum.photos/201/200";
const img3="https://picsum.photos/202/200";

//Class is Reserved Keyword => Class component
ReactDOM.render(
  <>
    <h1 className="heading">Image Gallery</h1>
    <div className="image">
        <img src={img1} alt="randomImage"/>
        <img src={img2} alt="randomImage"/>
        <img src={img3} alt="randomImage"/>
    </div>
  </>,document.getElementById('root'));
*/


//CSS styling and Importing CSS files
/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const img1="https://picsum.photos/200/200";
const img2="https://picsum.photos/201/200";
const img3="https://picsum.photos/202/200";

//Class is Reserved Keyword => Class component
ReactDOM.render(
<>
  <h1 className="heading">Image Gallery</h1>
  <div className="image">
      <img src={img1} alt="randomImage"/>
      <img src={img2} alt="randomImage"/>
      <img src={img3} alt="randomImage"/>
  </div>
  </>,document.getElementById('root'));

*/

//JSX Attributes vs HTML Attributes
/*
import React from 'react';
import ReactDOM from 'react-dom';

const fName="Sunaina";
const lName="Garg";
const url="https://picsum.photos/200/200";
// JSX attributes should follow Camel_Case
ReactDOM.render(
<>
  // { <a href="https://www.google.com">Google</a> }
  <h1 contentEditable="true">My FirstName is {fName}</h1>
  <h1 contentEditable="false">My LastName is {lName}</h1>
  <img src={url} alt="random_Images"/>
  
</>,document.getElementById('root'));
*/

// ReactJs Challenge 2:
/*
import React from 'react';
import ReactDOM from 'react-dom';

const DateObj=new Date();
const date=DateObj.toLocaleDateString();
const time=DateObj.toLocaleTimeString();

ReactDOM.render(
<>
  <h1>Display Date and Time</h1>
  <h2>{`Current Data:${date} and Current Time:${time}`}</h2>
</>,document.getElementById('root'));
*/

//Template Literals
/*
import React from 'react';
import ReactDOM from 'react-dom';

const fName='Sunaina';
const lName='Garg';
const age=25;

ReactDOM.render(
  <>
    <h2>My Full Name is {fName} {lName}</h2>
    <h2>My Full Name is {fName+lName}</h2>
    <h2>My Full Name is {fName+" "+lName}</h2>
    <h2>{`My Full name is ${fName} ${lName} and My Age is ${age}`}</h2>
  </>,
  document.getElementById('root'));
*/

// Javascript Expressions in JSX
/*

//{In Javascript file->HTML(JSX)->Javscript(using {} includes expressions only)}

import React from 'react';
import ReactDOM from 'react-dom';

const word="beautiful";
ReactDOM.render(<>
  <h1>You are looking too {word}</h1>
  <h2>Your Lucky Number is {5+6}</h2>
  <h2>Random Number is {Math.floor(Math.random()*10)}</h2>
</>,document.getElementById('root'));
*/

// ReactJs Challenge 1
/*
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <>
    <h1>Netflix Series</h1>
    <p>List of 5 Best Series:</p>
    <ol>
      <li>Dark</li>
      <li>Extra Curricular</li>
      <li>My Holo Love</li>
      <li>My first-2 love</li>
      <li>Mr. Robot</li>
    </ol>
  </>
  ,document.getElementById('root')
);
*/

//React Fragment
/*
import React from 'react';
import ReactDOM from 'react-dom';

//{ 
If we use div then it appends div inside root div which is time consuming and memory inefficent and it may be difficult in case of using flex and grid. 
<React.Fragment></React.Fragment> Another Notation for React.Fragment-<></>
}

ReactDOM.render(
  <React.Fragment>
    <h1>Learning ReactJs</h1>
    <h2>Learning React Fragment in ReactJs </h2>
    <p>It is Frontend Development</p>
  </React.Fragment>,document.getElementById('root'));
*/

//Render Multiple JSX Elements
/*
import React from 'react';
import ReactDOM from 'react-dom';


// In React v16 above,it's possible for render() to return an array of elements
ReactDOM.render(
[
  <h1>JSX Expression in React</h1>,
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, iusto.</p>
]

//{
<div>
  <h1>JSX Expression in React</h1>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, iusto.</p>
</div>
}

,document.getElementById('root'));
*/

// JSX in React
/*
// JSX in React
// JSX stands for Javascript XML



//Babel is a JavaScript compiler that converts modern JavaScript code into a version compatible with all browsers. Babel enables React developers to use the latest JavaScript syntax in their components. Babel transpiles modern JavaScript for use in React components and all browsers.//

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<h1>JSX Expression in React</h1>,document.getElementById('root'));
*/

// Print Hello World using React
/*
// var React=require('react');
// var ReactDOM=require('react-dom');
// In ES6,import export Module 
import React from 'react';
import ReactDOM from 'react-dom';

// React Module is used to write html elements
//ReactDOM Module is used for Manipulation and Updation in Javacript DOM

ReactDOM.render(<h1>Hello World!</h1>,document.getElementById('root'));
*/
