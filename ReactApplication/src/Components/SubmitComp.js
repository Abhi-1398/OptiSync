import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Submit()
{
    const[submit,setsubmit]=useState()
    useEffect(() => {
         const submit=JSON.parse(localStorage.getItem('submit'));
        if (submit) {
         setsubmit(submit);
        }
      }, []); 
      const navigate = useNavigate();
      const returntologin=()=>{
        navigate("/Login")
      }
    return(
        <div>
             <h1>Thank You For Registration We will contact you send all login Id's on {submit}</h1>
             <button type="button" className="btn btn-primary mb-3" onClick={returntologin}>Return to Login</button>
        </div>





    )
   
}