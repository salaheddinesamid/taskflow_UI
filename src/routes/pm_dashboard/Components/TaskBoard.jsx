import React, { useState } from 'react';
import { Card, CardContent, Typography, AvatarGroup, Box, Button } from '@mui/material';

const KanbanColumn = ({ title, tasks }) => {
  return (
    <Box sx={{ flex: 1, margin: '0 10px', minWidth: '250px' }}>
      <Typography variant="h6" sx={{ marginBottom: '20px', fontWeight: 'bold', color: '#333' }}>
        {title}
      </Typography>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Card
            sx={{
              marginBottom: '16px',
              backgroundColor:
                task.status === "COMPLETED" ? "#a7f3d0" :
                task.status === "IN_PROGRESS" ? "#bae6fd" :
                "#fed7aa",
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
              '&:hover': { boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.15)', cursor: 'pointer' }
            }}
            key={task.taskId}
          >
            <CardContent>
              <Typography variant="subtitle1" sx={{ color: "gray" }}>
                Task:{" "}
                <span sx={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}>
                  {task.content}
                </span>
              </Typography>
              <Typography variant="body2" sx={{ color: 'gray' }}>
                Created on: {new Date(task.createdIn).toLocaleDateString()}
              </Typography>
              <Typography variant="body2" sx={{ color: 'gray', mt: 1 }}>
                Priority:{" "}
                <span
                  style={{
                    color: task.priority === "HIGH" ? "#dc2626" :
                           task.priority === "LOW" ? "#22c55e" :
                           "#f59e0b",
                    fontWeight: 'bold'
                  }}
                >
                  {task.priority}
                </span>
              </Typography>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#075985",
                    color: "#f0f9ff",
                    '&:hover': { backgroundColor: "#0e4c6d" }
                  }}
                >
                  Task Details
                </Button>
                <AvatarGroup max={4} sx={{ mt: 1 }} />
              </Box>
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography variant="body2" sx={{ color: 'gray', textAlign: 'center' }}>
          No tasks available
        </Typography>
      )}
    </Box>
  );
};

export function TaskBoard() {
  const [tasks, setTasks] = useState([
    {
      "taskId": 101,
      "projectId": 501,
      "status": "IN_PROGRESS",
      "content": "Implement user authentication",
      "priority": "HIGH",
      "createdIn": "2024-06-20T09:30:00Z",
      "createdByUserId": 1,
      "assignedToUserId": 2,
      "dependsOnTaskId": null
    },
    {
      "taskId": 102,
      "projectId": 501,
      "status": "PENDING",
      "content": "Design database schema",
      "priority": "MEDIUM",
      "createdIn": "2024-06-19T14:45:00Z",
      "createdByUserId": 2,
      "assignedToUserId": 3,
      "dependsOnTaskId": 101
    },
    {
      "taskId": 103,
      "projectId": 502,
      "status": "COMPLETED",
      "content": "Setup project repository",
      "priority": "LOW",
      "createdIn": "2024-06-18T11:20:00Z",
      "createdByUserId": 3,
      "assignedToUserId": 4,
      "dependsOnTaskId": null
    },
    {
      "taskId": 104,
      "projectId": 502,
      "status": "IN_PROGRESS",
      "content": "Develop API endpoints",
      "priority": "HIGH",
      "createdIn": "2024-06-21T10:15:00Z",
      "createdByUserId": 1,
      "assignedToUserId": 5,
      "dependsOnTaskId": 103
    },
    {
      "taskId": 105,
      "projectId": 503,
      "status": "PENDING",
      "content": "Write unit tests",
      "priority": "MEDIUM",
      "createdIn": "2024-06-22T16:00:00Z",
      "createdByUserId": 4,
      "assignedToUserId": 6,
      "dependsOnTaskId": 104
    }
  ]);
  const uniqueStatuses = [...new Set(tasks.map((task) => task.status))];

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '20px', flexWrap: 'wrap' }}>
      {uniqueStatuses.map((status) => (
        <KanbanColumn
          key={status}
          title={status}
          tasks={tasks.filter((task) => task.status === status)}
        />
      ))}
    </Box>
  );
}
