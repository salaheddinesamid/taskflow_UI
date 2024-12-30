import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  AvatarGroup,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Grid,
  Paper,
} from '@mui/material';
import { DragIndicator } from '@mui/icons-material';

const KanbanColumn = ({ title, tasks }) => {
  return (
    <Box
      sx={{
        flex: 1,
        margin: '0 15px',
        minWidth: '250px',
        backgroundColor: '#f4f6f8',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: '20px', fontWeight: 'bold', color: '#333' }}>
        {title}
      </Typography>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskCard key={task.taskId} task={task} />
        ))
      ) : (
        <Typography variant="body2" sx={{ color: 'gray', textAlign: 'center' }}>
          No tasks available
        </Typography>
      )}
    </Box>
  );
};

const TaskCard = ({ task }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleModalOpen = () => setOpenModal(true);
  const handleModalClose = () => setOpenModal(false);

  const getStatusColor = (status) => {
    switch (status) {
      case 'COMPLETED':
        return '#A7F3D0'; // light green
      case 'IN_PROGRESS':
        return '#BAE6FD'; // light blue
      case 'PENDING':
        return '#FED7AA'; // light orange
      default:
        return '#F0F0F0'; // default
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'HIGH':
        return '#DC2626'; // red
      case 'MEDIUM':
        return '#F59E0B'; // orange
      case 'LOW':
        return '#22C55E'; // green
      default:
        return '#333'; // default gray
    }
  };

  return (
    <Card
      sx={{
        marginBottom: '20px',
        backgroundColor: getStatusColor(task.status),
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        '&:hover': { boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.15)', cursor: 'pointer' },
        borderRadius: '10px',
        transition: 'transform 0.2s ease-in-out',
        '&:hover': { transform: 'scale(1.02)' },
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="subtitle1" sx={{ color: 'gray', flex: 1 }}>
            Task:{' '}
            <span style={{ fontWeight: 'bold', fontSize: '18px' }}>
              {task.content}
            </span>
          </Typography>
          <DragIndicator sx={{ color: '#888' }} />
        </Box>
        <Typography variant="body2" sx={{ color: 'gray' }}>
          Created on: {new Date(task.createdIn).toLocaleDateString()}
        </Typography>
        <Typography variant="body2" sx={{ color: 'gray', mt: 1 }}>
          Priority:{' '}
          <span
            style={{
              color: getPriorityColor(task.priority),
              fontWeight: 'bold',
            }}
          >
            {task.priority}
          </span>
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#075985',
              color: '#f0f9ff',
              '&:hover': { backgroundColor: '#0e4c6d' },
            }}
            onClick={handleModalOpen}
          >
            Task Details
          </Button>
          <AvatarGroup max={4} sx={{ mt: 1 }} />
        </Box>
      </CardContent>

      <Dialog open={openModal} onClose={handleModalClose}>
        <DialogTitle>Task Details</DialogTitle>
        <DialogContent>
          <Typography variant="body1" sx={{ marginBottom: '10px' }}>
            <strong>Task:</strong> {task.content}
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: '10px' }}>
            <strong>Created on:</strong> {new Date(task.createdIn).toLocaleDateString()}
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: '10px' }}>
            <strong>Priority:</strong> {task.priority}
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: '10px' }}>
            <strong>Status:</strong> {task.status}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModalClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

export function TaskBoard() {
  const [tasks, setTasks] = useState([
    {
      taskId: 101,
      projectId: 501,
      status: 'IN_PROGRESS',
      content: 'Implement user authentication',
      priority: 'HIGH',
      createdIn: '2024-06-20T09:30:00Z',
      createdByUserId: 1,
      assignedToUserId: 2,
      dependsOnTaskId: null,
    },
    {
      taskId: 102,
      projectId: 501,
      status: 'PENDING',
      content: 'Design database schema',
      priority: 'MEDIUM',
      createdIn: '2024-06-19T14:45:00Z',
      createdByUserId: 2,
      assignedToUserId: 3,
      dependsOnTaskId: 101,
    },
  ]);

  const handleTaskDrop = (task, newStatus) => {
    const updatedTasks = tasks.map((t) =>
      t.taskId === task.taskId ? { ...t, status: newStatus } : t
    );
    setTasks(updatedTasks);
  };

  const uniqueStatuses = [...new Set(tasks.map((task) => task.status))];

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '20px', flexWrap: 'wrap' }}>
      {uniqueStatuses.map((status) => (
        <KanbanColumn
          key={status}
          title={status}
          tasks={tasks.filter((task) => task.status === status)}
          onTaskDrop={handleTaskDrop}
        />
      ))}
    </Box>
  );
}

export default TaskBoard;
