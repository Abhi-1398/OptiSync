import React, { useState, useEffect } from "react";
import "./MNewOrder.css";

function FinalDispatch() {
  const [orderObj, setOrderDetails] = useState(null);
  const [orderId, setOrderId] = useState(0);
  const [getAllOrders, setAllOrders] = useState([]);
  const [updateQty, setUpdateQty]=useState(null);

  const updateDispatchQty = (e) => {
    e.preventDefault();

    const reqOption = {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
    };

    fetch(`http://localhost:9000/updateDispatchQty/${updateQty}/${orderId}/11`, reqOption) // Update the URL
      .then((resp) => {
        if (resp.ok) return resp.text();
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
      .catch((error) => alert("server error. Try again later"));
  };

  const getOrderDetails = () => {
    fetch(`http://localhost:9000/getOrderById?order_id=${orderId}`)
      .then(response => response.json())
      .then(data => setOrderDetails(data));
  };

  useEffect(() => {
    fetch(`http://localhost:9000/getOrders`)
      .then(response => response.json())
      .then(data => setAllOrders(data));
  }, []);

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

        <div className="display-container">
        Submit final Dispatch Qty: 
        <input
          type="number"
          name="dispatchQty"
          id="dispatchQtyId"
          onChange={(e) => setUpdateQty(e.target.value)}
        />
            
        <button type="button" onClick={updateDispatchQty}>
          Update Dispatch Qty
        </button>
       </div>
        </div>
    </div>
  );
}

export default FinalDispatch;
