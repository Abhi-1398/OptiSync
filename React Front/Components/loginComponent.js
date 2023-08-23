import React, { useReducer, useState } from "react"; 
import Regitrstion from "./RegistrationComponent";
import { useNavigate } from "react-router-dom";



function LoginComponent(){

    const init = {
        uid:"",
        pwd:""
    }

    const reducer = (state,action)=>{
        switch(action.type)
        {
            case 'update':
                return {...state,[action.fld]:action.val}
        }
    }

    const [info,dispatch] = useReducer(reducer,init);
    const [msg,setMsg]= useState("");

    const sendData = (e) => {
        {/*e.preventDefault();*/}
        const reqOptions = {
            method:'POST',
            headers:{'content-type':'application/json'},
            body: JSON.stringify(info)
        }
        e.preventDefault();
        fetch("http://localhost:8080/checkLogin",reqOptions)
        .then(resp => {if(resp.ok)
                            return resp.text();
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
                            if(obj.status === false)
                            {
                                alert("Request has not been approved");
                                navigate('/');
                            }
                            else
                            {
                                if(obj.role_id.id === 1)
                                {
                                    navigate("/Admin");
                                }
                                else if(obj.role_id.id === 2)
                                {
                                    navigate("/Manager");
                                }
                                else if(obj.role_id.id === 3)
                                {
                                    navigate("/Store");
                                }
                                else if(obj.role_id.id === 4)
                                {
                                    navigate("/Production");
                                }
                                else if(obj.role_id.id === 5)
                                {
                                    navigate("/QualityAssembly");
                                    
                                }
                                else if(obj.role_id.id === 6)
                                {
                                    navigate("/Vendor");
                                }
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
                        <td><label htmlFor="uid" className="form-label">LoginId:</label></td>
                        <td><input type="text" id="uid" name="uid" required value={info.uid}
                        onChange={(e)=>{dispatch({type:'update',fld:'uid',val:e.target.value})}}/></td>
                    </tr>
                    <tr>
                            <td><label htmlFor="pwd">Password:</label></td>
                            <td><input type="password" id="pwd" name="pwd" required value={info.pwd}
                            onChange={(e)=>{dispatch({type:'update',fld:'pwd',val:e.target.value})}}/></td>
                    </tr>
                    <tr>
                        <td></td>

                           <td> <button type="submit" class="btn btn-primary" onClick={(e)=>{sendData(e)}}>Login</button>                   
                             <button type="button" class="btn btn-primary">Forget Password</button><br/></td> 
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