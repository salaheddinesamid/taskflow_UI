import React, { useState } from "react";
import logo from "../media/logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import loginBack from "../media/loginback.jpg";
import googleLogo from "../media/google.png";
import slackLogo from "../media/slack.png";
import microsoftLogo from "../media/microsoft.png";
import "./Login.css";

export function Login() {
  const [thirdParties] = useState([
    { id: 1, name: "Google", img: googleLogo },
    { id: 2, name: "Slack", img: slackLogo },
    { id: 3, name: "Microsoft", img: microsoftLogo },
  ]);

  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form submission refresh
    setLoading(true);
    setErrorMessage(""); // Reset error message
    try {
      const res = await axios.post(
        "http://localhost:8080/api/user/authenticate",
        loginCredentials,{
          headers: {
            'Access-Control-Allow-Origin': "http://localhost:3000"
          },
          withCredentials: true,
        }
      );

      if (res.status === 200) {
        // Save user data in local storage
        localStorage.setItem("accessToken", JSON.stringify(res.data.accessToken));
        localStorage.setItem("user",JSON.stringify(res.data.user))
        
      }

      if(res.data.user.role === "PROJECT_MANAGER"){
        navigate('/manager_dashboard')
      }else if(res.data.user.role === "DEVELOPER"){
        navigate('/user_dashboard')
      }
    } catch (err) {
      // Display error message
      console.error("Login failed:", err);
      setErrorMessage("Login failed. Please check your credentials.");
    } finally {
      setLoading(false); // End loading state
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
        style={{ width: "100%", maxWidth: "400px", borderRadius: "10px", height: "90vh" }}
      >
        <div className="card-body text-center">
          <img
            src={logo}
            alt="TaskFlow Logo"
            style={{ width: "100px" }}
          />
          <h2 className="mb-4" style={{ fontWeight: "bold", color: "#343a40" }}>
            Welcome to TaskFlow
          </h2>
          <p className="mb-4" style={{ color: "#6c757d" }}>
            Please log in to continue
          </p>

          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
                value={loginCredentials.email}
                onChange={(e) =>
                  setLoginCredentials({ ...loginCredentials, email: e.target.value })
                }
                required
                aria-required="true"
                aria-label="Email Address"
              />
              <div className="invalid-feedback">Email is required</div>
            </div>
            <div className="mb-3">
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Enter your password"
                value={loginCredentials.password}
                onChange={(e) =>
                  setLoginCredentials({ ...loginCredentials, password: e.target.value })
                }
                required
                aria-required="true"
                aria-label="Password"
              />
              <div className="invalid-feedback">Password is required</div>
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100"
              style={{
                backgroundColor: "#0052CC",
                fontWeight: "500",
                border: "none",
              }}
              disabled={loading}
            >
              {loading ? "Logging in..." : "Log In"}
            </button>
          </form>

          {errorMessage && (
            <p style={{ color: "red", marginTop: "10px" }}>{errorMessage}</p>
          )}

          <div className="mt-2">
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
                />{" "}
                {thirdParty.name}
              </button>
            ))}
          </div>

          <div className="row mt-2">
            <div className="col">
              <a href=" https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md">Can't log in?</a>
            </div>
            <div className="col">
              <a href=" https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md">Create an account</a>
            </div>
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
