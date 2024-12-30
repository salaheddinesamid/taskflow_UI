import React from "react";
import { Button, Typography, Box, Grid, Container } from "@mui/material";


export default function Main() {
  return (
    <Box sx={{ fontFamily: "Arial, sans-serif", color: "#253858" }}>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 50px",
          backgroundColor: "#0747A6",
          color: "#FFFFFF",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          TaskFlow
        </Typography>
        <Box sx={{ display: "flex", gap: 3 }}>
          <Button color="inherit">Features</Button>
          <Button color="inherit">Pricing</Button>
          <Button color="inherit">Integrations</Button>
          <Button color="inherit" variant="outlined" sx={{ color: "#FFFFFF", borderColor: "#FFFFFF" }}>
            Get Started
          </Button>
        </Box>
      </Box>

      {/* Hero Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "50px",
          backgroundColor: "#DEEBFF",
        }}
      >
        <Box>
          <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: 3 }}>
            The #1 Software Development Tool
          </Typography>
          <Typography variant="h6" sx={{ marginBottom: 3 }}>
            Plan, track, and manage your agile and software development projects in one tool.
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Try TASKFLOW for Free
          </Button>
        </Box>
        <img src="" alt="JIRA Banner" style={{ width: "50%", borderRadius: "8px" }} />
      </Box>

      {/* Features Section */}
      <Container sx={{ marginTop: 6, marginBottom: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "center", marginBottom: 5 }}>
          Features That Help You Move Fast
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <img src="" alt="Feature 1" style={{ width: "100%", borderRadius: "8px" }} />
            <Typography variant="h6" sx={{ fontWeight: "bold", marginTop: 2 }}>
              Plan and Track
            </Typography>
            <Typography>
              Break down large projects into manageable tasks with boards, sprints, and agile workflows.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src="" alt="Feature 2" style={{ width: "100%", borderRadius: "8px" }} />
            <Typography variant="h6" sx={{ fontWeight: "bold", marginTop: 2 }}>
              Collaborate Seamlessly
            </Typography>
            <Typography>
              Connect your team with integrations, real-time updates, and powerful dashboards.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* Integrations Section */}
      <Box
        sx={{
          padding: "50px",
          backgroundColor: "#0747A6",
          color: "#FFFFFF",
        }}
      >
        <Container>
          <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "center", marginBottom: 5 }}>
            Integrate With Your Favorite Tools
          </Typography>
          <img src="" alt="Integrations" style={{ width: "100%", borderRadius: "8px" }} />
        </Container>
      </Box>

      {/* Call to Action */}
      <Box sx={{ textAlign: "center", padding: "50px" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 3 }}>
          Start Your Free Trial Today
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Get Started
        </Button>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          padding: "20px",
          backgroundColor: "#253858",
          color: "#FFFFFF",
          textAlign: "center",
        }}
      >
        <Typography>© 2024 JIRA. All rights reserved.</Typography>
      </Box>
    </Box>
  );
}
