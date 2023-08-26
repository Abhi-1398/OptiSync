import { useState, useEffect,useReducer } from "react";
import "./MNewOrder.css";



export default function DPlanTask() {

    const initialState={
        dateId:"",
        orderId: 0,
        productId: 0,
        targetedQty: 0,
        acheivedQty: 0,
        dispatcherName:"",
        disptachStatus:""
       }
      //needed by useReducer - 
      const reducer = (state, action) => {
        switch(action.type) {
             case 'update':
                return {...state, [action.fld]:action.val }
             case 'reset':
                return initialState
        }
      }

      const[formData, dispatch] = useReducer(reducer , initialState);
      
      const sendData = (e) => {
        e.preventDefault();
    
        const reqOption = {
         method:'POST',
         headers:{'content-type':'application/json'},
         body: JSON.stringify(formData)
        }
    
        fetch("http://localhost:9000/saveOrder",reqOption)
        .then(resp => {if(resp.ok)
         return resp.text();
        else
         throw new Error("server error");
        })
        .then(text => text.length ? JSON.parse(text) : {})
        .catch((Error)=>alert("server error . try again later")) 
        console.log(formData) 
    }
    
    //to retrive Product details
    const [productData, setProduct] = useState([]);
    useEffect(()=>{
    fetch(`http://localhost:9000/getProducts`)
    .then(response => response.json())
    .then(productData => setProduct(productData));
    console.log(productData) 
    },[]);

    //changing update button

    const [updateClicked, setUpdateClicked] = useState(false);

    const handleUpdateClick = () => {
        setUpdateClicked(true);
    };

    return(
        <div className="center-content">
            <h1>Plan Your Daily Task</h1>
            <div className="form-container">
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
                                    productData.map(z => {
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
                                <input type="number" name="targetedQty" id="targetedQtyId"/>
                            </td>
                            <td>
                                <input type="text" name="dispatcherName" id="dispatcherNameId"/>
                            </td>
                            <td>
                              <input
                                type="number"
                                name="acheivedQty"
                                id="acheivedQtyId"
                                disabled={!updateClicked} // Disable if updateClicked is false
                                placeholder="0"
                               />
                               {/* <input type="number" name="acheivedQty" id="acheivedQtyId" disabled placeholder="0" />*/}
                               
                            </td>
                        </tr>
                    </table>
                    </div>
                    <button >
                        Start Daily Task
                    </button> &nbsp;&nbsp;
                    <button onClick={handleUpdateClick}>
                    {updateClicked ? "Confirm Dispatch" : "Update Daily Task"}
                    </button>

                </form>
            </div>
        </div>
    )
}