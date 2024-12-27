import { Add } from "@mui/icons-material";
import { Fab } from "@mui/material";
import React, { useEffect, useState } from "react";

export function Meeting(){
    const [meetingHistory,setMeetingHistory] = useState([]);
    useEffect(()=>{

    })
    return(
        <div className="row">
            <div className="row d-flex">
                <div className="col">
                     <h2>Meeting History</h2>
                </div>
                 <div className="col">
                 <Fab size="medium" color="primary" aria-label="add">
                   <Add/>
                  </Fab>
                 </div>
            </div>
            {meetingHistory && meetingHistory.length !==0 ? <></> : <div className="row mt-4">
                <h2>No data available</h2>
                </div>}
        </div>
    )
}