import { useEffect, useState } from "react";

export default function Forgetpassbymanager()
{
   const[fstatus,setFstatus]=useState([]);
    useEffect(()=>{
        const id=(JSON.parse(localStorage.getItem('loggedUser')).company).company_id;
         fetch(`http://localhost:8080/fstatusbymanager?id=${id}`)
          .then(response => response.json())
          .then(fstatus => setFstatus(fstatus));
             
    },[]);

    const[btn,setbtn]=useState("grey")
    const colorchange=(e)=>{
        setbtn("green");
        
        const reqOption = {
            method:'PUT',
            headers:{'content-type':'application/json'}
        };
        console.log(e);
        fetch(`http://localhost:8080/forgetstatuschangebymanager/${e}`,reqOption)
        .then(resp=>resp.text())
        
     }

    return(
        <div>
            <h1>Forget password Request</h1>

                                <table className="submitted-data-table">
                                <th>User Name</th>

                                {fstatus.map((pl) => (
                                     <tr>
                                            
                                        <td> {pl.username}</td>
{                                        <td> <button type="button" value={pl.login_id} onClick={()=>{colorchange(pl.login_id)}} style={{backgroundColor:btn}}>Approve</button></td>
}                                        
                                        </tr>
                                    
                                    ))}
                                
                            </table>

        </div>
    );
}