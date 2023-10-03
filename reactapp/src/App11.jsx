import React,{useState} from 'react';

const App11=()=>{

    // In useState we can pass object also
    const [item,setItem]=useState({
        firstName:"",
        lastName:"",
        email:"",
    });

    const inputEvent=(event)=>{
        console.log(event.target.value);
        const value=event.target.value;
        const name=event.target.name;
        setItem((prevVal)=>{
            if(name==="fname"){
                return{
                    firstName:value,
                    lastName:prevVal.lastName,
                    email:prevVal.email,
                };
            }
            else if(name==="lname"){
                return{
                    firstName:prevVal.firstName,
                    lastName:value,
                    email:prevVal.email,
                };
            }
            else if(name==="email"){
                return{
                    firstName:prevVal.firstName,
                    lastName:prevVal.lastName,
                    email:value,
                };
            }
        })
    }

    const onSub=(event)=>{
        event.preventDefault();
        alert("Form Submitted Successfully!!")
    }

    return(
        <>
            <div class="container">
                <form onSubmit={onSub}>
                    <h1>Hello {item.firstName} {item.lastName}</h1>
                    <p>{item.email}</p>
                    <input type="text" placeholder='Enter your name here'
                    onChange={inputEvent}
                    name="fname"
                    value={item.firstName}
                    />
                    <input type="number" placeholder='Enter your Password'
                    onChange={inputEvent}
                    name="lname"
                    value={item.lastName}
                    />
                    <input type="email" placeholder='Enter your Email'
                    onChange={inputEvent}
                    name="email"
                    value={item.email}
                    />
                    <button>Submit</button>
                </form>
            </div>
        </>
    );
}

export default App11;
