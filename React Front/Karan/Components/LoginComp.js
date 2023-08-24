import React, { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from "./slice";




export default function LoginComp(){

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
                    error = "id should be 4-6 digits"
                }
                break;
            case 'password':
                var exp1 = /^[A-Z]{1}[a-z]{0,9}\@[a-z]{0,9}$/
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
        navigate('/plan');
    }
    return(
        <div className="login template d-flex justify-content-center allign-items-center 100-w 100-vh bg-primary">
            <div className="w-100 p-3" style={{ backgroundColor: "#eee" }}>
            
            <div class="container">
    <div class="row">
   
    
      <div class="col-md-6 offset-md-6">
            
            <span class="border">
        
    <form >
    <table>
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
                             <a href=""> Forget Password ?</a><br/></td> 
                    </tr>
                    <tr>
                        <td></td>
                        <td><button type="button" className="btn btn-primary" onClick={navigateToRegistration}>Registration</button></td>
                    </tr>
                    </table>
         
    </form>
    </span>   
           <p>{JSON.stringify(info)}</p>
    </div>
    
    </div>
    </div>

        



{/*


                
             <span>Email :  </span>
                <input type="text" name=""/> <br/>
                

                <span>password :  </span>
                <input type="password" name=""/> <br/>  
                
                <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                <label class="form-check-label" for="exampleCheck1">Check me out</label><br/>

                <button type="submit" class="btn btn-primary btn-sm" >Submit</button> 
                <button type="new User" class="btn btn-primary btn-sm" >New User</button>
                <a href="./RegistrationComp">New User</a>
            
          
    */}
    
             
             </div>

        </div>
    )
}