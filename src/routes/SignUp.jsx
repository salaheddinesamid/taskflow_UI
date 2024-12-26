import React, { useState } from "react";
import loginBack from "../media/loginback.jpg";
import googleLogo from "../media/google.png";
import slackLogo from "../media/slack.png";
import microsoftLogo from "../media/microsoft.png";
import logo from "../media/logo.png";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function SignUp() {
  const [thirdParties] = useState([
    { id: 1, name: "Google", img: googleLogo },
    { id: 2, name: "Slack", img: slackLogo },
    { id: 3, name: "Microsoft", img: microsoftLogo },
  ]);

  const [userCredentials, setUserCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "DEVELOPER",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault(); // Prevent form refresh
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await axios.post(
        "http://localhost:8080/api/user/register",
        userCredentials
      );
      //setSuccessMessage("Registration successful! Please log in.");
      localStorage.setItem("user",JSON.stringify(response.data.user))
      navigate("/welcome")
    } catch (err) {
      setErrorMessage(
        err.response?.data?.message || "An error occurred. Please try again."
      );
    }
  };

  return (
    <div
      className="row d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        backgroundImage: `url(${loginBack})`,
        backgroundSize: "cover",
      }}
    >
      <div
        className="card shadow-lg"
        style={{
          width: "100%",
          maxWidth: "400px",
          borderRadius: "10px",
          height: "90vh",
        }}
      >
        <div className="card-body text-center">
          <img src={logo} alt="TaskFlow Logo" style={{ width: "100px" }} />
          <h2 className="mb-4" style={{ fontWeight: "bold", color: "#343a40" }}>
            Welcome to TaskFlow
          </h2>
          <p className="mb-4" style={{ color: "#6c757d" }}>
            Please Sign up
          </p>

          <form onSubmit={handleSignUp}>
            <div className="mb-3">
              <input
                type="text"
                id="firstName"
                className="form-control"
                placeholder="Enter your first name"
                value={userCredentials.firstName}
                onChange={(e) =>
                  setUserCredentials({
                    ...userCredentials,
                    firstName: e.target.value,
                  })
                }
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                id="lastName"
                className="form-control"
                placeholder="Enter your last name"
                value={userCredentials.lastName}
                onChange={(e) =>
                  setUserCredentials({
                    ...userCredentials,
                    lastName: e.target.value,
                  })
                }
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
                value={userCredentials.email}
                onChange={(e) =>
                  setUserCredentials({
                    ...userCredentials,
                    email: e.target.value,
                  })
                }
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Enter your password"
                value={userCredentials.password}
                onChange={(e) =>
                  setUserCredentials({
                    ...userCredentials,
                    password: e.target.value,
                  })
                }
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100"
              style={{
                backgroundColor: "#0052CC",
                fontWeight: "500",
                border: "none",
              }}
            >
              Sign up
            </button>
          </form>

          {errorMessage && (
            <div className="alert alert-danger mt-3">{errorMessage}</div>
          )}
          {successMessage && (
            <div className="alert alert-success mt-3">{successMessage}</div>
          )}

          <div className="mt-4">
            <p style={{ color: "gray" }}>Continue with:</p>
          </div>
          <div className="row">
            {thirdParties.map((thirdParty) => (
              <button
                key={thirdParty.id}
                className="btn mt-2"
                style={{
                  border: "0.3px solid gray",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                <img
                  src={thirdParty.img}
                  alt={thirdParty.name}
                  style={{ width: 25 }}
                />
                {thirdParty.name}
              </button>
            ))}
          </div>

          <hr />
          <footer className="text-center py-3">
            <p
              className="mb-0"
              style={{ fontSize: "0.9rem", color: "#6c757d" }}
            >
              © {new Date().getFullYear()} TaskFlow. All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
