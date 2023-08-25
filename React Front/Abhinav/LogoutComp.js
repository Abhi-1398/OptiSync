import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "./slice";

export default function Logout(){

    const navigate=useNavigate();
    const dispatch=useDispatch()
    localStorage.clear();
    dispatch(logout())
    navigate("/Login")
}