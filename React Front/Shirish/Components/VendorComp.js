import React ,{ useState ,useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";



export default function VendorComp(){
  const navigate=useNavigate();
  const navigateToHome=()=>{
    navigate("/Setup");

  }

  const initialState={
    master_vendor_name:"",
    master_vendor_part_name:""  
  }

const reducer = (state, action) => {
  switch(action.type) {
       case 'update':
          return {...state, [action.fld]:action.val }
       case 'reset':
          return initialState
  }

}

const[formData, dispatch] = useReducer(reducer , initialState );
const [vendorData, setVendor] = useState([]);

useEffect(()=>{
  fetch(`http://localhost:8080/allVendors`)
    .then(response => response.json())
    .then(vendorData => setVendor(vendorData));
    console.log(vendorData) 
},[]);


const sendData = (e) => {
  e.preventDefault();

  const reqOption = {
   method:'POST',
   headers:{'content-type':'application/json'},
   
   body: JSON.stringify(formData)
  }

  fetch("http://localhost:8080/saveVendor",reqOption)
  .then(resp => {if(resp.ok)
   return resp.text();
  else
   throw new Error("server error");
  })
  .then(text => text.length ? JSON.parse(text) : {})
  .catch((Error)=>alert("server error . try again later")) 
  console.log(formData) 
}

    return(

      <div className="center-content">
      <h2>Vendor Details</h2>
      <div className="form-container">
        <form >
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="master_vendor_id" className="form-label" >Vendor Name:</label>
                </td>
                <td>
                <select name="master_vendor_id" className="form-select" id="master_vendor_id"
                onChange={(e)=>{dispatch({type:'update',fld:'master_vendor_id',val:e.target.value})}}>
                    <option value="option selected">Vendor option</option>
                    {
                         vendorData.map(v => {
                             return (<option key={v.master_vendor_id} value={v.master_vendor_id} > {v.master_vendor_name} </option>
                             );
                         })
                     }
                    </select>
                </td>
              </tr>
              <tr>
              <td>
              <label htmlFor="master_vendor_id" className="form-label" >Vendor PartName:</label>
                </td>
                <td>
                <select name="master_vendor_id" className="form-select" id="master_vendor_id"
                onChange={(e)=>{dispatch({type:'update',fld:'master_vendor_id',val:e.target.value})}}>
                    
                    <option value="option selected">Vendor Part</option>
                    {
                         vendorData.map(v => {
                             return (<option key={v.master_vendor_id} value={v.master_vendor_id} > {v.master_vendor_part_name} </option>
                             );
                         })
                     }
                    </select>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>


      <div className="submit-button-container">
            <button type="submit" onClick={(e)=>sendData(e)}>Submit</button>
            <button type="reset"  onClick={()=>{dispatch({type:'reset'})}}>Clear</button>
          </div>
          <br/>
          <button type="button" onClick={navigateToHome}>Home</button>
    </div>
 

    
    
    //     <div>
    //     <form> 
    //       <h1>Machine Details</h1>
    //   <div className="mb-2">
    //     <div className="form-row">
    //       <label htmlFor="machine_name">Vendor name:</label>
    //       <select>
    //                 <option value="someOption">Some option</option>
    //                 <option value="otherOption">Other option</option>
    //       </select>
    //   </div>
      
    //       <label htmlFor="machine_Decription">vendor Partname:</label>
    //       <select>
    //                 <option value="someOption">Some option</option>
    //                 <option value="otherOption">Other option</option>
    //       </select>
      
    //   </div>
    //   </form> 
    // </div>        
    )
}