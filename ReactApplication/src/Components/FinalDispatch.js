import React, { useState, useEffect } from "react";
import "./MNewOrder.css";
import { useNavigate } from "react-router-dom";

function FinalDispatch() {
  const navigate=useNavigate()
  const change=()=>{
    navigate("/Dispatch");
  }
  const id=(JSON.parse(localStorage.getItem('loggedUser')).company).company_id
  const [orderObj, setOrderDetails] = useState(null);
  const [orderId, setOrderId] = useState(0);
  const [getAllOrders, setAllOrders] = useState([]);
  const [updateQty, setUpdateQty]=useState(null);


  const getOrderDetails = () => {
    fetch(`http://localhost:8080/getOrderById?order_id=${orderId}`)
      .then(response => response.json())
      .then(data => setOrderDetails(data));
  };
  const updateDispatchQty = (e) => {
    e.preventDefault();

    const reqOption = {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
    };

    const newqty = parseInt(updateQty) + parseInt(orderObj.dispatch_qty);

    fetch(`http://localhost:8080/updateDispatchQty/${newqty}/${orderId}/${id}`, reqOption) // Update the URL
      .then((resp) => {
        if (resp.ok){
          return resp.text();
        } 
        else throw new Error("server error");
      })
      .then((text) => text.length ? JSON.parse(text) : {})
      .then((updatedData) => {
        if (updatedData) {
          // Update the dispatched quantity in the UI
          setOrderDetails((prevOrderObj) => ({
            ...prevOrderObj,
            dispatch_qty: updatedData.updatedDispatchQty,
          }));
        }
      })
      .then(()=>{getOrderDetails()})
      .catch((error) => alert("server error. Try again later"));


  };

  useEffect(() => {
    fetch(`http://localhost:8080/getordersbyid?id=${id}`)
      .then(response => response.json())
      .then(data => setAllOrders(data));
  }, []);


  const validate = () => {
    if (orderObj && updateQty !== null) {
      return updateQty <= (orderObj.product_qty-orderObj.dispatch_qty);
    }
    return false;
  };

  return (
    <div className="center-content">
      <h2>Final Dispatch</h2>
      <div className="form-container">
        <form>
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="orderId">Order ID:</label>
                </td>
                <td>
                  <select
                    name="orderId"
                    className="form-select"
                    id="orderId"
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                  >
                    <option value="">Select Order Id</option>
                    {getAllOrders.map(v => (
                      <option key={v.order_id} value={v.order_id}>
                        {v.order_id}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="submit-button-container">
            <button
              type="button"
              onClick={getOrderDetails}
              disabled={!orderId}
            >
              Get Order details
            </button>
          </div>
        </form>
      </div>

      <div className="display-container">
        <h3>Order Details</h3>
        <table className="submitted-data-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Client Name</th>
              <th>Product Name</th>
              <th>Order Size</th>
              <th>Current Dispatch</th>
            </tr>
          </thead>
          <tbody>
            {orderObj && (
              <tr>
                <td>{orderObj.order_id}</td>
                <td>{orderObj.client_id.client_name}</td>
                <td>{orderObj.product_id.product_name}</td>
                <td>{orderObj.product_qty}</td>
                <td>{orderObj.dispatch_qty}</td>
              </tr>
            )}
          </tbody>
        </table>
              <br/>
        <div className="display-container">
        Submit final Dispatch Qty: 
        <input
          type="number"
          name="dispatchQty"
          id="dispatchQtyId"
          onChange={(e) => setUpdateQty(e.target.value)} 
        />
            &nbsp;
            <button type="button" onClick={updateDispatchQty} disabled={!validate()} >
            Update Dispatch Qty
            </button>
        <br/>
        <br/>
        <button type="button" onClick={change}>Back to Home</button>
       </div>
        </div>
    </div>
  );
}

export default FinalDispatch;
