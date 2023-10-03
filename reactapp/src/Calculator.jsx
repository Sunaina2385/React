import React from 'react';

function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function mul(a,b){
    return a*b;
}

function div(a,b){
    let val=a/b;
    val=val.toFixed(2);
    return val;
}


export {add,sub,mul,div};