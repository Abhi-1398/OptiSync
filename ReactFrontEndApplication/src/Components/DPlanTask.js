import { useState, useEffect,useReducer } from "react";
import "./MNewOrder.css";
import { useNavigate } from "react-router-dom";

export default function DPlanTask() {
    const navigate=useNavigate()
    const change=()=>{
    navigate("/Dispatch");
    }
  const id=(JSON.parse(localStorage.getItem('loggedUser')).company).company_id
    const initialState={
        dateId:"",
        orderId: 0,
        productId: 0,
        targetedQtyId: 0,
        acheivedQtyId: 0,
        dispatcherNameId:"",
        disptachStatusId:0
       }
      const reducer = (state, action) => {
        switch(action.type) {
             case 'update':
                return {...state, [action.fld]:action.val }
             case 'reset':
                return initialState
        }
      }

      const[formData, dispatch] = useReducer(reducer , initialState);
      
      const sendTask = (e) => {
        e.preventDefault();
    
        const reqOption = {
         method:'PUT',
         headers:{'content-type':'application/json'},
         body: JSON.stringify(formData)
        }
    
        fetch("http://localhost:8080/saveTask",reqOption)
        .then(resp => {if(resp.ok)
         return resp.text();
        else
         throw new Error("server error");
        })
        .then((text) => {
            if (text.length) {
              // If data submission was successful
              setSuccessMessage("Task Assigned Successfully");
            }
            return text;
          })
        .catch((Error)=>alert("server error . try again later")) 
        console.log(formData) 
    }
    localStorage.setItem("starttaskdata",JSON.stringify(formData))
    const updateTask = (e) => {

        e.preventDefault();
        if (formData.acheivedQtyId > formData.targetedQtyId) {
            alert("Achieved Qty cannot be greater than Targeted Qty.");
            return;
        }
    
        const reqOption = {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(formData)
        };
    
        fetch("http://localhost:8080/updateTask", reqOption)
            .then(resp => {
                if (resp.ok)
                    return resp.text();
                else
                    throw new Error("server error");
            })
            .then((text) => {
                if (text.length) {
                  // If data submission was successful
                  setSuccessMessage("Task Updated Successfully");
                }
                return text;
              })
            .catch((Error) => alert("server error . try again later"));
        console.log(formData);
        setUpdateClicked(false);
    };
    
    //to retrive Product details
    const [productData, setProduct] = useState([]);
    useEffect(()=>{
    fetch(`http://localhost:8080/getallproductbyid?id=${id}`)
    .then(response => response.json())
    .then(productData => setProduct(productData));
    console.log(productData) 
    },[]);

    //to retrive Order details
    const [orderData, setOrder] = useState([]);
    useEffect(()=>{
    fetch(`http://localhost:8080/getordersbyid?id=${id}`)
    .then(response => response.json())
    .then(orderData => setOrder(orderData));
    console.log(orderData) 
    },[]);
    //changing update button

    const [updateClicked, setUpdateClicked] = useState(false);

    const handleUpdateClick = (e) => {
            e.preventDefault();
            setUpdateClicked(true); 
            setSuccessMessage("Please Enter Today's Acheived Quantity");  
    };

    const [successMessage, setSuccessMessage] = useState("");

    return(
        <div className="center-content">
            <h1>Plan Your Daily Task</h1>
            <div className="form-container">
        {successMessage && (
          <p style={{ color: "green", fontSize: "24px" }}>{successMessage}</p>
        )}
                <form>
                    <div className="display-container">
                    <table className="submitted-data-table">
                        <thead>
                        <tr>
                            <td>
                                Date
                            </td>
                            <td>
                                Order Id
                            </td>
                            <td>
                                Product Name 
                            </td>
                            <td>
                                Targeted value 
                            </td>
                            <td>
                                Dispatcher Name
                            </td>
                            <td>
                                Achieved Qty
                            </td>
                        </tr>
                        </thead>
                        
                        <tr>
                            <td>
                                <input type="date" className="form-select" id="dateId"
                                onChange={(e)=>{dispatch({type:'update',fld:'dateId',val:e.target.value})}} 
                                />
                            </td>
                            <td>
                            <select name="orderId" className="form-select" id="orderId"
                            onChange={(e)=>{dispatch({type:'update',fld:'orderId',val:e.target.value})}}  >
                                <option selected>Select Product</option>
                                    {
                                    orderData.map(z => {
                                    return (<option key={z.order_id} value={z.order_id} > {z.order_id} </option>
                             );
                             })
                            }
                            </select>
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
                                <input type="number" name="targetedQty" id="targetedQtyId" 
                                onChange={(e)=>{dispatch({type:'update',fld:'targetedQtyId',val:e.target.value})}}  />
                            </td>
                            <td>
                                <input type="text" name="dispatcherName" id="dispatcherNameId"
                                onChange={(e)=>{dispatch({type:'update',fld:'dispatcherNameId',val:e.target.value})}} />
                            </td>
                            <td>
                              <input type="number" name="acheivedQty" id="acheivedQtyId" disabled={!updateClicked} 
                                placeholder="0"
                                onChange={(e)=>{dispatch({type:'update',fld:'acheivedQtyId',val:e.target.value})}}
                               />                               
                            </td>
                        </tr>
                    </table>
                    </div>
                    <button  onClick={sendTask}>
                            Start Daily Task
                    </button> &nbsp;&nbsp;
                    <button onClick={handleUpdateClick }  >
                            Update Daily Task
                    </button>
                    &nbsp;&nbsp;      
                    <button onClick={updateTask}>
                            Confirm Dispatch
                    </button>
                </form>
                
            </div>
            <br/>
                <button onClick={change}>
                    Back To Home
                    </button>
        </div>
    )
}  