import React, { useState } from "react";
import loginBack from "../media/loginback.jpg";
import googleLogo from "../media/google.png";
import slackLogo from "../media/slack.png";
import microsoftLogo from "../media/microsoft.png";
import logo from "../media/logo.png";

import "./Login.css";
export function SignUp(){
    const [thirdParties] = useState([
        { id: 1, name: "Google", img: googleLogo },
        { id: 2, name: "Slack", img: slackLogo },
        { id: 3, name: "Microsoft", img: microsoftLogo },
      ]);
    const [userCredentials,setUserCredentials] = useState({
        firstName : "",
        lastName : "",
        email : "",
        password : ""
    })

    const handleSignUp = () =>{

    }
    return(
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
                  setUserCredentials({ ...userCredentials, firstName: e.target.value })
                }
                required
                aria-required="true"
                aria-label="Email Address"
              />
              <div className="invalid-feedback">Please enter your first name</div>
            </div>
            <div className="mb-3">
              <input
                type="text"
                id="lastName"
                className="form-control"
                placeholder="Enter your lastName"
                value={userCredentials.lastName}
                onChange={(e) =>
                  setUserCredentials({ ...userCredentials, lastName: e.target.value })
                }
                required
                aria-required="true"
                aria-label="Email Address"
              />
              <div className="invalid-feedback">Please enter your last name</div>
            </div>
            <div className="mb-3">
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
                value={userCredentials.email}
                onChange={(e) =>
                  setUserCredentials({ ...userCredentials, email: e.target.value })
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
                value={userCredentials.password}
                onChange={(e) =>
                  setUserCredentials({ ...userCredentials, password: e.target.value })
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
              disabled={false}
            >
              Sign up
            </button>
          </form>

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
    )
}