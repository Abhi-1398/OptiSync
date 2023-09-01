import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Forgetpassbyadmin(){
    const navigate=useNavigate();
    const navigatetoHome=()=>{
        navigate("/Admin")
    }

    const[fstatus,setFstatus]=useState([]);
    useEffect(()=>{
        const id=(JSON.parse(localStorage.getItem('loggedUser')).company).company_id;
         fetch(`http://localhost:8080/fstatusbyadmin?id=${id}`)
          .then(response => response.json())
          .then(fstatus => setFstatus(fstatus));
             
    },[]);
     const[details,setDetails]=useState([]);
     const[email,setEmail]=useState()
    const[btn,setbtn]=useState("grey")
    const colorchange=(e)=>{
        setbtn("green");
       setEmail(e.company.email)
        setDetails(e);


        
    
        
     }

    return(
        <div className="center-content">
            <h1>Forget password Request</h1>
<div className="container">
                                <table className="submitted-data-table">
                                <th>User Name</th>
                                <th>Approval</th>

                                {fstatus.map((pl) => (
                                     <tr>
                                            
                                        <td> {pl.username}</td>
{                                        <td> <button type="button" value={pl.login_id} onClick={()=>{colorchange(pl)}} style={{backgroundColor:btn}}>Approve</button></td>
}                                        </tr>
                                    
                                    ))}
                                
                            </table>
                            </div>
                            <div>
                                <table className="submitted-data-table">
                                    <th>User Name</th>
                                    <th>Password</th>
                                    <th>Email Address</th>
                                    <tr><td>{details.username}</td>
                                    <td>{details.password}</td>
                                    <td>{email}</td></tr>

                                </table>
                            </div>
                            <br/>
                            <button onClick={navigatetoHome}>Back To Home</button>
                           
                           
        </div>
    );
}