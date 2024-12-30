import { Add } from "@mui/icons-material";
import { Fab, Box, Typography, Grid, Card, CardContent } from "@mui/material";
import React, { useEffect, useState } from "react";

export function Meeting() {
  const [meetingHistory, setMeetingHistory] = useState([]);

  useEffect(() => {
    // Simulate fetching meeting history
    setTimeout(() => {
      // Replace this with actual API call logic
      setMeetingHistory([
        {
          id: 1,
          title: "Team Standup",
          date: "2024-12-10",
          attendees: ["John Doe", "Jane Smith", "Alice Brown"],
        },
        {
          id: 2,
          title: "Project Kickoff",
          date: "2024-12-12",
          attendees: ["Bob Martin", "Clara Lee"],
        },
      ]);
    }, 1000);
  }, []);

  const handleAddMeeting = () => {
    console.log("Navigate to Add Meeting Form");
    // Add navigation or modal logic here
  };

  return (
    <Box sx={{ padding: 3 }}>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Meeting History
        </Typography>
        <Fab size="medium" color="primary" aria-label="add" onClick={handleAddMeeting}>
          <Add />
        </Fab>
      </Box>

      {/* Meeting History */}
      {meetingHistory.length > 0 ? (
        <Grid container spacing={3}>
          {meetingHistory.map((meeting) => (
            <Grid item xs={12} sm={6} md={4} key={meeting.id}>
              <Card sx={{ boxShadow: 2 }}>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {meeting.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Date: {new Date(meeting.date).toLocaleDateString()}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Attendees: {meeting.attendees.join(", ")}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box
          sx={{
            mt: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            color: "text.secondary",
          }}
        >
          <Typography variant="h6">No meetings available</Typography>
          <Typography variant="body2">Click the "+" button to add a new meeting.</Typography>
        </Box>
      )}
    </Box>
  );
}
