import React, { useEffect, useReducer , useState } from "react";
import { useNavigate } from "react-router-dom";
function Registration(){

    const init={
        cname:"",
        pname:"",
        contact:"",
        email:"",
        plan:0
    }
const reducer = (state,action) =>{
    switch(action.type){
        case 'update':
            return {...state,[action.fld]:action.val}
    }
}

    const [allPlan,setallPlan] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/getplans")
        .then(resp => resp.json())
        .then(pln => setallPlan(pln))
    },[]);


    const navigate = useNavigate();
    const[info,dispatch]=useReducer(reducer,init);
    const[Msg,setMsg]=useState("");
    const sendData = (e) => {
        e.preventDefault();
        const reqOption = {
            method:'POST',
            headers:{'content-type':'application/json'},
            body: JSON.stringify(info)
        }
        fetch("http://localhost:8080/registration",reqOption)
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
                                     navigate("/Payment");                         
                            }
                        }
        })
        .catch((error)=>alert("server error . try again later"))
    }

    return(
        <div>
            
            <table className="align-middle  mx-auto col-10 col-md-8 col-lg-6">
                <tr>
                    <td><h1>Registration</h1></td>
                    
                </tr>
                <tr>
                    <td><label  htmlFor="cname">Company name:</label></td>
                    <td><input type="text" name="company" className="form-control" id="cname" value={info.cname}
                    onChange={(e)=>{dispatch({type:'update',fld:'cname',val:e.target.value})}}/><br/></td>
                </tr>
                <tr>
                    <td><label  htmlFor="pname">Your name:</label></td>
                    <td><input type="text" name="pname" className="form-control" id="pname" value={info.pname}
                    onChange={(e)=>{dispatch({type:'update',fld:'pname',val:e.target.value})}}/><br/></td>
                </tr>
                <tr>
                    <td><label  htmlFor="contact">Contact no:</label></td>
                    <td><input type="number" name="contact" className="form-control" id="contact" value={info.contact}
                    onChange={(e)=>{dispatch({type:'update',fld:'contact',val:e.target.value})}}/><br/></td>
                </tr>
                <tr>
                   <td><label  htmlFor="email">Email:</label></td> 
                    <td><input type="text" name="email" className="form-control" id="email" value={info.email}
                    onChange={(e)=>{dispatch({type:'update',fld:'email',val:e.target.value})}}/><br/></td>
                </tr>
                <tr>
                    <td><label  htmlFor="plan">Select Plan:</label></td>
                    <td>
                       {/* <input type="text"/>*/}
                       <select name="plan" className="form-select" id="plan"
                       onChange={(e)=>{dispatch({type:'update',fld:'plan',val:e.target.value})}}>
                            {
                                allPlan.map(pl => {
                                    return <option key={pl.id} value={pl.id}>name:{pl.name} duration:{pl.duration} price:{pl.price}</option>
                                })
                            }
                       </select>
                    </td>
                </tr>
                <tr>
                    <td>
                    <button type="button" class="btn btn-primary">Register</button>
                    </td>
                </tr>
                
            </table>
            <p>{JSON.stringify(info)}</p>
            <p>{Msg}</p>
        </div>
    )
}
export default Registration;