import { useState,useEffect,useReducer } from "react"
import { useNavigate } from "react-router-dom";

export default function DispatchReceivedQty(){

  const id=(JSON.parse(localStorage.getItem('loggedUser')).company).company_id;
  
  const initialState={
        dateId: "",
        orderId: 0,
        productId: 0,
        productQty: 0,
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
    
        fetch("http://localhost:8080/receivedDispatchQty",reqOption)
        .then(resp => {if(resp.ok)
         return resp.text();
        else
         throw new Error("server error");
        })
        .then((text) => {
          if (text.length) {
            // If data submission was successful
            setSuccessMessage("Data Submmited Succesfully");
            setSubmitted(true);
          }
          return text;
        })
        .catch((Error)=>alert("server error . try again later")) 
        console.log(formData) 
    }
    
    const[formData, dispatch] = useReducer(reducer , initialState );
    
    //to retrive order details
    const [getAllOrders, setAllOrders] = useState([]);
    useEffect(()=>{
      fetch(`http://localhost:8080/getordersbyid?id=${id}`)
      .then(response => response.json())
      .then(getAllOrders => setAllOrders(getAllOrders));
      console.log(getAllOrders)      
    },[]);
    
    //to retrive Product details
    const [productData, setProduct] = useState([]);
    useEffect(()=>{
      fetch(`http://localhost:8080/getallproductbyid?id=${id}`)
      .then(response => response.json())
      .then(productData => setProduct(productData));
      console.log(productData) 
    },[]);

    const [successMessage, setSuccessMessage] = useState("");

    const [submitted, setSubmitted] = useState(false);
    return(
        <div className="center-content">
      <h2>Recieved Dispatch Qty</h2>
      <div className="form-container">
      {successMessage && (
          <p style={{ color: "green", fontSize: "24px" }}>{successMessage}</p>
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
                onChange={(e)=>{dispatch({type:'update',fld:'orderId',val:e.target.value})}}  >
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
                  <label htmlFor="productId" className="form-label" >Product ID:</label>
                </td>
                <td>
                <select name="productId" className="form-select" id="productId"
                onChange={(e)=>{dispatch({type:'update',fld:'productId',val:e.target.value})}}  >
                      <option selected>Select Product</option>
                     {
                         productData.map(z => {
                             return (<option key={z.product_id} value={z.product_id} > {z.product_name+""+z.product_id} </option>
                             );
                         })
                     }
                </select>                  
                </td>
                <td>
                  <label htmlFor="productQty" className="form-label" >Product Quantity:</label>
                </td>
                <td>
                  <input type="number" id="productQty" name="productQty" value={formData.productQty}
                    onChange={(e)=>{dispatch({type:'update',fld:'productQty',val:e.target.value})}} required />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="submit-button-container">
            <button type="submit" onClick={(e)=>sendData(e)}disabled={submitted}>Submit</button> &nbsp; &nbsp;
            <button type="reset"  onClick={()=>{dispatch({type:'reset'}); setSubmitted(false);setSuccessMessage("")}  }>Clear</button>
          </div>
        </form>
                     <br/>
        <button type="button" onClick={navigateToHome}>Home</button>
      </div>
            
    </div>
    )
}