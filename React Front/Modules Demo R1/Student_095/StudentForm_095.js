import React, { useState } from "react";

let StudentForm_095=()=>{
    const [msg,setMsg]=useState("");
    const [bd,setBd]=useState(false);
    const [prn,setPrn]=useState(false);
    const [aadhar,setAadhar]=useState(false);
    const [showmsg,setShowmsg]=useState(false);

    let validBDate=(value)=>{
        var bd=new Date(value);
        var dt=new Date();
        var cyear=dt.getFullYear();
        var byear=bd.getFullYear();
        if((cyear-byear)<21 || (cyear-byear)>25)
        {
            return setMsg(<li>age should be in between 21 and 25</li>);
        }
        else 
            return setBd(true);
    }

    let validPRN=(value)=>{
        var prn_p=/^[0-9]{12}$/;
        if((!prn_p.test(value)))
        {
            return setMsg(<li>Length of PRN should be 12 digits</li>);
        }
        else 
            return setPrn(true);
    }

    let validAadhar=(value)=>{
        var aadhar_p=/^[0-9]{4}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{4}$/;
        if(!aadhar_p.test(value))
        {
            return setMsg(<li> Invalid Aadhar Data Entered</li>);
        }
        else 
            return setAadhar(true);
    }

    let validate=()=>{
        if(bd && prn && aadhar)
        {
            setMsg("Data submitted successfully");
        }
        return setShowmsg(true);
    }

    return(
        <div>
            <h1>Student Registration</h1>
            <form>
            Enter BirthDate :
                <input type="Date" name="BirthDate"  
                 onChange={(e)=>{validBDate(e.target.value)}} />
                <br/>
                Enter PRN :
                <input type="number" name="PRN "  
                 onChange={(e)=>{validPRN(e.target.value)}} />
                <br/>
                Enter Aaddhar Number. :
                <input type="text" name="aadhar"  
                 onChange={(e)=>{validAadhar(e.target.value)}} />
                <br/>
                <input type="button" value="Submit"
                onClick={()=>{validate()}} />
            </form>
            <ul style={{display:(showmsg?"block":"none")}}>{msg}</ul>
        </div>
    )
}

export default StudentForm_095;



