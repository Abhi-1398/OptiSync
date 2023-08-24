import React, { useState } from "react";

export default function ProductListComp() {
  const [productData, setProductData] = useState([]);
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = { productName, description };
    setProductData([...productData, newProduct]);
    setProductName("");
    setDescription("");
  };

  return (
    <div>
      <h1>Product Details</h1>
      <div className="mb-2">
        <div className="form-row">
          <label htmlFor="productName">Product name:</label>
          <input
            type="text"
            name="productName"
            className="form-control"
            id="productName"
            value={productName}
            onChange={handleProductNameChange}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            name="description"
            className="form-control"
            id="description"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
      </div>

      <button type="submit" className="btn btn-primary btn-sm" onClick={handleSubmit}>
        Submit
      </button>

      <button
        type="reset"
        className="btn btn-primary btn-sm"
        onClick={() => {
          setProductName("");
          setDescription("");
        }}
      >
        Clear
      </button>

      {productData.length > 0 && (
        <div>
          <h2>Entered Product Data</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {productData.map((product, index) => (
                <tr key={index}>
                  <td>{product.productName}</td>
                  <td>{product.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
