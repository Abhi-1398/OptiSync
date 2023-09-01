import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Checkcompanystatus()
{
    const[company,setCompany]=useState([]);
    useEffect(()=>
    {
        fetch('https://localhost:7024/api/Companies')
        .then(resp=>resp.json())
        .then(obj=>setCompany(obj))
    });
    const navigate=useNavigate();
    const change=()=>{
        navigate('/Admin')
    }

    return(
        <div>
            <table className="submitted-data-table">
                <th>Company Name</th>
                <th>Person Name</th>
                <th>Contact No</th> 
                <th>Email</th>
                <th>Plan Available</th>
                {
                    company.map((c)=>(
                        <tr>
                            <td>
                               { c.companyName}
                            </td>
                            <td>
                               { c.personName}
                            </td>
                            <td>
                               { c.contactNo}
                            </td>
                            <td>
                               { c.email}
                            </td>
                            <td>
                               { c.planEnddate}
                            </td>
                        </tr>
                    ))
                }
            </table>
            <br/>
            <button type="button" onClick={change}> Back To Home</button>
        </div>
    )
} 