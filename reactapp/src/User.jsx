import React from 'react'
import { useParams,useLocation,useNavigate} from 'react-router-dom';

const User = () => {
    const {fname,lname}=useParams();
    const location=useLocation();
    const history=useNavigate();
    console.log(history);
    return (
        <>
            <h1>{fname}{lname} Page</h1>
            <p>Current Location:{location.pathname}</p>

            {(location.pathname===`/user/Sunaina/Garg`)?<button onClick={()=> history.push("/")}>Go Back</button>:null} 
        </>
  )
}

export default User;
