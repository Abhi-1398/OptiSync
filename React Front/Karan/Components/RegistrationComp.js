import React, { reducer, useEffect, useReducer , useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegistrationComp(){

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
        <div className="login template d-flex justify-content-center allign-items-center 100-w 100-vh bg-primary">
            <div className="w-100 p-3" style={{ backgroundColor: "#eee" }}>
            
            <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-6">
            
            <span class="border">
        
             <form >
                <h3> Registration </h3>
                <div className="mb-2">
                    <div class="form-row">
           
                    <label  htmlFor="cname">Company name:</label>
                    <input type="text" name="company" className="form-control" id="cname" value={info.cname}
                    onChange={(e)=>{dispatch({type:'update',fld:'cname',val:e.target.value})}}/>
                </div>
                <div className="mb-2 ">
                <label  htmlFor="pname">Your name:</label>
                    <input type="text" name="pname" className="form-control" id="pname" value={info.pname}
                    onChange={(e)=>{dispatch({type:'update',fld:'pname',val:e.target.value})}}/>

                </div>
                <div className="mb-2 ">
                <label  htmlFor="contact">Contact no:</label>
                    <input type="text" name="contact" className="form-control" id="contact" value={info.contact}
                    onChange={(e)=>{dispatch({type:'update',fld:'contact',val:e.target.value})}}/>

                </div>
                <div className="mb-2 ">
                <label  htmlFor="email">Email:</label>
                    <input type="text" name="email" className="form-control" id="email" value={info.email}
                    onChange={(e)=>{dispatch({type:'update',fld:'email',val:e.target.value})}}/>

                </div>
                <div>
                <label  htmlFor="plan">Select Plan:</label>
                <select name="plan" className="form-select" id="plan"
                       onChange={(e)=>{dispatch({type:'update',fld:'plan',val:e.target.value})}}>
                            {
                                allPlan.map(pl => {
                                    return <option key={pl.id} value={pl.id}>name:{pl.name} duration:{pl.duration} price:{pl.price}</option>
                                })
                            }
                       </select>
                </div>

                 
                <div className="mb-2">
                    <input type='checkbox' className="custom-control custom-checkbox" id="check"></input>
                    <label htmlFor="check" className="custom-input-lable">
                        Agree
                    </label>
                </div>

                <button type="submit" class="btn btn-primary btn-sm" >Submit</button> 
                

                <button type="reset" class="btn btn-primary btn-sm" >Clear</button> 



                </div>
    </form>
    </span>
    <p>{JSON.stringify(info)}</p>
            <p>{Msg}</p>
    </div>
    </div>
    </div>

             
                
                
                
                </div>

            
            
        </div>
    )
}