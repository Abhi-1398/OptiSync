import React, { useState ,useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default  function CheckS()
{
    
    const data = JSON.parse(localStorage.getItem("loggedUser")).company.company_name;
    const id = JSON.parse(localStorage.getItem("loggedUser")).company.company_id;

  
    const initialState={
        company_id:id,
        raw_material_id:0,
        stock_date:new Date().toJSON().slice(0,10)
       }

       const reducer = (state, action) => {
        switch(action.type) {
             case 'update':
                return {...state, [action.fld]:action.val }
             case 'reset':
                return initialState
        }
      
      }

      const[dt,setDt]=useState();
      const[formData, dispatch] = useReducer(reducer , initialState );
      const sendData = (e) => {
        e.preventDefault();
    
        const reqOption = {
         method:'POST',
         headers:{'content-type':'application/json'},
         body: JSON.stringify(formData)
        }
    
        fetch("http://localhost:8080/fetchQty",reqOption)
        .then(
           resp => resp.text()
        )
        .then(data => setDt(data))
      
        
        //console.log(formData) 
    }

    const [RawMaterial, setRawMaterial] = useState([]);
    useEffect(()=>{
      fetch(`http://localhost:8080/getrawmaterial`)
      .then(response => response.json())
      .then(RawMaterialData => setRawMaterial(RawMaterialData));
        console.log(RawMaterial) 
    },[]);
    
    const navigate = useNavigate();
    const handleGoBack=() => {
      navigate("/Store")
    }

    return(
       

<div className="center-content">
<h5 style={{backgroundColor:"green"}}>Company: {data}</h5>
      <h2>Check status of Raw Material</h2>
      <h4 style={{color:"blue"}}>Quantity is : {dt}</h4>
      <div className="form-container">
        <form >
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="raw_material_id" className="form-label" >RawMaterial name:</label>
                </td>
                <td>
                <select name="raw_material_id" className="form-select" id="raw_material_id"
                onChange={(e)=>{dispatch({type:'update',fld:'raw_material_id',val:e.target.value})}}  >
                      <option selected>Select RawMaterial</option>
                     {
                         RawMaterial.map(z => {
                             return (<option key={z.raw_material_id} value={z.raw_material_id} > {z.name} </option>
                             );
                         })
                     }
                </select>                  
                </td>
              </tr>
              <tr>
              </tr>
            </tbody>
          </table>
          <div className="submit-button-container">
            <button type="submit" onClick={(e)=>sendData(e)}>Submit</button>
            <button onClick={handleGoBack}>Go Back</button>
          </div>
        </form>
      </div>
      {/*<p>{JSON.stringify(formData)}</p> */}
     
    </div>

    )
}