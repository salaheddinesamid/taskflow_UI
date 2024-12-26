import React from "react";
import Header from "../pm_dashboard/Components/Header";
import { Main } from "./Main";

export function UserDashboard(){
    return(
        <div className="row">
            <Header/>
            <Main/>
        </div>
    )
}