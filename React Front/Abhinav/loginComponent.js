import React, { useReducer, useState } from "react"; 
import Regitrastion from "./RegistrationComponent";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "./slice";
import { current } from "@reduxjs/toolkit";



function LoginComponent(){

    const init = {
        username:{value:"",hasError:true,error:"",touched:false},
        password:{value:"",hasError:true,error:"",touched:false},
        isFormValid:false
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
                var exp = /^[a-z0-9]*$/
                if(! exp.test(value))
                {
                    hasError = true;
                    error = "id should be of length max 10"
                }
                break;
            case 'password':
                var exp1 = /^[a-z0-9]*$/
                if(! exp1.test(value))
                {
                    hasError = true;
                    error = "Combination of alphabets and integer";
                }
                break;

        }
        return {hasError,error}

    }

    const sendData = (e) => {
        {/*e.preventDefault();*/}
        const reqOptions = {
            method:'POST',
            headers:{'content-type':'application/json'},
            body: JSON.stringify({
                username: info.username.value,
                password: info.password.value
        })
        }
        e.preventDefault();
        fetch("http://localhost:8080/checkLogin",reqOptions)
        .then(resp => {if(resp.ok)
                            {
                                return resp.text();
                            }
                        else
                            throw new Error("server error");
                        })
        .then(text => text.length ? JSON.parse(text) : {})
        .then(obj => {
                        if(Object.keys(obj).length === 0)
                        {
                            setMsg("Wrong LOGINID/PASSWORD");
                        }
                        else
                        {
                            
                            reduxDispatch(login());
                            localStorage.setItem("loggedUser",JSON.stringify(obj));
                            console.log(obj)
                                if(obj.role.role_id === 1  && obj.setup_status===true )
                                {
                                    navigate("/Manager");
                                }
                                else if(obj.role.role_id === 1 && obj.setup_status==false)
                                {
                                   
                                    navigate("/");
                                }
                                else if(obj.role.role_id === 2)
                                {
                                    navigate("/Admin");
                                }
                                else if(obj.role.role_id === 3)
                                {                                   
                                    navigate("/Store");
                                }
                                else if(obj.role.role_id === 4)
                                {
                                    navigate("/Production");
                                }
                                else if(obj.role.role_id === 5)
                                {
                                    navigate("/QualityAssembly");
                                    
                                }
                                else if(obj.role.role_id === 6)
                                {
                                    navigate("/Vendor");
                                }
                            
                        }
        })
        .catch((error) => alert("server error. Try after some time"))
    }

    const navigate = useNavigate();
    const navigateToRegistration = ()=>{
        navigate('/Registration');
    }
    return(
        <div>
            <div className="container login-form">
                <form className="align-middle  mx-auto col-10 col-md-8 col-lg-6">
                   <table>
                    <tr>
                        <td><label htmlFor="username" className="form-label">UserName:</label></td>
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
                             <a href=""> Forget Password ?</a><br/></td> 
                    </tr>
                    <tr>
                        <td></td>
                        <td><button type="button" className="btn btn-primary" onClick={navigateToRegistration}>Registration</button></td>
                    </tr>
                    </table>
                </form>
            </div>
            <p>{JSON.stringify(info)}</p>
            <p>{msg}</p>
        </div> 
    )

}

export default LoginComponent;