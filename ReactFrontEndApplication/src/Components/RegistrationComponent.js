import { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register(){

    
    const [allPlan,setallPlan] = useState([]);
    useEffect(() => {
        const item = JSON.parse(localStorage.getItem('items'));
        if (item) {
         setallPlan(item);
        }
      }, []); 
    

     


 
    const init={
        name:{value:"",hasError:true,error:"",touched:false},
        person_name:{value:"",hasError:true,error:"",touched:false},
        contact_no:{value:"",hasError:true,error:"",touched:false},
        email:{value:"",hasError:true,error:"",touched:false},
        payment_status:{value:false,hasError:true,error:"",touched:false},
        plan_id:{value:0,hasError:true,error:"",touched:false},
        registration_date: new Date().toJSON().slice(0, 10),
        mode_of_transaction:"online",
        isFormValid:false
    }
    
    const validateData = (name,value) => {
        let hasError = false;
        let error = "";
        switch(name){
            case 'default':
                
            break;
            /* case 'name':
                var exp = /^$/
                if(!exp.test(value))
                {
                    hasError = true;
                    error = "first letter should be positive and space between first name and last name";
                }
                break; */
            case 'person_name':
                var exp1 = /^[A-Z][a-z]{0,20}\s[A-Z][a-z]{0,20}$/
                if(!exp1.test(value))
                {
                    hasError = true;
                    error = "first letter should be positive and space between first name and last name";
                }
                break;
            case 'contact_no':
                var exp2 = /^[0-9]{10}$/
                if(!exp2.test(value))
                {
                    hasError = true;
                    error = "10 digit numbers Only";
                }
                break;
            case 'email':
                var exp3 = /^[a-z0-9]{5,20}\@[a-z]{2,6}\.[a-z]{2,5}$/
                if(!exp3.test(value))
                {
                     hasError = true;
                     error = "Formate :- example@gmail.com";
                }
                break;
               

        }
        return {hasError,error}

    }

    const handleChange=(name,value) => {
        //a. call validation logic
        //alert("in handle data")
        const {hasError, error} = validateData(name, value)
        //alert(hasError+":"+error)
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
        //alert(isFormValid)
        //c. call dispath method
        dispatch({type: 'update', data: {name,value,hasError, error,touched: true,isFormValid} })
    }


    const reducer=(state,action)=>{
        switch(action.type)
        {
            case 'update':
                const {name,value,hasError, error, touched, isFormValid} = action.data;
                return {...state,[name]: {value, hasError, error, touched}, isFormValid};
        
            case 'reset':
                return init ;
            case 'default':
                console.log("in default case");
        }
    }

    const[info,dispatch]=useReducer(reducer,init); 

    const navigate = useNavigate();
const navigatetopayment = ()=>{

}
localStorage.setItem('submit', JSON.stringify(info.email.value));
const[Msg,setMsg]=useState("");
const sendData = (e) => {
    e.preventDefault();
    const reqOption = {
        method:'POST',
        headers:{'content-type':'application/json'},
        body: JSON.stringify({
            name:info.name.value,
            person_name:info.person_name.value,
            contact_no:info.contact_no.value,
            email:info.email.value,
            payment_status:info.payment_status.value,
            plan_id:info.plan_id.value,
            registration_date:new Date().toJSON().slice(0, 10),
            mode_of_transaction:"online"
        })
    }
    fetch("http://localhost:8080/saveCompany",reqOption)
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
                        <input type="text" className="form-control" id="name" name="name" value={info.name.value}
                        onChange={(e)=>{handleChange("name",e.target.value)}}/>
                        <div style={{ display: info.name.touched && info.name.hasError?"block":"none" }}>
                            {info.name.error}
                        </div>
                     </div>
                     <div className="mb-3">
                        <label htmlFor="person_name" className="form-label">Enter Name:</label>
                        <input type="text" className="form-control" id="person_name" name="person_name" value={info.person_name.value}
                        onChange={(e)=>{handleChange("person_name",e.target.value)}}/>
                        <div style={{ display: info.person_name.touched && info.person_name.hasError?"block":"none" }}>
                            {info.person_name.error}
                        </div>
                     </div>
                     <div className="mb-3">
                        <label htmlFor="contact_no" className="form-label">Enter Contact Number:</label>
                        <input type="text" className="form-control" id="contact_no" name="contact_no" value={info.contact_no.value}
                        onChange={(e)=>{handleChange("contact_no",e.target.value)}}/>
                        <div style={{ display: info.contact_no.touched && info.contact_no.hasError?"block":"none" }}>
                            {info.contact_no.error}
                        </div>
                     </div>
                     <div className="mb-3">
                        <label htmlFor="email" className="form-label">Enter Email ID:</label>
                        <input type="text" className="form-control" id="email" name="email" value={info.email.value}
                        onChange={(e)=>{handleChange("email",e.target.value)}}/>
                        <div style={{ display: info.email.touched && info.email.hasError?"block":"none" }}>
                            {info.email.error}
                        </div>
                     </div>
                     <div>
                     <label  htmlFor="plan">Select Plan:</label>
                    
                    
                       <select name="plan_id" className="form-select" id="plan_id"
                       onChange={(e)=>{handleChange("plan_id",e.target.value)}} onClick={(e)=>{amount(e.target.value)}}>
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
                     <input type="checkbox" id="payment_status" name="payment_status" value={info.payment_status.value} 
                       onClick={(e)=>{handleChange("payment_status",e.target.checked)}} />Approved Payment
                     
                     
                     </div>
                
                     <button type="submit" className="btn btn-primary mb-3" onClick={sendData}>Submit</button>
                     <button type="reset" className="btn btn-primary mb-3" onClick={()=>{dispatch({type:'reset'})}}>Clear</button>
                    
                </form>
               
               <p>{Msg}</p>

            
           







        </div>

    );

}