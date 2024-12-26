import axios from "axios";
import React, { useEffect, useState } from "react";


export function MyTasks(){
    const [myTasks,setMyTasks] = useState([]);
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('user')));
    const userId = user.user?.userID;
    useEffect(()=>{
        const fetchTasks = async ()=>{
            try{
                let response = await axios.get(`http://localhost:8081/api/task/get_user_tasks/2`)
                if (response.status === 200){
                    setMyTasks(response.data)
                }
            }
            catch(err){
                console.log(err);
            }
            finally{
                console.log('Process completed.')
            }
        }
        fetchTasks();
    },[])
    return(
        <div className="row">
            {
                myTasks.map((myTask)=>(
                    <div className="row">
                        <p>{myTask.content}</p>
                    </div>
                ))
            }
        </div>
    )
}