import React from "react";
import { Box, Typography } from '@mui/material';
import { PieChart} from 'recharts';
import { Card, CardContent, IconButton } from "@mui/material";
import { Pie, Cell } from "recharts";
import { AssignmentTurnedIn, Update, Create, CalendarToday } from "@mui/icons-material";

export function Summary({ project }) {
  const data = [
    { value: 30, label: "Category A" },
    { value: 40, label: "Category B" },
    { value: 20, label: "Category C" },
    { value: 10, label: "Category D" },
  ];

  const activities = [
    {
      id: 1,
      timestamp: "2024-12-10T09:30:00Z",
      event: "Project Created",
      details: "Task Management System created by John Doe.",
    },
    {
      id: 2,
      timestamp: "2024-12-11T14:15:00Z",
      event: "Task Added",
      details: "Design Database Schema assigned to Alice Smith.",
    },
    // Add more activities...
  ];

  const SectionCard = ({ title, icon, children }) => (
    <Card
      sx={{
        borderRadius: 2,
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        marginBottom: 3,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
          {icon && (
            <Box sx={{ marginRight: 2 }}>
              <IconButton>{icon}</IconButton>
            </Box>
          )}
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {title}
          </Typography>
        </Box>
        {children}
      </CardContent>
    </Card>
  );

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 3 }}>
        {project.projectName}
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 3,
        }}
      >
        {/* Summary Cards */}
        <SectionCard
          title="Completed"
          icon={<AssignmentTurnedIn sx={{ color: "#4CAF50" }} />}
        >
          <Typography variant="body2">0 tasks completed in the last 7 days</Typography>
        </SectionCard>
        <SectionCard
          title="Updated"
          icon={<Update sx={{ color: "#FF9800" }} />}
        >
          <Typography variant="body2">0 tasks updated recently</Typography>
        </SectionCard>
        <SectionCard
          title="Created"
          icon={<Create sx={{ color: "#2196F3" }} />}
        >
          <Typography variant="body2">0 tasks created</Typography>
        </SectionCard>
        <SectionCard
          title="Due"
          icon={<CalendarToday sx={{ color: "#F44336" }} />}
        >
          <Typography variant="body2">0 tasks due soon</Typography>
        </SectionCard>
      </Box>

      {/* Charts Section */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 3,
          marginTop: 3,
        }}
      >
        <SectionCard title="Status Overview">
          <PieChart width={200} height={200}>
            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={30}
              outerRadius={80}
              paddingAngle={5}
              cornerRadius={5}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={["#ff0000", "#00ff00", "#0000ff", "#ff9900"][index]}
                />
              ))}
            </Pie>
          </PieChart>
        </SectionCard>
        <SectionCard title="Recent Activity">
          <Box sx={{ maxHeight: 300, overflowY: "auto" }}>
            {activities.map((activity) => (
              <Box key={activity.id} sx={{ marginBottom: 2 }}>
                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                  {new Date(activity.timestamp).toLocaleString()}
                </Typography>
                <Typography variant="body2">{activity.event}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {activity.details}
                </Typography>
              </Box>
            ))}
          </Box>
        </SectionCard>
      </Box>
    </Box>
  );
}

