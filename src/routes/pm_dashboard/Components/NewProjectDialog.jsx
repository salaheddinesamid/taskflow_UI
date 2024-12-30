import { Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export function NewProjectDialog(props){
    const [openDialog,setOpenDialog] = useState(props.open);
    const handleModalOpen = () => setOpenDialog(true);
    const handleModalClose = () => setOpenDialog(false);

    return(
        <Dialog open={openDialog} onClose={handleModalClose}>
            <DialogTitle>Create New Project</DialogTitle>
            <DialogContent>
                <Typography>
                    <input type="text" name="" id="" className="form-control"/>
                </Typography>
            </DialogContent>
        </Dialog>
    )
}