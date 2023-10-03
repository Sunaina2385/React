import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import './CardCSS.css';
import SData from './CardData';
import NetfixCard from './NetflixCard';
import AmazonCard from './AmazonCard';

const favSeries="amazon";

const FavS=()=>{
    if(favSeries==='netflix'){
        return <NetfixCard/>;
    }
    else{
        return <AmazonCard/>;
    }
}

const App2=()=>(
  <>
    <h1 className="Heading">List of top 5 Netfilx Series in 2020</h1>
    <FavS/>     
  </>);

  export default App2;