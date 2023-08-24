import React, { useState ,useEffect} from "react";

export default function Checkstatus(){

    //to retrive order details
    const [statusData, setStatus] = useState(null);
    const [orderId, setOrderId] = useState('');

    const getOrderStatusDetails = ()=>{
        alert(orderId)
        fetch(`http://localhost:9000/getStatus?orderId=${orderId}`)
      .then(response => response.json())
      .then(statusData => setStatus(statusData));
      console.log(statusData) 
    };

    // to retrive order_id
    const [getAllOrders, setAllOrders] = useState([]);
    useEffect(()=>{
    fetch(`http://localhost:9000/getOrders`)
      .then(response => response.json())
      .then(getAllOrders => setAllOrders(getAllOrders));
      console.log(getAllOrders)      
    },[]);


    return(
    <div>
    <div>
        <h1>In Check statusData</h1>
        <div>
        <select name="orderId" className="form-select" id="orderId"
                onChange={(e) => setOrderId(e.target.value)} >
                      <option selected>Select Order Id</option>
                     {
                         getAllOrders.map(v => {
                             return (<option key={v.order_id} value={v.order_id} > {v.order_id} </option>
                             );
                         })
                     }
        </select>
        </div>
    </div>
    <div>
        <button onClick={getOrderStatusDetails}>Get Order Details</button>
            <div>
                    {statusData ? (
                    <ul>
                    {statusData.map((value, index) => (
                    <li key={index}>{value}</li>
                    ))}
                    </ul>
                    ) : (
                    <p>Please Select Correct Order ID to retrieve Order information</p>
                    )}
            </div>
        </div>
    </div>
    )
}