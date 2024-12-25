import React from "react";
import "bootstrap/dist/js/bootstrap"; // Import Bootstrap JavaScript
import "bootstrap/dist/css/bootstrap.css"; // Import Bootstrap CSS
import "./App.css"; // Import custom CSS
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./routes/Main"; // Main component for the home page
import { Login } from "./routes/Login"; // Login component
import { Dashboard } from "./routes/pm_dashboard/Dashboard1"; // Dashboard component for projects
import { NewProject } from "./routes/NewProject"; // Component to create a new project 
import { ProjectDashboard } from "./routes/pm_dashboard/ProjectDashboard"; // Component for project dashboard
import { Search } from "./routes/Search";
import { UserDashboard } from "./routes/user_dashboard/UserDashboard";
import { SignUp } from "./routes/SignUp";

function App() {
  // State to manage user information, initialized from localStorage
  const project = ()=>{
    const storedProject = localStorage.getItem("project")
    return storedProject ? JSON.parse(storedProject) : null;
  }
  return (
    <div className="App">
      {/* BrowserRouter handles the routing within the app */}
      <BrowserRouter>
        <Routes>
          {/* Define the route for the main page */}
          <Route path="/" element={<Main />} />

          {/* Define the route for the login page */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Define the route for the project dashboard */}
          <Route path="/manager_dashboard" element={<ProjectDashboard />} />
          <Route path="/user_dashboard" element={<UserDashboard />} />
          {/* Dynamic route for a specific project dashboard */}
          <Route
            path={`/manager_dashboard/project/`} // Use project ID or default to 1
            element={<Dashboard project={project}/>} // Pass the project as a prop
          />

          {/* Define the route for creating a new project */}
          <Route path="/new_project" element={<NewProject />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
