import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import { Card, CardContent, Typography, LinearProgress, Chip, Fab } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Add, Delete } from "@mui/icons-material";
import { createTheme } from '@mui/material/styles';
import axios from "axios";
const theme = createTheme({
    palette: {
      secondary: {
        main: '#f44336',
      },
    },
  });
  
export function ProjectDashboard() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [user,setUser] = useState(JSON.parse(localStorage.getItem('user')))
  useEffect(()=>{
    const fetchProjects = async ()=>{
      try{
        const userId = user?.userID;
        console.log(userId)
        let response = await axios.get(`http://localhost:9001/api/project/get_project_by_creator/${userId}`)
        if (response){
          setProjects(response.data);
        }
      }catch(err){
        console.log(err)
      }
    }
    fetchProjects();
  },[])

  function RecentProjects({ projects }) {
    const statusColors = {
      "In Progress": "#f59e0b",
      "Completed": "#4ade80",
      "Pending": "#dc2626",
    };

    return (
      <div className="row d-inline-flex" style={{ gap: "15px" }}>
        {projects.map((project) => (
          <Card
            key={project.projectID}
            style={{
              backgroundColor: "#f9fafb",
              borderRadius: "8px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              flex: "1 1 calc(33% - 15px)",
              maxWidth: "350px",
              cursor : "pointer"
            }}
            onClick={()=>{
                localStorage.setItem("project",JSON.stringify(project))
                navigate(`project/${project.id}`)
            }}
          >
            <CardContent>
              <Typography variant="subtitle1" style={{ fontWeight: "bold", marginBottom: "10px" }}>
                {project.projectName}
              </Typography>
              <LinearProgress
                variant="determinate"
                value={project.progress}
                style={{ marginBottom: "10px", height: "8px", borderRadius: "4px" }}
              />
              <Typography variant="body2" style={{ color: "#555", fontWeight: "bold" }}>
                {project.progress}% Progress
              </Typography>
              <Typography
                variant="body2"
                style={{ color: "#888", marginTop: "10px", display: "flex", alignItems: "center" }}
              >
                Status:{" "}
                <Chip
                  label={project.status}
                  style={{
                    backgroundColor: statusColors[project.status] || "gray",
                    color: "white",
                    fontWeight: "bold",
                    marginLeft: "10px",
                  }}
                />
              </Typography>
              <Typography style={{
                display : "flex",
                justifyContent : "end"
              }}>
              <Fab size="medium" color="error"  aria-label="add">
    <Delete color="white" />
</Fab>
              </Typography>
            </CardContent>
          </Card>
        ))}
        <div className="col d-flex align-items-center">
            <Fab size="medium" color="primary" aria-label="add">
                <Add/>
            </Fab>
        </div>
      </div>
    );
  }

  return (
    <div
      className="row"
      style={{
        padding: "20px",
      }}
    >
      <Header />
      <div className="row d-inline">
        <div className="col">
          <h3>Your Work</h3>
          <hr />
        </div>
        <div className="row">
          <RecentProjects projects={projects} />
        </div>
      </div>
    </div>
  );
}
