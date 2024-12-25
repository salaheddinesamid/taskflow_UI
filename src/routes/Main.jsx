import React, { useEffect, useState } from "react";
import logo from "../media/logo.png";
import googleLogo from "../media/google.png";
import microsoftLogo from "../media/microsoft.png";
import softDev from "../media/softdev.png";
import marketing from "../media/marketing.png"
import "./main.css"; // Assume styles are in this file
import planAndRecognize from "../media/plan_and_recognize.webp";
import alignWorkWithGoals from "../media/rb_2221.png";
import { useNavigate } from "react-router-dom";

export function Main() {
  const navigate = useNavigate();
    const Header = () => (
        <header className="row align-items-center p-3">
            <div className="col-xl-8 d-flex align-items-center justify-content-between">
                <img src={logo} alt="TaskFlow Logo" className="logo" />
                <h3 className="fw-bolder">TaskFlow</h3>
                <nav>
                    <a href="#functionality">Functionality</a>
                    <a href="#guide">Product Guide</a>
                    <a href="#models">Models</a>
                    <a href="#enterprise">Enterprise</a>
                </nav>
            </div>
            <div className="col-xl-4 d-flex align-items-center justify-content-end">
                <button className="btn btn-outline-primary me-2">Sign Up</button>
                <button className="btn btn-outline-primary" onClick={()=>{
                  navigate("/login")
                }}>Sign In</button>
            </div>
        </header>
    );

    const Register = () => {
        const [email, setEmail] = useState("");

        const handleRegister = () => {
            if (!/\S+@\S+\.\S+/.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }
            alert(`Registered with ${email}`);
        };

        return (
            <div className="register">
                <label htmlFor="email" className="fw-bold">
                    Professional Email
                </label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    className="form-control w-50"
                    placeholder="you@company.com"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <small className="text-muted">
                    Use your work email address to separate personal and professional life.
                </small>
                <button className="btn btn-primary mt-3" onClick={handleRegister}>
                    Register
                </button>
                <hr />
                <div className="row">
                    <div className="col-6">
                        <button className="btn btn-outline-secondary w-100">
                            <img src={microsoftLogo} alt="Microsoft Logo" className="icon" /> Microsoft
                        </button>
                    </div>
                    <div className="col-6">
                        <button className="btn btn-outline-secondary w-100">
                            <img src={googleLogo} alt="Google Logo" className="icon" /> Google
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    const Services = () => {
        const services = [
            { id: 1, name: "Software Development", image: softDev },
            { id: 2, name: "Marketing", image: marketing },
            { id: 3, name: "Computer Science", image: "" },
            { id: 4, name: "Design", image: "" },
        ];

        return (
            <div className="row mt-4">
                {services.map((service) => (
                    <div className="col col-lg-3 col-md-6 text-center service-card" key={service.id}>
                        <h4>{service.name}</h4>
                        <img
                            src={service.image || "/default-image.png"}
                            alt={service.name}
                            className="service-image"
                        />
                    </div>
                ))}
            </div>
        );
    };
const Desc = () => {
  const components = [
    {
      id: 1,
      name: "Plan and recognize tasks",
      description: "From short projects to large cross-functional programs, TaskFlow breaks big ideas down into achievable steps.",
      img_src: planAndRecognize, // Replace with actual image path or import
    },
    {
      id: 2,
      name: "Align work to goals",
      description: "From short projects to large cross-functional programs, TaskFlow breaks big ideas down into achievable steps.",
      img_src: alignWorkWithGoals, // Replace with actual image path or import
    },
  ];

  const [targetComponent, setTargetComponent] = useState(1);

  // Log state changes
  useEffect(() => {
    console.log("Selected Component ID:", targetComponent);
  }, [targetComponent]);

  return (
    <div className="container mt-4 mb-3">
      <div className="row">
        <h1 className="fw-bold">Made for complex projects or everyday tasks</h1>
      </div>

      <div className="row">
        {/* Left Column: Buttons */}
        <div className="col-4">
          {components.map((component) => (
            <div className="row mb-3" key={component.id}>
              <button
                className={`btn fw-bolder ${targetComponent === component.id ? "text-primary" : "text-dark"}`}
                style={{ fontSize: "24px" }}
                onClick={() => setTargetComponent(component.id)}
              >
                {component.name}
              </button>
            </div>
          ))}
        </div>

        {/* Right Column: Content */}
        <div className="col-8">
          {components.map((component) => {
            if (component.id === targetComponent) {
              return (
                <div key={component.id} className="text-center">
                  <img src={component.img_src} alt={component.name} className="img-fluid mb-3" style={{
                    width : 500,
                    height : 300,
                  }} />
                  <p className="fw-light">{component.description}</p>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
}
    const Hero = () => (
        <section className="hero row bg-light py-5">
            <div className="col-xl-6 text-center">
                <h1>
                    Great results start with <b>TaskFlow</b>
                </h1>
                <p>The only project management tool you need to plan and track every team's work.</p>
            </div>
            <div className="col-xl-6">
                <Register />
            </div>
            <Services />
            <Desc/>
        </section>
    );

    return (
        <main>
            <Header />
            <Hero />
        </main>
    );
}
