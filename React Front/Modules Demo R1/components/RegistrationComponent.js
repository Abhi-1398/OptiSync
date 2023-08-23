import React from "react";
function Registration(){
    return(
        <div>
            
            <table className="align-middle  mx-auto col-10 col-md-8 col-lg-6">
                <tr colspan="2"><h1>Company Registration</h1></tr>
                <tr>
                    <td>Company name:</td>
                    <td><input type="text" name="Company"/><br/></td>
                </tr>
                <tr>
                    <td>your name:</td>
                    <td><input type="text" name="Pname"/><br/></td>
                </tr>
                <tr>
                    <td>Contact no.:</td>
                    <td><input type="number" name="Contact"/><br/></td>
                </tr>
                <tr>
                   <td>Email:</td> 
                    <td><input type="text" name="email"/><br/></td>
                </tr>
                <tr>
                    <td>select Plan:</td>
                    <td><input type="text"/></td>
                </tr>
                <tr>
                    <td>
                    <button type="button" class="btn btn-primary">Register</button>
                    </td>
                </tr>
                
            </table>
            
        </div>
    )
}
export default Registration;