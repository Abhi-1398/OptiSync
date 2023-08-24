import React, { useReducer, useState } from "react";
import "./MNewOrder.css";

export default  function DailyTask() {
            
            const init = {
                entryNo: 0,
                orderId: 0,
                quantity: 0,
                TQuantity: 0,
                mId: 0,
                onm: "",
                AQuantity: 0,
                RQuantity: 0
            }

            const reducer =(state , action)=>{
                switch(action.type)
                {
                    case 'update':
                        return {...state,[action.fld]:action.val}
                    default:
                        console.log("default case")
                }
            }

            const [formData, setFormData] = useReducer(reducer,init);
            const [submittedData, setSubmittedData] = useState([]);
            const [selectedIndex, setSelectedIndex] = useState(-1);

            
            const sendDataToServer=(e)=>{
                const reqOptions={
                    method:'POST',
                    headers:{'content-type':'application/json'},
                    body: JSON.stringify(formData)
            }

            e.preventDefault();
            fetch("http://localhost:8080/saveProductionData", reqOptions)
            .then(resp => {if(resp.ok)
                return resp.text();
            else
                throw new Error("server error");
            })
            .then(text => text.length ? JSON.parse(text) : {})
            .then(obj => {
                if (Object.keys(obj).length === 0) {
                    alert("Server Error");
                     } else {
                 alert("Success");
        }
    })

            // const handleInputChange = (event) => {
            //     const { name, value } = event.target;
            //     setFormData({
            //         ...formData,
            //         [name]: value,
            //     });
            // };

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
                    setFormData({
                        entryNo: 0,
                        orderId: 0,
                        quantity: 0,
                        TQuantity: 0,
                        mId: 0,
                        onm: "",
                        AQuantity: 0,
                        RQuantity: 0
                    });
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
                                                value={formData.eno}
                                                onChange={(e)=>{setFormData({type:'update',fld:'eno',val:e.target.value})}}
                                                required
                                            />
                                        </td>
                                        <td>
                                            <label htmlFor="orderId">Order ID:</label>
                                        </td>
                                        <td>
                                            <input type="number"
                                                id="orderId"
                                                name="orderId"
                                                value={formData.orderId}
                                                onChange={(e)=>{setFormData({type:'update',fld:'orderId',val:e.target.value})}}
                                                required
                                        />
                                        </td>
                                        <td>
                                            <label htmlFor="mId">Machine ID:</label>
                                        </td>
                                        <td>
                                            <input type="number"
                                                id="mId"
                                                name="mId"
                                                value={formData.mId}
                                                onChange={(e)=>{setFormData({type:'update',fld:'mId',val:e.target.value})}}
                                                required
                                            />
                                        </td>
                                        <td>
                                            <label htmlFor="oId">Operator name:</label>
                                        </td>
                                        <td>
                                        <input type="text"
                                                id="oId"
                                                name="oId"
                                                value={formData.onm}
                                                onChange={(e)=>{setFormData({type:'update',fld:'onm',val:e.target.value})}}
                                                required
                                            
                                            />   
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
                                                value={formData.qty}
                                                onChange={(e)=>{setFormData({type:'update',fld:'qty',val:e.target.value})}}
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
                                                value={formData.num}
                                                onChange={(e)=>{setFormData({type:'update',fld:'num',val:e.target.value})}}
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
                                                value={formData.act}
                                                onChange={(e)=>{setFormData({type:'update',fld:'act',val:e.target.value})}}
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
                                                value={formData.rej}
                                                onChange={(e)=>{setFormData({type:'update',fld:'rej',val:e.target.value})}}
                                                required
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div >
                                <input type="submit" onClick={handleUpdate}>Submit</input>
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
                    
                    
                        <div className="update-button-container">
                            <button onClick={(e)=>sendDataToServer(e)}>Confirm</button>
                        </div>
                {JSON.stringify(formData)}
                </div>
            );
        }
}
