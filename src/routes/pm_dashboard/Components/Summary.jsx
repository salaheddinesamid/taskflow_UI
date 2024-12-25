import React from "react";
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import UpdateIcon from '@mui/icons-material/Update';
import CreateIcon from '@mui/icons-material/Create';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Box, Typography } from '@mui/material';
import { PieChart, Pie, Cell } from 'recharts';

export function Summary({project}) {
    function Completed() {
        return (
            <Box className="summary-item" sx={{ display: "flex", alignItems: "center" }}>
                <AssignmentTurnedInIcon sx={{ marginRight: 1, color: "#4CAF50" }} />
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>0 Completed</Typography>
            </Box>
        );
    }

    function Updated() {
        return (
            <Box className="summary-item" sx={{ display: "flex", alignItems: "center" }}>
                <UpdateIcon sx={{ marginRight: 1, color: "#FF9800" }} />
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>0 Updated</Typography>
            </Box>
        );
    }

    function Created() {
        return (
            <Box className="summary-item" sx={{ display: "flex", alignItems: "center" }}>
                <CreateIcon sx={{ marginRight: 1, color: "#2196F3" }} />
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>0 Created</Typography>
            </Box>
        );
    }

    function Due() {
        return (
            <Box className="summary-item" sx={{ display: "flex", alignItems: "center" }}>
                <CalendarTodayIcon sx={{ marginRight: 1, color: "#F44336" }} />
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>0 Due</Typography>
            </Box>
        );
    }

      function StatusOverView() {
        const data = [
            { value: 30, label: 'Category A' },
            { value: 40, label: 'Category B' },
            { value: 20, label: 'Category C' },
            { value: 10, label: 'Category D' },
        ];
    
        return (
            <div className="row d-inline" style={{ height: 300 }}>
                <div className="col">
                    <h3>Status overview</h3>
                </div>
                <div className="col">
                    <p>Get a snapshot of the status of your issues</p>
                </div>
                <div className="row" style={{ width: '100%' }}>
                    <PieChart width={400} height={200}>
                        <Pie
                            data={data}
                            dataKey="value"
                            cx="50%"
                            cy="50%"
                            innerRadius={30}
                            outerRadius={100}
                            paddingAngle={5}
                            cornerRadius={5}
                            startAngle={-45}
                            endAngle={225}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={['#ff0000', '#00ff00', '#0000ff', '#ff9900'][index]} />
                            ))}
                        </Pie>
                    </PieChart>
                </div>
            </div>
        );
    }
    
    function RecentActivity(){
        const activities = [
                {
                  "id": 1,
                  "timestamp": "2024-12-10T09:30:00Z",
                  "event": "Project Created",
                  "details": {
                    "projectId": 101,
                    "projectName": "Task Management System",
                    "createdBy": "John Doe",
                    "teamId": 3
                  }
                },
                {
                  "id": 2,
                  "timestamp": "2024-12-11T14:15:00Z",
                  "event": "Task Added",
                  "details": {
                    "taskId": 201,
                    "taskName": "Design Database Schema",
                    "status": "To Do",
                    "assignee": "Alice Smith",
                    "priority": "High"
                  }
                },
                {
                  "id": 3,
                  "timestamp": "2024-12-12T11:45:00Z",
                  "event": "Task Updated",
                  "details": {
                    "taskId": 201,
                    "previousStatus": "To Do",
                    "newStatus": "In Progress",
                    "updatedBy": "Alice Smith"
                  }
                },
                {
                  "id": 4,
                  "timestamp": "2024-12-13T16:00:00Z",
                  "event": "Task Completed",
                  "details": {
                    "taskId": 201,
                    "taskName": "Design Database Schema",
                    "completedBy": "Alice Smith",
                    "completionTime": "2024-12-13T15:55:00Z"
                  }
                },
                {
                  "id": 5,
                  "timestamp": "2024-12-14T10:20:00Z",
                  "event": "Sprint Created",
                  "details": {
                    "sprintId": 501,
                    "sprintName": "Sprint 1",
                    "startDate": "2024-12-15",
                    "endDate": "2024-12-22",
                    "createdBy": "John Doe"
                  }
                },
                {
                  "id": 6,
                  "timestamp": "2024-12-15T08:00:00Z",
                  "event": "Task Moved to Sprint",
                  "details": {
                    "taskId": 202,
                    "taskName": "Implement Authentication",
                    "sprintId": 501,
                    "sprintName": "Sprint 1"
                  }
                },
                {
                  "id": 7,
                  "timestamp": "2024-12-16T13:30:00Z",
                  "event": "Project Status Updated",
                  "details": {
                    "projectId": 101,
                    "previousStatus": "Not Started",
                    "newStatus": "In Progress",
                    "updatedBy": "John Doe"
                  }
                },
                {
                  "id": 8,
                  "timestamp": "2024-12-18T17:00:00Z",
                  "event": "Bug Reported",
                  "details": {
                    "bugId": 301,
                    "description": "Login page crashes on invalid credentials",
                    "reportedBy": "Tester 1",
                    "severity": "Critical",
                    "status": "Open"
                  }
                }
        ]
        return(
            <div className="row d-inline">
                <div className="col">
                    <h4>Recent activity</h4>
                </div>
                <div className="col">
                    <p>Stay up to date with what's happening across the project.</p>
                </div>
                <div className="col" style={{
                    overflow : "scroll",
                    height : 100
                }}>
                    {
                        activities.map((activity)=>(
                            <div className="row">
                                <p><b>{activity.timestamp}</b></p>
                                <p>{activity.event}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
    function PriorityBreakDown(){
        return(
            <div className="row d-inline">
                <div className="col">
                    <h4>Priority breakdown</h4>
                </div>
                <div className="col">
                    <p>Get a holistic view of how work is being prioritized. <a href="#">See what your team's been focusing on</a> </p>
                </div>
                <div className="col">
                   
                </div>
            </div>
        )
    }

    return (
        <div className="row">
            <h2>{project.projectName}</h2>
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                    gap: 2,
                    justifyContent: "center",
                    padding: 2,
                    margin: "20px auto",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 3,
                        borderRadius: 2,
                        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                        cursor: "pointer",
                        backgroundColor: "linear-gradient(135deg, #4CAF50 0%, #81C784 100%)",
                        transition: "transform 0.3s, background-color 0.3s",
                        '&:hover': {
                            transform: "scale(1.05)",
                            backgroundColor: "#388E3C",
                        },
                        width: "280px",
                    }}
                >
                    <Completed />
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 3,
                        borderRadius: 2,
                        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                        cursor: "pointer",
                        backgroundColor: "linear-gradient(135deg, #FF9800 0%, #FFB74D 100%)",
                        transition: "transform 0.3s, background-color 0.3s",
                        '&:hover': {
                            transform: "scale(1.05)",
                            backgroundColor: "#F57C00",
                        },
                        width: "280px",
                    }}
                >
                    <Updated />
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 3,
                        borderRadius: 2,
                        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                        cursor: "pointer",
                        backgroundColor: "linear-gradient(135deg, #2196F3 0%, #64B5F6 100%)",
                        transition: "transform 0.3s, background-color 0.3s",
                        '&:hover': {
                            transform: "scale(1.05)",
                            backgroundColor: "#1976D2",
                        },
                        width: "280px",
                    }}
                >
                    <Created />
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 3,
                        borderRadius: 2,
                        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                        cursor: "pointer",
                        backgroundColor: "linear-gradient(135deg, #F44336 0%, #FF8A80 100%)",
                        transition: "transform 0.3s, background-color 0.3s",
                        '&:hover': {
                            transform: "scale(1.05)",
                            backgroundColor: "#D32F2F",
                        },
                        width: "280px",
                    }}
                >
                    <Due />
                </Box>
            </Box>

            <div className="row">
                <div className="col-xl-6" style={{
                    borderRadius: 2,
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                    cursor: "pointer",
                    height: 300,
                }}>
                    <StatusOverView />
                </div>
                <div className="col" style={{
                    borderRadius: 2,
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                    cursor: "pointer",
                    height: 300,
                    marginLeft : 10
                }}>
                    <RecentActivity />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-xl-6" style={{
                    borderRadius: 2,
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                    cursor: "pointer",
                    height: 300,
                }}>
                    <PriorityBreakDown />
                </div>
                <div className="col" style={{
                    borderRadius: 2,
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                    cursor: "pointer",
                    height: 300,
                    marginLeft : 10
                }}>
                    <RecentActivity />
                </div>
            </div>
        </div>
    );
}
