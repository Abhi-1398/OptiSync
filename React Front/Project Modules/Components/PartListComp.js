import React, { useState } from "react";

export default function PartListComp() {
  const [partData, setPartData] = useState([]);
  const [partName, setPartName] = useState("");
  const [description, setDescription] = useState("");

  const handlePartNameChange = (event) => {
    setPartName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPart = { partName, description };
    setPartData([...partData, newPart]);
    setPartName("");
    setDescription("");
  };

  return (
    <div>
      <h1>Part Details</h1>
      <div className="mb-2">
        <div className="form-row">
          <label htmlFor="cname">Part name:</label>
          <input
            type="text"
            name="company"
            className="form-control"
            id="cname"
            value={partName}
            onChange={handlePartNameChange}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="pname">Description:</label>
          <input
            type="text"
            name="pname"
            className="form-control"
            id="pname"
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
          setPartName("");
          setDescription("");
        }}
      >
        Clear
      </button>

      {partData.length > 0 && (
        <div>
          <h2>Entered Part Data</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Part Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {partData.map((part, index) => (
                <tr key={index}>
                  <td>{part.partName}</td>
                  <td>{part.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
