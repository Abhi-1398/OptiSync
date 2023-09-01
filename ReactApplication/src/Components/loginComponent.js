import React, { useReducer, useState } from "react"; 
import Regitrastion from "./RegistrationComponent";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "./slice";
import { current } from "@reduxjs/toolkit";
import ForgetpassComp from "./ForgetpassComp";



function LoginComponent(){
    
    
    const forget=()=>{
            navigate("/forgetpass")

    }

    const init = {
        username:{value:"",hasError:true,error:"",touched:false},
        password:{value:"",hasError:true,error:"",touched:false}
    }

   

    
    const reducer = (state,action)=>{
        switch(action.type)
        {
            case 'update':
                const {name,value,hasError, error, touched, isFormValid} = action.data;
                return {...state,[name]: {value, hasError, error, touched}, isFormValid};
        }
    }

    const [info,dispatch] = useReducer(reducer,init);   
    const [msg,setMsg]= useState("");
    const reduxDispatch = useDispatch();



    const handleChange=(name,value) => {
        //a. call validation logic
        const {hasError, error} = validateData(name, value)

        //b. check form validity status
        let isFormValid = true;
        for(const key in info)
        {
            console.log(key+" : "+info[key].hasError )
            if(info[key].hasError === true)
            {
                isFormValid = false;
                break;
            }
        }         

        //c. call dispath method
        dispatch({type: 'update', data: {name,value,hasError, error,touched: true,isFormValid} })
    }

    const validateData = (name,value) => {
        let hasError = false;
        let error = "";
        switch(name){
            case 'username':
                var exp = /^[A-Z]{1}[a-z]{0,9}\.[a-z]{0,9}$/
                if(! exp.test(value))
                {
                    hasError = true;
                    error = "Please check provided username "
                }
                break;
            case 'password':
                var exp1 = /^[A-Z]{1}[a-z]{0,9}\@[a-z]{0,9}$/
                if(! exp1.test(value))
                {
                    hasError = true;
                    error = "Please check provided password";
                }
                break;

        }
        return {hasError,error}

    }
      
    const sendData = (e) => {
        const reqOptions = {
            method:'POST',
            headers:{'content-type':'application/json'},
            body: JSON.stringify( {
                username: info.username.value,
                password: info.password.value
                
            } )
        }
        
        e.preventDefault();
        fetch("http://localhost:8080/checkLogin",reqOptions)
        .then(resp => {if(resp.ok)
                       return resp.text();
                        else
                        throw new Error("server Error"); 
                         //console.log(resp)
                            })
        .then(text => text.length ? JSON.parse(text) : {})
        .then(obj => {
                        if(Object.keys(obj).length === 0)
                        {
                            setMsg("Wrong LOGINID/PASSWORD");
                        }
                        else
                        {
                            console.log(JSON.stringify(obj))
                            reduxDispatch(login());
                            localStorage.setItem("loggedUser",JSON.stringify(obj));
                             
                                if(obj.roles.role_id === 1  )
                                {
                                    navigate("/Admin");
                                }
                                else if(obj.roles.role_id === 2 )
                                {
                                    navigate("/Manager");
                                }
                                else if(obj.roles.role_id === 3 )
                                {
                                    navigate("/Store");
                                }
                                else if(obj.roles.role_id === 4)
                                {
                                    navigate("/Production");
                                }
                                else if(obj.roles.role_id === 5)
                                {
                                    navigate("/Assembly");
                                    
                                }
                                else if(obj.roles.role_id === 6)
                                {
                                    navigate("/Dispatch");
                                }
                            
                        }
        })
        .catch((error) => alert("server error. Try after some time")) 
    }

    const navigate = useNavigate();
    const navigateToRegistration = ()=>{
        navigate('/Plan');
    }
    return(
        <div>
            <div className="container login-form">
                <form className="align-middle  mx-auto col-10 col-md-8 col-lg-6">
                   <table >
                    <tr>
                        <td><label htmlFor="username" className="form-label">LoginId:</label></td>
                        <td><input type="text" id="username" name="username" required value={info.username.value}
                        onChange={(e)=>{handleChange("username",e.target.value)}}/></td>
                        <td>
                        <div style={{ display: info.username.touched && info.username.hasError?"block":"none" }}>
                            {info.username.error}
                        </div>
                        </td>
                    </tr>
                    <tr>
                            <td><label htmlFor="password">Password:</label></td>
                            <td><input type="password" id="password" name="password" required value={info.password.value}
                            onChange={(e)=>{handleChange("password",e.target.value)}}/></td>
                            <td>
                            <div style={{ display: info.password.touched && info.password.hasError?"block":"none" }}>
                                {info.password.error}
                            </div>
                            </td>
                    </tr>
                    <tr>
                        <td></td>
                            
                           <td> <button type="submit" class="btn btn-primary" onClick={(e)=>{sendData(e)}}>Login</button>                   
                            {/*  <a href="/" onClick={forget}> Forget Password ?</a><br/> */}
                             <Link to="/forgetpass" className="nav-link px-3"> forget password? </Link>
                             <Routes>
                             <Route path="forgetpass" element={<ForgetpassComp/>}/>
                             </Routes>
                             </td> 
                    </tr>
                    <tr>
                        <td></td>
                        <td><button type="button" className="btn btn-primary" onClick={navigateToRegistration}>Registration</button></td>
                    </tr>
                    </table>
                
                </form>
              
            </div>
            
            <p>{msg}</p>
        </div> 
    )

}

export default LoginComponent;