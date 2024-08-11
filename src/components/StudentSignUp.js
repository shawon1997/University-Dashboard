import React, { useState } from "react";
import { fields, students, StudentSignUpData } from "./DummyData";
import { Navigate, useNavigate } from "react-router-dom";

function StudentSignUp() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [stream, setStream] = useState(fields[0]);
  const navigate = useNavigate();

  const handleSignUp = () => {
    // Handle sign-up logic (you can add the student to the dummy data)
    StudentSignUpData.push({ userName: name, password: password });
    alert(`Student ${name} enrolled Successfull`);
    navigate("/student-login");
  };

  console.log("StudentSignUpData", StudentSignUpData);

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
        <h2>Student Sign Up</h2>
        <input
          type="text"
          className="form-control mb-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="User Name"
        />
        <input
          type="password"
          className="form-control mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        {/* <select className="form-control mt-2" value={stream} onChange={(e) => setStream(e.target.value)}>
        {fields.map(field => <option key={field} value={field}>{field}</option>)}
      </select> */}
        <button className="btn btn-primary mt-2" 
        disabled={!name||!password}
        onClick={handleSignUp}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default StudentSignUp;
