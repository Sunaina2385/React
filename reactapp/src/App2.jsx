import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import './CardCSS.css';
import SData from './CardData';
import NetfixCard from './NetflixCard';
import AmazonCard from './AmazonCard';
import NetflixCard from './NetflixCard';

const favSeries="amazon";


/*
const favSeries="amazon";

const FavS=()=>{
    if(favSeries==='netflix'){
        return(
            <Card
            key={SData[0].id}
            src={SData[0].imgsrc}
            title={SData[0].title}
            sname={SData[0].sname}
            link={SData[0].link}
            height={SData[0].height}
            width={SData[0].width}
          />
          )
    }
    else{

        return(
            <Card
            key={SData[3].id}
            src={SData[3].imgsrc}
            title={SData[3].title}
            sname={SData[3].sname}
            link={SData[3].link}
            height={SData[3].height}
            width={SData[3].width}
          />
          )
    }
}
*/

const App2=()=>(
  <>
    <h1 className="Heading">List of top 5 Netfilx Series in 2020</h1>
    {(favSeries=='netflix')?<NetflixCard/>:<AmazonCard/>}   
  </>);

  export default App2;