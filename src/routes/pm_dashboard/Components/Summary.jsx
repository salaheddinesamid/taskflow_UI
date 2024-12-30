import React from "react";
import { Box, Typography, IconButton, useTheme } from "@mui/material";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { Card, CardContent } from "@mui/material";
import { AssignmentTurnedIn, Update, Create, CalendarToday } from "@mui/icons-material";

// Sample data
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
    type: "created",
  },
  {
    id: 2,
    timestamp: "2024-12-11T14:15:00Z",
    event: "Task Added",
    details: "Design Database Schema assigned to Alice Smith.",
    type: "updated",
  },
];

// Colors for activity types
const activityColors = {
  created: "success.light",
  updated: "warning.light",
  due: "error.light",
};

const SectionCard = React.memo(({ title, icon, children, sx }) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        borderRadius: 2,
        boxShadow: theme.shadows[3],
        marginBottom: 2,
        display: "flex",
        flexDirection: "column",
        backgroundColor: theme.palette.background.default,
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          transform: "scale(1.02)",
        },
        ...sx,
      }}
    >
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
          {icon && (
            <IconButton aria-label={title} sx={{ marginRight: 2, color: "primary.main" }}>
              {icon}
            </IconButton>
          )}
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "text.primary" }}>
            {title}
          </Typography>
        </Box>
        {children}
      </CardContent>
    </Card>
  );
});

export function Summary({ project }) {
  const theme = useTheme();

  return (
    <Box sx={{ padding: 4, bgcolor: theme.palette.background.paper }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", marginBottom: 3, color: theme.palette.text.primary }}
      >
        {project.projectName}
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 3,
          marginBottom: 3,
        }}
      >
        {/* Summary Cards */}
        <SectionCard
          title="Completed"
          icon={<AssignmentTurnedIn />}
          sx={{ backgroundColor: theme.palette.success.dark }}
        >
          <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
            0 tasks completed in the last 7 days
          </Typography>
        </SectionCard>
        <SectionCard
          title="Updated"
          icon={<Update />}
          sx={{ backgroundColor: theme.palette.warning.dark }}
        >
          <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
            0 tasks updated recently
          </Typography>
        </SectionCard>
        <SectionCard
          title="Created"
          icon={<Create />}
          sx={{ backgroundColor: theme.palette.info.dark }}
        >
          <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
            0 tasks created
          </Typography>
        </SectionCard>
        <SectionCard
          title="Due"
          icon={<CalendarToday />}
          sx={{ backgroundColor: theme.palette.error.dark }}
        >
          <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
            0 tasks due soon
          </Typography>
        </SectionCard>
      </Box>

      {/* Charts Section */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 3,
        }}
      >
        <SectionCard title="Status Overview">
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={90}
                paddingAngle={3}
                cornerRadius={5}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={theme.palette.secondary.main}
                  />
                ))}
              </Pie>
              <Tooltip formatter={(value, name) => [`${value} tasks`, name]} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </SectionCard>

        <SectionCard title="Recent Activity">
          <Box sx={{ maxHeight: 300, overflowY: "auto" }}>
            {activities.length > 0 ? (
              activities.map((activity) => (
                <Box
                  key={activity.id}
                  sx={{
                    padding: 2,
                    borderRadius: 1,
                    backgroundColor: theme.palette[activityColors[activity.type]],
                    marginBottom: 2,
                  }}
                >
                  <Typography variant="body2" sx={{ fontWeight: "bold", color: "text.primary" }}>
                    {new Date(activity.timestamp).toLocaleString()}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.primary" }}>
                    {activity.event}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {activity.details}
                  </Typography>
                </Box>
              ))
            ) : (
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                No recent activity.
              </Typography>
            )}
          </Box>
        </SectionCard>
      </Box>
    </Box>
  );
}
