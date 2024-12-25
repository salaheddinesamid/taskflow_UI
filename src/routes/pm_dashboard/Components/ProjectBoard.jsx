import React from "react";
import Header from "./Header"; // Header component
import {
  Card,
  CardContent,
  Typography,
  LinearProgress,
  Chip,
  Fab,
} from "@mui/material"; // Material-UI components
import { useNavigate } from "react-router-dom"; // For navigation
import { Add, Delete } from "@mui/icons-material"; // Material-UI icons 
// Main component for the project dashboard
export function ProjectDashboard() {
  const navigate = useNavigate(); // Hook for navigating between routes
  const projects = [
    // Initial state containing project details
    {
      projectID: 1,
      projectName: "Website Redesign",
      status: "In Progress",
      createdAt: "2024-12-19T10:00:00Z",
      createdBy: 101,
      sprintsIds: [1, 2, 3],
      tasks: [
        { taskID: 1001, taskName: "Design Wireframe" },
        { taskID: 1002, taskName: "Develop Frontend" },
        { taskID: 1003, taskName: "Integrate Backend" },
      ],
      team: { teamID: 10, teamName: "Frontend Team" },
      progress: 75,
    },
    {
      projectID: 2,
      projectName: "Mobile App Launch",
      status: "Completed",
      createdAt: "2024-12-10T14:30:00Z",
      createdBy: 102,
      sprintsIds: [4, 5, 6],
      tasks: [
        { taskID: 1004, taskName: "Setup CI/CD Pipeline" },
        { taskID: 1005, taskName: "Launch Campaign" },
      ],
      team: { teamID: 12, teamName: "Marketing Team" },
      progress: 100,
    },
    {
      projectID: 3,
      projectName: "Database Migration",
      status: "Pending",
      createdAt: "2024-12-15T08:45:00Z",
      createdBy: 103,
      sprintsIds: [7, 8],
      tasks: [
        { taskID: 1006, taskName: "Analyze Current Schema" },
        { taskID: 1007, taskName: "Plan Migration Strategy" },
        { taskID: 1008, taskName: "Execute Migration" },
      ],
      team: { teamID: 15, teamName: "Database Team" },
      progress: 50,
    },
    {
      projectID: 4,
      projectName: "Internal Tool Development",
      status: "In Progress",
      createdAt: "2024-12-18T11:20:00Z",
      createdBy: 104,
      sprintsIds: [9, 10],
      tasks: [
        { taskID: 1009, taskName: "Build API" },
        { taskID: 1010, taskName: "Create User Interface" },
      ],
      team: { teamID: 8, teamName: "Tools Development Team" },
      progress: 60,
    },
  ]

  // Component to display the list of recent projects
  function RecentProjects({ projects }) {
    const statusColors = {
      "In Progress": "#f59e0b", // Orange
      Completed: "#4ade80", // Green
      Pending: "#dc2626", // Red
    };

    return (
      <div className="row d-inline-flex" style={{ gap: "15px" }}>
        {projects.map((project) => (
          <Card
            key={project.projectID} // Unique key for each project
            style={{
              backgroundColor: "#f9fafb",
              borderRadius: "8px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              flex: "1 1 calc(33% - 15px)",
              maxWidth: "350px",
              cursor: "pointer",
            }}
            onClick={() => {
              // Store project data in localStorage and navigate to project details
              localStorage.setItem("project", JSON.stringify(project));
              navigate(`project/${project.projectID}`);
            }}
          >
            <CardContent>
              <Typography
                variant="subtitle1"
                style={{ fontWeight: "bold", marginBottom: "10px" }}
              >
                {project.projectName}
              </Typography>
              <LinearProgress
                variant="determinate"
                value={project.progress}
                style={{
                  marginBottom: "10px",
                  height: "8px",
                  borderRadius: "4px",
                }}
              />
              <Typography
                variant="body2"
                style={{ color: "#555", fontWeight: "bold" }}
              >
                {project.progress}% Progress
              </Typography>
              <Typography
                variant="body2"
                style={{
                  color: "#888",
                  marginTop: "10px",
                  display: "flex",
                  alignItems: "center",
                }}
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
              <Typography
                style={{
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <Fab size="medium" color="error" aria-label="delete">
                  <Delete />
                </Fab>
              </Typography>
            </CardContent>
          </Card>
        ))}
        {/* Button to add a new project */}
        <div className="col d-flex align-items-center">
          <Fab size="medium" color="primary" aria-label="add">
            <Add />
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
