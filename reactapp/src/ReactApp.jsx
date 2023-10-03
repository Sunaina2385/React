import React from 'react';

function ReactApp(){

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

    return (
        <h1>Hello Sir,<span style={GreetStyle}>{Greeting} </span></h1>
    );
}

export default ReactApp;