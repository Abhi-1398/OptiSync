import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgetpassComp(){

    const init = {
        username:{value:"",hasError:true,error:"",touched:false},
        managername:{value:"",hasError:true,error:"",touched:false}
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

    const handleChange=(name,value) => {
        
        const {hasError, error} = validateData(name, value)
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

        dispatch({type: 'update', data: {name,value,hasError, error,touched: true,isFormValid} })
    }

    const validateData = (name,value) => {
        let hasError = false;
        let error = "";
        switch(name){
            case 'default':
                
            break;
            case 'username':
                var exp = /\.[a-z]{2,8}$/
                if(!exp.test(value))
                {
                    hasError = true;
                    error = "input have specific format";
                }
                break; 
            case 'managername':
                var exp1 = /\.[a-z]{2,8}$/
                if(!exp1.test(value))
                {
                    hasError = true;
                    error = "input have specific format";
                }
                break;
               

        }
        return {hasError,error}

    }

    const sendData = (e) => {
        e.preventDefault();
        const reqOption = {
            method:'PUT',
            headers:{'content-type':'application/json'},
            body: JSON.stringify({
                username:info.username.value,
                mname:info.managername.value,
            })
           
        }
        fetch("http://localhost:8080/forgetreq",reqOption)
        .then(resp => {if(resp.ok)
            return resp.text();
        else
            throw new Error("server error");
    
        })
    .then(text => text.length ? JSON.parse(text): {})
    .then(text => {
        if(text.length===0)
        {
            setMsg("Please enter correct data");
        }
        else
        {
            
            setMsg("Request have been send")
        }
    })
    .catch((Error)=>setMsg("Please enter correct data"))
    }
   

    const navigate = useNavigate();
    const navigateToLogin = ()=>{
        navigate('/Login');
    }

    return(
       
          <div>
             <h1>IN FORGET COMPONENT</h1>
             <div className="container login-form">
                <form className="align-middle  mx-auto col-10 col-md-8 col-lg-6">
                   <table>
                    <tr>
                        <td><label htmlFor="username" className="form-label">Enter User name:</label></td>
                        <td><input type="text" id="username" name="username" required value={info.username.value}
                        onChange={(e)=>{handleChange("username",e.target.value)}}/></td>
                        <div style={{ display: info.username.touched && info.username.hasError?"block":"none" }}>
                            {info.username.error}</div>
                    </tr>
                    <tr>
                            <td><label htmlFor="managername">Enter Manager UserName:</label></td>
                            <td><input type="text" id="managername" name="managername" required value={info.managername.value}
                            onChange={(e)=>{handleChange("managername",e.target.value)}}/></td>
                            <div style={{ display: info.managername.touched && info.managername.hasError?"block":"none" }}>
                            {info.managername.error}
                        </div>
                    </tr>
                    <tr>
                        <td></td>

                           <td> <button type="submit" class="btn btn-primary" onClick={(e)=>{sendData(e)}}>Submit</button>                   
                            </td> 
                    </tr>
                    <tr>
                        <td></td>
                        <td><button type="button" className="btn btn-primary" onClick={navigateToLogin}>Back to Login Page</button></td>
                    </tr>
                    </table>
                </form>
            </div> 
            <p>{JSON.stringify(info)}</p>
            <p>{msg}</p>

        </div>  
    );

}