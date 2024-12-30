import React, { useState } from "react";
import { Button, Avatar, Typography, Menu, MenuItem, Box } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import logo from "/Users/salaheddine/Documents/taskflow/src/media/logo.png";

const Header = ({ user }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        bgcolor: "background.default",
        boxShadow: 1,
      }}
    >
      {/* Logo Section */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="TaskFlow Logo" style={{ width: 80 }} />
      </Box>

      {/* Action Buttons */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Button variant="outlined">Filter: Not Applied</Button>
        <Button variant="outlined">Sorting</Button>
        <Button variant="contained" color="primary">
          + Add Task
        </Button>

        {/* User Avatar */}
        <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={handleMenuOpen}>
          <Avatar sx={{ bgcolor: "primary.main" }}>
            {user?.name ? user.name[0] : "N"}
          </Avatar>
          <ArrowDropDown />
        </Box>

        {/* Dropdown Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          PaperProps={{
            sx: {
              mt: 1,
              boxShadow: 3,
              borderRadius: 1,
            },
          }}
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
          <MenuItem onClick={() => { 
              handleMenuClose(); 
              localStorage.removeItem("user");
              window.location.reload();
          }}>Logout</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default Header;
