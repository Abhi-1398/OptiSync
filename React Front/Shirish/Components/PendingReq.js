import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PendingReq(){

    const[request,setrequest]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{ 
        fetch("http://localhost:8080/getpendingrequest")
        .then(resp => resp.json())
        .then(pln => setrequest(pln))
    },[]);
    const[btn,setbtn]=useState("grey")
    const colorchange=(id)=>{
        setbtn("green");
        console.log(id);
        localStorage.setItem('id', id);
        fetch("http://localhost:8080/changestatus?id="+id)
        .then(resp=>resp.text())
        /* .then(if(text){fetch("http://localhost:8080/savelogin?id="+id) }); */

         fetch("http://localhost:8080/savelogin?id="+id)
          .then(resp=>resp.text())
            fetch("http://localhost:8080/changedate?id="+id)
            .then(resp=>{if(resp.ok)
             navigate("/Loginsid")})
     }
    
    return(
        <div className="center-content">
            <h1>Pending Registration</h1>
        
            <div className="container">
                
            <table className="submitted-data-table">
                                <th>Company Name</th>
                                <th>Person Name</th>
                                <th>Contact No.</th>
                                <th>Email</th>
                                <th>Selected Plan</th>
                                <th>Approval</th>
                                {request.map((pl) => (
                                     <tr>
                                            
                                        <td> {pl.company_name}</td>
                                        <td> {pl.person_name}</td>
                                        <td>{pl.contact_no}</td>
                                        <td>{pl.email}</td>
                                        <td>{pl.plans.plan_name}</td>
{                                        <td> <button type="button" value={pl.id} onClick={()=>{colorchange(pl.company_id)}} style={{backgroundColor:btn}}>Approve</button></td>
}                                        
                                        </tr>
                                    
                                    ))}
                                
                            </table>
                            </div>
                           
        </div>
    )
}