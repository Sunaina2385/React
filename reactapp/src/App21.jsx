import React, { createContext } from 'react'
import CompA from './CompA';

//Step1: Create Context()
const FirstName=createContext();
const LastName=createContext();

const App21 = () => {
    return (
        <>
            {/* //Step2: Provider */}
            <FirstName.Provider value={"Sunaina"}>
                <LastName.Provider value={"Garg"}>
                    <CompA/>
                </LastName.Provider>
            </FirstName.Provider>
        </>
    )
}

export default App21;
export {FirstName,LastName};