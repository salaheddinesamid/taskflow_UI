import React, { useState } from "react";
import axios from "axios";

export function NewProject() {
  // Define state for form fields
  const [projectDetails, setProjectDetails] = useState({
    projectName: "",
    status: "Not Started", // Default value
    createdAt: "",
    createdBy: "",
    teamId: "",
    progress: 0,
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectDetails({ ...projectDetails, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post(
        "http://localhost:8081/api/projects",
        projectDetails
      );
      setMessage("Project added successfully!");
      setProjectDetails({
        projectName: "",
        status: "Not Started",
        createdAt: "",
        createdBy: "",
        teamId: "",
        progress: 0,
      });
    } catch (error) {
      console.error("Error adding project:", error);
      setMessage("Failed to add project. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">Create New Project</h3>
      <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
        {/* Project Name */}
        <div className="mb-3">
          <label htmlFor="projectName" className="form-label">
            Project Name
          </label>
          <input
            type="text"
            id="projectName"
            name="projectName"
            className="form-control"
            placeholder="Enter project name"
            value={projectDetails.projectName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Status */}
        <div className="mb-3">
          <label htmlFor="status" className="form-label">
            Status
          </label>
          <select
            id="status"
            name="status"
            className="form-select"
            value={projectDetails.status}
            onChange={handleChange}
            required
          >
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        {/* Created At */}
        <div className="mb-3">
          <label htmlFor="createdAt" className="form-label">
            Created At
          </label>
          <input
            type="date"
            id="createdAt"
            name="createdAt"
            className="form-control"
            value={projectDetails.createdAt}
            onChange={handleChange}
            required
          />
        </div>

        {/* Created By */}
        <div className="mb-3">
          <label htmlFor="createdBy" className="form-label">
            Created By (User ID)
          </label>
          <input
            type="number"
            id="createdBy"
            name="createdBy"
            className="form-control"
            placeholder="Enter creator's user ID"
            value={projectDetails.createdBy}
            onChange={handleChange}
            required
          />
        </div>

        {/* Team ID */}
        <div className="mb-3">
          <label htmlFor="teamId" className="form-label">
            Team ID
          </label>
          <input
            type="number"
            id="teamId"
            name="teamId"
            className="form-control"
            placeholder="Enter team ID"
            value={projectDetails.teamId}
            onChange={handleChange}
            required
          />
        </div>

        {/* Progress */}
        <div className="mb-3">
          <label htmlFor="progress" className="form-label">
            Progress (%)
          </label>
          <input
            type="number"
            id="progress"
            name="progress"
            className="form-control"
            placeholder="Enter progress (0-100)"
            value={projectDetails.progress}
            onChange={handleChange}
            min="0"
            max="100"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={loading}
        >
          {loading ? "Saving..." : "Create Project"}
        </button>

        {/* Feedback Message */}
        {message && (
          <p
            className={`mt-3 text-center ${
              message.includes("success") ? "text-success" : "text-danger"
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
