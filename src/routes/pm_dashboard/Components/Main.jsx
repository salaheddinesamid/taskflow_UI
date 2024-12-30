import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, List, ListItem, ListItemText, ListItemIcon, Box, Divider } from "@mui/material";
import { Home, Task, People, BarChart, MeetingRoom } from "@mui/icons-material";
import Header from "./Header";
import { TaskBoard } from "./TaskBoard";
import { Summary } from "./Summary";
import { Meeting } from "./Meeting";
import { NewProjectDialog } from "./NewProjectDialog";

const Main = ({ project }) => {
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState(1);
  const [openDialog,setOpenDialog] = useState(false);
  const items = [
    { id: 1, name: "Summary", icon: <Home />, view: <Summary project={project} /> },
    { id: 2, name: "Tasks", icon: <Task />, view: <TaskBoard /> },
    { id: 3, name: "Teams", icon: <People />, view: <div>Teams view</div> },
    { id: 4, name: "Statistics", icon: <BarChart />, view: <div>Statistics view</div> },
    { id: 5, name: "Meetings", icon: <MeetingRoom />, view: <Meeting /> },
  ];

  const handleLogout = () => {
    localStorage.removeItem("project");
    navigate("/manager_dashboard");
  };

  const SideBar = () => (
    <Box
      sx={{
        width: "250px",
        padding: 2,
        height: "100vh",
        bgcolor: "background.paper",
        boxShadow: 2,
      }}
    >
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mb: 2 }}
        onClick={()=>{setOpenDialog(true)}}
      >
        + Add Project
      </Button>
      <Divider sx={{ mb: 2 }} />
      <List>
        {items.map((item) => (
          <ListItem
            button
            key={item.id}
            onClick={() => setCurrentView(item.id)}
            selected={item.id === currentView}
            sx={{
              borderRadius: 1,
              "&.Mui-selected": {
                bgcolor: "primary.light",
                color: "primary.contrastText",
              },
              "&:hover": {
                bgcolor: "primary.main",
                color: "white",
              },
            }}
          >
            <ListItemIcon sx={{ color: item.id === currentView ? "primary.contrastText" : "text.secondary" }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
      <Divider sx={{ mt: 2 }} />
      <Button
        variant="outlined"
        color="error"
        fullWidth
        onClick={handleLogout}
        sx={{ mt: 2 }}
      >
        Back to Dashboard
      </Button>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", fontSize: "14px" }}>
      <SideBar />
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Header />
        <Box sx={{ flex: 1, p: 2 }}>
          {items.map(
            (item) =>
              item.id === currentView && (
                <React.Fragment key={item.id}>{item.view}</React.Fragment>
              )
          )}
        </Box>
      </Box>
      <NewProjectDialog open={openDialog}/>
    </Box>
  );
};

export default Main;
