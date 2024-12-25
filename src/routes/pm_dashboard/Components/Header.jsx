import React, { useState } from 'react';
import { Button, Avatar, Typography} from '@mui/material';
import logo from "/Users/salaheddine/Documents/taskflow/src/media/logo.png"
const Header = ({user}) => {
  const [open,setOpen] = useState(false);
  const handleOpen = ()=>{
    setOpen(!open)
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', background: '#fff' }}>
      <div>
        <Typography variant="subtitle1"><img src={logo} alt="" style={{width : 80}}/></Typography>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Button variant="outlined">Filter: Not Applied</Button>
        <Button variant="outlined">Sorting</Button>
        <Button variant="contained" color="primary">+ Add Task</Button>
        <Avatar>N</Avatar>
      </div>
    </div>
  );
};

export default Header;
