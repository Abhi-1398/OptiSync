import React, { useState } from "react";

export default function RawMaterialListComp() {
  const [rawMaterialData, setRawMaterialData] = useState([]);
  const [rawmaterialName, setRawmaterialName] = useState("");
  const [description, setDescription] = useState("");

  const handleRawMaterialNameChange = (event) => {
    setRawmaterialName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newRawMaterial = { rawmaterialName, description };
    setRawMaterialData([...rawMaterialData, newRawMaterial]);
    setRawmaterialName("");
    setDescription("");
  };

  return (
    <div>
      <h1>Rawmaterial Details</h1>
      <div className="mb-2">
        <div className="form-row">
          <label htmlFor="rawmaterialName">Rawmaterial name:</label>
          <input
            type="text"
            name="rawmaterialName"
            className="form-control"
            id="rawmaterialName"
            value={rawmaterialName}
            onChange={handleRawMaterialNameChange}
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
          setRawmaterialName("");
          setDescription("");
        }}
      >
        Clear
      </button>

      {rawMaterialData.length > 0 && (
        <div>
          <h2>Entered Rawmaterial Data</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Rawmaterial Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {rawMaterialData.map((rawmaterial, index) => (
                <tr key={index}>
                  <td>{rawmaterial.rawmaterialName}</td>
                  <td>{rawmaterial.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
