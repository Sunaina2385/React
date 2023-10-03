import React,{useState} from 'react';

const App12=()=>{

    // In useState we can pass object also
    const [item,setItem]=useState({
        firstName:"",
        lastName:"",
        email:"",
    });

    const inputEvent=(event)=>{
        console.log(event.target.value);
        const {name,value}=event.target;

        setItem((prevVal)=>{
            return{
                ...prevVal,
                [name]:value,
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
                    name="firstName"
                    value={item.firstName}
                    />
                    <input type="number" placeholder='Enter your Password'
                    onChange={inputEvent}
                    name="lastName"
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

export default App12;
