import React from 'react';
import SData from './CardData';
import Card from './Cards';

const NetflixCard=()=>{
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

export default NetflixCard;