import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Welcome(){
    const navigate = useNavigate();
    useEffect(()=>{
        const continueToDashboard = ()=>{
            navigate('/user_dashboard');
        }
        setInterval(continueToDashboard,4000);
    },[]);
    const [user,setUser] = useState(localStorage.getItem('user'));
    return(
        <div className="container">
            <h1>Welcome{ user.userID}</h1>
        </div>
    )
}