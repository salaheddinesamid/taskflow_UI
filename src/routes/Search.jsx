import axios from "axios";
import React, { useState } from "react";

export function Search(){
    const [email,setEmail] = useState("");

    const [user,setUser] = useState({});
    async function handleSearch(){
        try{
            let req = await axios.get(`http://localhost:8080/api/user/get_user_by_email/${email}`)
            .then((res)=>{
                setUser((res.data))
                console.log(res.data)
            })
        }catch(err){
            console.log(err)
        }
    }
    return(
        <div className="row">
            <div className="row">
                <input type="text" name="" id="" value={email} onChange={(e)=>{
                setEmail(e.target.value)
            }}/>
            </div>
            <div className="row">
                <button onClick={handleSearch}>Search </button>
            </div>
            <div className="row">
                <div className="col">
                    User:
                    <p>{user.firstName}</p>
                </div>
            </div>
        </div>
    )
}