import React, { useState ,useReducer ,useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CpmComp()
{
  const id=(JSON.parse(localStorage.getItem('loggedUser')).company).company_id
const navigate=useNavigate();
    const initialState={
      company_id:id,
      product_id:0,
      part_id:0,
        store_ct:"",
        production_ct:"",
        vendor_ct:"",
        assembly_ct:"",
        dispatch_ct:""
                  
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
    



    const sendData = (e) => {
      e.preventDefault();
    
      const reqOption = {
       method:'POST',
       headers:{'content-type':'application/json'},
       body: JSON.stringify(formData)
      }
    
      fetch("http://localhost:8080/saveCPM",reqOption)
      .then(resp => {if(resp.ok)
       return resp.text();
      else
       throw new Error("server error");
      })
      .then(text => text.length ? JSON.parse(text) : {})
      .catch((Error)=>alert("server error . try again later")) 
      console.log(formData) 
    }

    
    

      const [productData, setProduct] = useState([]);
      useEffect(()=>{
        fetch(`http://localhost:8080/getallproductbyid?id=${id}`)
          .then(response => response.json())
          .then(productData => setProduct(productData));
          console.log(productData) 
      },[]);

      const [partData, setPart ]= useState([]);
    
const[selectproduct,setSelectedproduct]=useState();
const handleproductChange=(e)=>{
  fetch(`http://localhost:8080/getpartbypid?id=${e}`)
          .then(response => response.json())
          .then(partData => setPart(partData));

}

const[selectedpart,setSelectedpart]=useState()
const handlepartChange=(e)=>{
  setSelectedpart(e);
}
    return (
        <div>
          <h1>CPM Details</h1>

          
          <div>
          <label htmlFor="part_name">Product Name:</label>
      <select name="product_id" className="form-select" id="product_id" value={selectproduct}
                  onChange={(e)=>
                    {
                      dispatch({type:'update',fld:'product_id', val:e.target.value})
                      setSelectedproduct(e.target.value);
                        handleproductChange(e.target.value);
                    }
                  }>
                    <option value="option selected">Product Name</option>
                    {
                         productData.map(v => {
                             return (<option key={v.product_id} value={v.product_id} > {v.product_name} </option>
                             );
                         })
                     }
                    </select>
      </div>
      <div>
      <label htmlFor="part_name">Part Name:</label>
      <select name="part_id" className="form-select" id="part_id" value={selectedpart}
                  onChange={(e)=>
                    {
                      dispatch({type:'update',fld:'part_id', val:e.target.value})
                      setSelectedpart(e.target.value);
                    handlepartChange(e.target.value);
                    }
                  
                  }>
                    <option value="option selected">Part Name</option>
                    {
                         partData.map(v => {
                             return (<option key={v.part_id} value={v.part_id} > {v.part_name} </option>
                             );
                         })
                     }
                    </select>
      </div>
          
            

          <div className="mb-2">
            <div className="form-row">
              <label htmlFor="store_ct">Store CT:</label>
              <input type="number" name="store_ct" className="form-control" id="store_ct" value={formData.store_ct}
              onChange={(e)=>{dispatch({type:'update',fld:'store_ct',val:e.target.value})}} required />
                     
            </div>

            
    
            <div className="mb-2">
              <label htmlFor="production_ct">Production CT:</label>
              <input type="number" name="production_ct" className="form-control" id="production_ct"  value={formData.production_ct}
                onChange={(e)=>{dispatch({type:'update',fld:'production_ct',val:e.target.value})}} required />
             
            </div>

            <div className="mb-2">
              <label htmlFor="vendor_ct">Vendor CT:</label>
              <input type="number" name="vendor_ct" className="form-control" id="vendor_ct"  value={formData.vendor_ct}
                onChange={(e)=>{dispatch({type:'update',fld:'vendor_ct',val:e.target.value})}} required />
             
            </div>

            <div className="mb-2">
              <label htmlFor="assembly_ct">Assembly CT:</label>
              <input type="number" name="assembly_ct" className="form-control" id="assembly_ct"  value={formData.assembly_ct}
                onChange={(e)=>{dispatch({type:'update',fld:'assembly_ct',val:e.target.value})}} required />
             
            </div>

            <div className="mb-2">
              <label htmlFor="dispatch_ct">Dispatch CT:</label>
              <input type="number" name="dispatch_ct" className="form-control" id="dispatch_ct"  value={formData.dispatch_ct}
                onChange={(e)=>{dispatch({type:'update',fld:'dispatch_ct',val:e.target.value})}} required />
             
            </div>
          </div>
    
          <div className="submit-button-container">
                <button type="submit" onClick={(e)=>sendData(e)}>Submit</button>
                <button type="reset"  onClick={()=>{dispatch({type:'reset'})}}>Clear</button>
                <button type="button" onClick={()=>navigate("/Setup")}>Back</button>
          </div>
         
    <p>{JSON.stringify(formData)}</p>
        </div>
    )
}