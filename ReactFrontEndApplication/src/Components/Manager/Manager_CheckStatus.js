import React, { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";

export default function Checkstatus(){
    const id=(JSON.parse(localStorage.getItem('loggedUser')).company).company_id;

    //to retrive order details
    const [statusorderData, setOrderStatus] = useState([]);
    const [statusAssemData , setAssemStatus] = useState([]);
    const [statusProdData , setProdStatus] = useState([]);
    const [statusData,setStatusData] = useState(false);
    const [orderId, setOrderId] = useState('');
    const navigate=useNavigate();
    const navigateToHome=()=>{navigate("/Manager")}

    const getOrderStatusDetails = ()=>{
       fetch(`http://localhost:8080/getStatus?orderId=${orderId}`)
      .then(response => response.json())
      .then(statusorderData =>setOrderStatus(statusorderData));

      fetch(`http://localhost:8080/getAssemStatus?orderId=${orderId}`)
      .then(response => response.json())
      .then(statusAssemData => setAssemStatus(statusAssemData));

      fetch(`http://localhost:8080/getProductionStatus?orderId=${orderId}`)
      .then(response => response.json())
      .then(statusProdData => setProdStatus(statusProdData));

      setStatusData(true);
    };

    // to retrive order_id
    const [getAllOrders, setAllOrders] = useState([]);
    useEffect(()=>{
    fetch(`http://localhost:8080/getordersbyid?id=${id}`)
      .then(response => response.json())
      .then(getAllOrders => setAllOrders(getAllOrders));
      console.log(getAllOrders)      
    },[]);

    
    return(
    <div className="center-content">
    <div>
        <h1>Check Status of Your Order</h1>
        <div>
            <br/>
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
        <br/>
        <button onClick={getOrderStatusDetails}>Get Order Details</button>
        <br/>
            <div>
            <br/>
                    {statusData ? (
                    <table className="submitted-data-table">
                        <thead>
                            <td>Production</td>
                            <td>A & QA</td>
                            <td>Dispatch</td>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{statusProdData[0]? statusProdData:0}</td>
                            <td>{statusAssemData[0]?statusAssemData:0}</td>
                            <td>{statusorderData[0]?statusorderData:0}</td>
                        </tr>
                        </tbody>
                    </table>
                    ) : (
                    <p>Please Select Correct Order ID to retrieve Order information</p>
                    )}
            </div>
            <br/>
            <button type="button" className="btn btn-primary" onClick={navigateToHome}>Home</button>
        </div>
    </div>
    )
}