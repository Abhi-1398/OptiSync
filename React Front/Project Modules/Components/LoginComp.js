import React, { reducer,useReducer, useState } from 'react';
import { json } from 'react-router-dom';



export default function LoginComp(){

    const init ={
        uid:"",
        pwd:""
    }

    const reducer =(state,action) => {

        switch(action.type)
        {
            case 'update':
                return {...state, [action.fld]:action.val}
            case 'reset' :
                return init;
        }
    }

    const [info,dispatch] = useReducer(reducer,init);

    const sendData = (e) =>
    {
        e.preventDefault();
        const reqOptions ={
            method :'Post',
            headers:{'content-type':'application/json'},
            body : JSON.stringify(info)
        }
        fetch("http://loaclhost:8080/chakLogin",reqOptions)
        .then(resp => console.log(resp))
    }
    return(
        <div className="login template d-flex justify-content-center allign-items-center 100-w 100-vh bg-primary">
            <div className="w-100 p-3" style={{ backgroundColor: "#eee" }}>
            
            <div class="container">
    <div class="row">
   
    
      <div class="col-md-6 offset-md-6">
            
            <span class="border">
        
             <form >
                
                <h3> Login </h3>
                <div className="mb-2">
                    <div class="form-row">
                
                
                    <label htmlFor="uid">Uid</label>
                    <input type="text" placeholder="Enter uid" className="form-control" id="uid" name="uid" 
                    value={info.uid} onChange={(e) =>{dispatch({type:'update',fld:'uid',val:e.target.value})}}/>
                    
                </div>
                <div className="mb-2 ">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="password" className="form-control" id='pwd' name='pwd'
                    value={info.pwd} onChange={(e) =>{dispatch({type:'update',fld:'pwd',val:e.target.value})}}/>

                </div>
                <div className="mb-2">
                    <input type='checkbox' className="custom-control custom-checkbox" id="check"></input>
                    <label htmlFor="check" className="custom-input-lable">
                        Remember me
                    </label>
                </div>

                <button type="submit" class="btn btn-primary btn-sm" onClick={(e) => {sendData(e)}}>Login</button> 
                <button type="reset" class="btn btn-primary btn-sm" onClick={() => {dispatch({type:'reset'})}}>Clear</button>



                </div>
                
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