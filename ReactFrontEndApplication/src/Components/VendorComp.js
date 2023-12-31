import React ,{ useState ,useReducer, useEffect } from "react";



export default function VendorComp(){

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

const[selectvendor,setSelectedvendor]=useState();
const handlevendorChange=(e)=>{
  fetch(`http://localhost:8080/getpartbypid?id=${e}`)
          .then(response => response.json())
          .then(vendorData => setVendor(vendorData));

}

const[setSelectedproduct]=useState();
const handleproductChange=(e)=>{
  fetch(`http://localhost:8080/getpartbypid?id=${e}`)
          .then(response => response.json())
          .then(partData => setVendor(partData));

}


    return(

      <div className="center-content">
      <h2>Vendor Details</h2>
      <div className="form-container">
        <form >
          <table>
            <tbody>
              <tr>
              <div>
                <td>
          <label htmlFor="master_vendor_part_name">Vendor Part:</label>
          </td>
          <td>
      <select name="master_vendor_part_name" className="form-select" id="master_vendor_part_name" value={selectvendor}
                  onChange={(e)=>
                    {
                      dispatch({type:'update',fld:'master_vendor_part_name', val:e.target.value})
                      setSelectedvendor(e.target.value);
                        handlevendorChange(e.target.value);
                    }
                  }>
                    <option value="option selected">Vendor Part</option>
                    {
                         vendorData.map(v => {
                             return (<option key={v.master_vendor_id} value={v.master_vendor_id} > {v.master_vendor_part_name} </option>
                             );
                         })
                     }
                    </select>
                    </td>
      </div>
               </tr>
              <tr>
              <td>
              <label htmlFor="master_vendor_name" className="form-label" >Vendor Name:</label>
                </td>
                <td>
                <select name="master_vendor_name" className="form-select" id="master_vendor_name"
                onChange={(e)=>{dispatch({type:'update',fld:'master_vendor_name',val:e.target.value})}}>
                    
                    <option value="option selected">Vendor Name</option>
                    {
                         vendorData.map(v => {
                             return (<option key={v.master_vendor_id} value={v.master_vendor_id} > {v.master_vendor_name} </option>
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