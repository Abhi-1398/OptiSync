import { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register(){

const [allPlan,setallPlan] = useState([]);
    
    
useEffect(() => {
   const items = JSON.parse(localStorage.getItem('items'));
   if (items) {
    setallPlan(items);
   }
 }, []); 

//allPlan.map(e=>return)



const init={
 name:"",
 person_name:"",
 contact_no:"",
 email:"",
 payment_status:false,
 plan_id:0,
 registration_date: new Date().toJSON().slice(0, 10), 
 mode_of_transaction:"Online"
}

const reducer=(state,action)=>{
 switch(action.type)
 {
     case 'update':
         return{...state,[action.fld]:action.val}
     case 'reset':
         return init ;
 }
}

const[info,dispatch]=useReducer(reducer,init); 

const navigate = useNavigate();
const navigatetopayment = ()=>{

}
localStorage.setItem('submit', JSON.stringify(info));
const[Msg,setMsg]=useState("");
const sendData = (e) => {
e.preventDefault();
const reqOption = {
 method:'POST',
 headers:{'content-type':'application/json'},
 body: JSON.stringify(info)
}
fetch("http://localhost:9000/saveCompany",reqOption)
.then(resp => {if(resp.ok)
 return resp.text();
else
 throw new Error("server error");

})
.then(text => text.length ? JSON.parse(text) : {})
.then(obj => {
if(Object.keys(obj).length===0)
{
 setMsg("Registration failed");
}
else
{
 if(obj.status === false)
 {
     alert("Request has not been approved");
     navigate('/');
 }
 else
 {
          navigate("/submit");                      
 }
}
})
.catch((Error)=>alert("server error . try again later"))
}

const[planid,setplanid]=useState();
const amount=(e)=>{
setplanid(e);
}
console.log(planid);
const[price,setprice]=useState();
const p=allPlan.map(pl=>{ if(pl.plan_id==planid){return pl.price}});
console.log(p);




return(
 <div>
     <h1>Registration</h1>
 
     
         <form>
             <div className="mb-3">
                 <label htmlFor="name" className="form-label">Enter Company Name:</label>
                 <input type="text" className="form-control" id="name" name="name" value={info.name}
                 onChange={(e)=>{dispatch({type:'update',fld:'name',val:e.target.value})}}/>
              </div>
              <div className="mb-3">
                 <label htmlFor="person_name" className="form-label">Enter Name:</label>
                 <input type="text" className="form-control" id="person_name" name="person_name" value={info.person_name}
                 onChange={(e)=>{dispatch({type:'update',fld:'person_name',val:e.target.value})}}/>
              </div>
              <div className="mb-3">
                 <label htmlFor="contact_no" className="form-label">Enter Contact Number:</label>
                 <input type="text" className="form-control" id="contact_no" name="contact_no" value={info.contact_no}
                 onChange={(e)=>{dispatch({type:'update',fld:'contact_no',val:e.target.value})}}/>
              </div>
              <div className="mb-3">
                 <label htmlFor="email" className="form-label">Enter Email ID:</label>
                 <input type="text" className="form-control" id="email" name="email" value={info.email}
                 onChange={(e)=>{dispatch({type:'update',fld:'email',val:e.target.value})}}/>
              </div>
              <div>
              <label  htmlFor="plan">Select Plan:</label>
             
             
                <select name="plan_id" className="form-select" id="plan_id"
                onChange={(e)=>{dispatch({type:'update',fld:'plan_id',val:e.target.value})}} onClick={e=>{amount(e.target.value)}}>
                     {
                         allPlan.map(pl => {
                             return (<option  value={pl.plan_id}>{pl.plan_name} </option>
                             );
                         })
                     }
                </select>
              </div>
              <h1>Payment Info</h1>
              <p>Amount:{p}</p>
              <div>
              <input type="checkbox" id="payment_status" name="payment_status" value={true} 
                onChange={(e)=>{dispatch({type:'update',fld:'payment_status',val:e.target.value})}} />Approved Payment
              
              
              </div>
         
              <button type="submit" className="btn btn-primary mb-3" onClick={sendData}>Submit</button>
              <button type="reset" className="btn btn-primary mb-3" onClick={()=>{dispatch({type:'reset'})}}>Clear</button>
             
         </form>
        <p>{JSON.stringify(info)}</p>
        <p>{Msg}</p>
 </div>

    );

}