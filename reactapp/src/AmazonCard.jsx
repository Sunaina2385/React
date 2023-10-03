import React from 'react';
import SData from './CardData';
import Card from './Cards';

const AmazonCard=()=>{
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

export default AmazonCard;