import React, { useState } from "react";

export default function MachineListComp() {
  const [machineData, setMachineData] = useState([]);
  const [machineName, setMachineName] = useState("");
  const [description, setDescription] = useState("");

  const handleMachineNameChange = (event) => {
    setMachineName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMachine = { machineName, description };
    setMachineData([...machineData, newMachine]);
    setMachineName("");
    setDescription("");
  };

  return (
    <div>
      <h1>Machine Details</h1>
      <div className="mb-2">
        <div className="form-row">
          <label htmlFor="machineName">Machine name:</label>
          <input
            type="text"
            name="machineName"
            className="form-control"
            id="machineName"
            value={machineName}
            onChange={handleMachineNameChange}
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
          setMachineName("");
          setDescription("");
        }}
      >
        Clear
      </button>

      {machineData.length > 0 && (
        <div>
          <h2>Entered Machine Data</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Machine Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {machineData.map((machine, index) => (
                <tr key={index}>
                  <td>{machine.machineName}</td>
                  <td>{machine.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
