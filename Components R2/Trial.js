import React, { useState } from "react";
import "./MNewOrder.css";

function DailyTask() {
    const [formData, setFormData] = useState({
        entryNo: "",
        orderId: "",
        quantity: "",
        TQuantity: "",
        mId: "",
        oId: "",
        AQuantity: "",
        RQuantity: "",
    });

    const [submittedData, setSubmittedData] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleEdit = (index) => {
        setSelectedIndex(index);
        const editedData = submittedData[index];
        setFormData(editedData);
    };

    const handleUpdate = () => {
        if (selectedIndex !== -1) {
            const updatedData = [...submittedData];
            updatedData[selectedIndex] = {
                ...formData,
                FQuantity: formData.AQuantity - formData.RQuantity,
            };
            setSubmittedData(updatedData);
            setSelectedIndex(-1);
        }
    };

    const handleCancel = () => {
        setSelectedIndex(-1);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (selectedIndex === -1) {
            const newData = {
                ...formData,
                FQuantity: formData.AQuantity - formData.RQuantity,
            };
            setSubmittedData([...submittedData, newData]);
            setFormData({
                entryNo: "",
                orderId: "",
                quantity: "",
                TQuantity: "",
                mId: "",
                oId: "",
                AQuantity: "",
                RQuantity: "",
            });
        }
    };

    return (
        <div className="center-content">
            <h2>Daily Task</h2>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                <table>
                        <tbody>
                            <tr>
                            <td>
                                    <label htmlFor="entryNo">Entry No:</label>
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        id="entryNo"
                                        name="entryNo"
                                        value={formData.entryNo}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </td>
                                <td>
                                    <label htmlFor="orderId">Order ID:</label>
                                </td>
                                <td>
                                    <select
                                        id="orderId"
                                        name="orderId"
                                        value={formData.orderId}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value="">Select an option</option>
                                        <option value="option1">Option 1</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                    </select>
                                </td>
                                <td>
                                    <label htmlFor="mId">Machine ID:</label>
                                </td>
                                <td>
                                    <select
                                        id="mId"
                                        name="mId"
                                        value={formData.mId}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value="">Select an option</option>
                                        <option value="machine1">Machine 1</option>
                                        <option value="machine2">Machine 2</option>
                                        <option value="machine3">Machine 3</option>
                                    </select>
                                </td>
                                <td>
                                    <label htmlFor="oId">Operator ID:</label>
                                </td>
                                <td>
                                    <select
                                        id="oId"
                                        name="oId"
                                        value={formData.oId}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value="">Select an option</option>
                                        <option value="operator1">Operator 1</option>
                                        <option value="operator2">Operator 2</option>
                                        <option value="operator3">Operator 3</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="quantity">Received Quantity:</label>
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
                                    <label htmlFor="TQuantity">Target :</label>
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        id="TQuantity"
                                        name="TQuantity"
                                        value={formData.TQuantity}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </td>
                                <td>
                                    <label htmlFor="AQuantity">Actual :</label>
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        id="AQuantity"
                                        name="AQuantity"
                                        value={formData.AQuantity}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </td>
                                <td>
                                    <label htmlFor="RQuantity">Rejected :</label>
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        id="RQuantity"
                                        name="RQuantity"
                                        value={formData.RQuantity}
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

            <div className="display-container">
                <h3>Submitted Data</h3>
                <table className="submitted-data-table">
                    <thead>
                    <tr>
                            <th>Entry No</th>
                            <th>Order ID</th>
                            <th>Received Quantity</th>
                            <th>Target Quantity</th>
                            <th>Actual Quantity</th>
                            <th>Rejected Quantity</th>
                            <th>Final Quantity</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {submittedData.map((data, index) => (
                            <tr key={index}>
                               <td>{data.entryNo}</td>
                                <td>{data.orderId}</td>
                                <td>{data.quantity}</td>
                                <td>{data.TQuantity}</td>
                                <td>{data.AQuantity}</td>
                                <td>{data.RQuantity}</td>
                                <td>{data.AQuantity - data.RQuantity}</td>
                                <td>
                                    {selectedIndex === index ? (
                                        <div>
                                            <button onClick={handleUpdate}>Update</button>
                                            <button onClick={handleCancel}>Cancel</button>
                                        </div>
                                    ) : (
                                        <button onClick={() => handleEdit(index)}>Edit</button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            {selectedIndex !== -1 && (
                <div className="update-button-container">
                    <button onClick={handleUpdate}>Confirm</button>
                </div>
            )}
        </div>
    );
}

export default DailyTask;
