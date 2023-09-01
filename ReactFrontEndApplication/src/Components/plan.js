import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
/* import Register from "./Registration";
 */
export default function Plan()
{
    
    const [allPlan,setallPlan] = useState([]);
   /*  const[planid,selectplan]=useState([]);
    const handleClick=(e)=>{
        selectplan(e.target.value)
    } */

useEffect(()=>{ 
    fetch("http://localhost:8080/getPlans")
    .then(resp => resp.json())
    .then(pln => setallPlan(pln))
},[]);
const navigate = useNavigate();
const navigatetoregister = ()=>{
    navigate('/Registration');}

   
    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(allPlan));
      }, [allPlan]); 

     
    return(
        <div>
            
            
            <label  htmlFor="plan">Select Plan:</label>

                        <div > 
                  
                            <table className="submitted-data-table">
                            
                                <th>No</th>
                                <th>Plan Name</th>
                                <th>No of User</th>
                                <th>Duration</th>
                                <th>Price</th>
                                {allPlan.map((pl) => (
                                     <tr>
                                            

                                        <td> {pl.plan_id}</td>
                                        <td> {pl.plan_name}</td>
                                        <td>{pl.user_no}</td>
                                        <td>{pl.duration}</td>
                                        <td>{pl.price}</td>
                                        {/* <td><input type="button" value={pl.id}>Select</input></td> */}
                                        <td>

                                       
                                        </td>
                                        
                                        </tr>
                                    
                                        
    ))}
                                
                            </table>
                            </div>
                            <div> <button type="button" onClick={navigatetoregister}> Proceed to Registration</button></div>
                            
                       

        </div>
    );
}