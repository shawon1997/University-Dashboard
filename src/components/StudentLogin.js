import React, { useState } from "react";
import { students, StudentSignUpData } from "./DummyData";
import { useNavigate } from "react-router-dom";

function StudentLogin({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("jbdsvfjsjfsj", StudentSignUpData,username,password);
    const student = StudentSignUpData.find((s) => s.userName === username);
    console.log('ksjabhdj',student);
    if (student && password === student?.password) {
      onLogin(true, student.id);
      alert("Student Login Successfully!");
      navigate("/performance");
    } else {
      alert("Invalid credentials");
      navigate("/signup");
    }
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center "
      style={{ height: "100vh", width: "100%" }}
    >
      <div
        className="container"
        style={{
          backgroundColor: "white",
          height: "50vh",
          width: "30%",
          border: "1px solid",
          borderRadius: "6px",
          padding: "3%",
        }}
      >
        <h2>Student Login</h2>
        <input
          type="text"
          className="form-control mb-3"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <div className="input-group mb-3">
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          {/* <span
            className="input-group-text"
            onClick={togglePassword}
            style={{ cursor: "pointer" }}
          >
            <i className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i>
          </span> */}
        </div>
        <button
          className="btn btn-primary mt-2"
          disabled={!username || !password}
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default StudentLogin;
