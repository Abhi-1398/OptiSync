import { useState,useReducer } from "react"
import { useNavigate } from "react-router-dom";

export default function AandQAReceivedQty(){

    const initialState={
        dateId: "",
        orderId: 0,
        partId: 0,
        partQty: 0,
       }

       const navigate=useNavigate();
    const navigateToHome=()=>{navigate("/Dispatch")}
      //needed by useReducer - 
      const reducer = (state, action) => {
        switch(action.type) {
             case 'update':
                return {...state, [action.fld]:action.val }
             case 'reset':
                return initialState
        }
      
      }
      const sendData = (e) => {
        e.preventDefault();
    
        const reqOption = {
         method:'POST',
         headers:{'content-type':'application/json'},
         body: JSON.stringify(formData)
        }
    
        fetch("http://localhost:8080/receivedDispatchQty", reqOption)
      .then((resp) => {
        if (resp.ok) return resp.text();
        else throw new Error("server error");
      })
      .then((text) => {
        if (text.length) {
          // If data submission was successful
          setSuccessMessage("Data Successfully Submitted");
        }
        return text;
      })
        .catch((Error)=>alert("server error . try again later")) 
        console.log(formData) 
    }
    
    const[formData, dispatch] = useReducer(reducer , initialState );
    // const id = (JSON.parse(localStorage.getItem('loggedUser'))).company;
    const id = JSON.parse(localStorage.getItem('loggedUser'));
    console.log("Shiriiish"+id.company);
    //to retrive order details
    const [getAllOrders, setAllOrders] = useState([]);
     const updateOrder = (()=>{
      fetch(`http://localhost:8080/getordersbyid?id=${id.company_id}`)
      .then(response => response.json())
      .then(getAllOrders => setAllOrders(getAllOrders));
      console.log(getAllOrders)      
    });
    
    //to retrive Product details
    const [partData, setPart] = useState([]);
    const updatePart = (()=>{
      fetch(`http://localhost:8080/getallpartbyid?id=${id.company_id}`)
      .then(response => response.json())
      .then(partData => setPart(partData));
      console.log(partData) 
    });

    const [successMessage, setSuccessMessage] = useState("");

    return(
        <div className="center-content">
      <h2>Received Qty By Dispatch</h2>
      <div className="form-container">
        {/* Display the success message */}
        {successMessage && (
          <p style={{ color: "green", fontSize: "12px" }}>{successMessage}</p>
        )}
        <form >
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="dateId" className="form-label" >Select Date:</label>
                </td>
                <td>
                <input type="date" id="dateId" name="dataId" value={formData.dateId} 
                  onChange={(e)=>{dispatch({type:'update',fld:'dateId',val:e.target.value})}} required />
                </td>
                <td>
                  <label htmlFor="orderId" className="form-label" >Select Order:</label>
                </td>
                <td>
                <select name="orderId" className="form-select" id="orderId"
                onChange={(e)=>{dispatch({type:'update',fld:'orderId',val:e.target.value})}} onClick={updateOrder} >
                      <option selected>Select Order</option>
                     {
                         getAllOrders.map(v => {
                            return (<option key={v.order_id} value={v.order_id} > {v.order_id} </option>
                            );
                        })
                     }
                </select>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="partId" className="form-label" >Part ID:</label>
                </td>
                <td>
                <select name="partId" className="form-select" id="partId"
                onChange={(e)=>{dispatch({type:'update',fld:'partId',val:e.target.value})}} onClick={updatePart}  >
                      <option selected>Select Part</option>
                     {
                         partData.map(z => {
                             return (<option key={z.part_id} value={z.part_id} > {z.part_name+""+z.part_id} </option>
                             );
                         })
                     }
                </select>                  
                </td>
                <td>
                  <label htmlFor="partQty" className="form-label" >Part Quantity:</label>
                </td>
                <td>
                  <input type="number" id="partQty" name="partQty" value={formData.partQty}
                    onChange={(e)=>{dispatch({type:'update',fld:'partQty',val:e.target.value})}} required />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="submit-button-container">
            <button type="submit" onClick={(e)=>sendData(e)}>Submit</button>
            <button type="reset"  onClick={()=>{dispatch({type:'reset'}) ; setSuccessMessage(""); } }  >Clear</button>
          </div>
        </form>

        <button type="button" onClick={navigateToHome}>Home</button>
      </div>
            
    </div>
    )
}