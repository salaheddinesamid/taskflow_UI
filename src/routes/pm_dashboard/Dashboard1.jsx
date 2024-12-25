import React, { useEffect, useState } from "react";
import  Main  from "./Components/Main";

export function Dashboard({project}) {
    // Handle the case when no project is found
    useEffect(()=>{
        console.log("HELLO FROM DASHBOARD COMPONENT, PROJECT IS: ",{project})
    },[])
    return (
        <div className="row">
            {
                 <Main project={project} />
            }
        </div>
    );
}