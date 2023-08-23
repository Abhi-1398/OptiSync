import React from "react"; 
import Registration from "./RegistrationComponent";
import { useNavigate } from "react-router-dom";



function LoginComponent(){
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
                        <td><label for="username">Username:</label></td>
                        <td><input type="text" id="username" name="username" required/></td>
                    </tr>
                    <tr>
                            <td><label for="password">Password:</label></td>
                            <td><input type="password" id="password" name="password" required/></td>
                    </tr>
                    <tr>
                        <td></td>

                           <td> <button type="submit" class="btn btn-primary">Login</button>                   
                             <button type="button" class="btn btn-primary">Forget Password</button><br/></td> 
                    </tr>
                    <tr>
                        <td></td>
                        <td><button type="button" className="btn btn-primary" onClick={navigateToRegistration}>Company Registration</button></td>
                    </tr>
                    </table>
                </form>
            </div>
        </div> 
    )

}

export default LoginComponent;