import React, { useState } from "react";
import "./MNewOrder.css"; // Make sure to import the CSS file for styling

function NewOrder() {
   // State to manage form input values
   const [formData, setFormData] = useState({
    orderId: "",
    partId: "",
    quantity: "",
    existingQuantity: "",
  });

  // State to manage submitted data
  const [submittedData, setSubmittedData] = useState([]);

  // Function to handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const newData = { ...formData };
    setSubmittedData([...submittedData, newData]);
    setFormData({
      orderId: "",
      partId: "",
      quantity: "",
      existingQuantity: "",
    });
  };

  return (
    <div className="center-content">
      <h2>Order Form</h2>
      <div className="form-container">
        {/* Form section */}
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="orderId">Order ID:</label>
                </td>
                <td>
                  <input
                    type="text"
                    id="orderId"
                    name="orderId"
                    value={formData.orderId}
                    onChange={handleInputChange}
                    required
                  />
                </td>
                <td>
                  <label htmlFor="partId">Part ID:</label>
                </td>
                <td>
                  <input
                    type="text"
                    id="partId"
                    name="partId"
                    value={formData.partId}
                    onChange={handleInputChange}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="quantity">Quantity:</label>
                </td>
                <td>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    required
                  />
                </td>
                <td>
                  <label htmlFor="existingQuantity">Existing Quantity:</label>
                </td>
                <td>
                  <input
                    type="number"
                    id="existingQuantity"
                    name="existingQuantity"
                    value={formData.existingQuantity}
                    onChange={handleInputChange}
                    required
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="submit-button-container">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>

      {/* Display section */}
      <div className="display-container">
        <h3>Submitted Data</h3>
        <table className="submitted-data-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Part ID</th>
              <th>Quantity</th>
              <th>Existing Quantity</th>
            </tr>
          </thead>
          <tbody>
            {submittedData.map((data, index) => (
              <tr key={index}>
                <td>{data.orderId}</td>
                <td>{data.partId}</td>
                <td>{data.quantity}</td>
                <td>{data.existingQuantity}</td>
              </tr>
            ))}
            
          </tbody>
        </table>
       
      </div>
    </div>
    
  );
}

export default NewOrder;