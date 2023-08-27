import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Loginsidconfirm(){
    const[id,setId]=useState();
    const[comp,setComp]=useState([]);
    const[logins,setLogins]=useState([]);
    useEffect(()=>{
        const id=localStorage.getItem('id')
        if(id)
        setId(id);
        console.log(id);
        fetch("http://localhost:8080/getcompbyid?id="+id)
        .then(resp=>{if(resp.ok)
            return resp.text();})
         .then(obj=>{if(Object.keys(obj).length)
            {
                setComp(JSON.parse(obj));
            }})   
            

        fetch("http://localhost:8080/getloginsbyid?id="+id)
        .then(resp=>{if(resp.ok)
            return resp.text();})
         .then(obj=>{if(Object.keys(obj).length)
            {
                setLogins(JSON.parse(obj));
            }}) 

    },[])
    console.log(logins);
    const navigate=useNavigate();
    const returntoadmin=()=>{navigate("/Admin")}

    


    return(
        <div className="center-content">
            <h2>New Login ids created for {comp.company_name}.</h2>
            <h2> You can send mail on {comp.email}</h2>

            <p>Login id as follows</p>
            <div className="container">
            <table  className="submitted-data-table">
                <th>username</th>
                <th>Password</th>
                {logins.map((l)=>(
                             <tr> 
                                <td>
                                    {l.username}
                                </td>
                                <td>
                                    {l.password}
                                </td>
                                </tr>

                ))}
                </table>
                </div>
                <button type="button" className="btn btn-primary" onClick={returntoadmin}>Return to Home</button>
        </div>

    );

}