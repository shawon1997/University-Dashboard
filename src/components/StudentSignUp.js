import React, { useEffect, useState } from "react";
import { fields, streamData, students, StudentSignUpData, subjects, years } from "./DummyData";
import { Navigate, useNavigate } from "react-router-dom";

function StudentSignUp() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [streamsData,setStreamData]=useState([])
  const [stream, setStream] = useState("select...");
  const [year,setYear]=useState(years[0])
  const navigate = useNavigate();

  const handleSignUp = () => {
    // Handle sign-up logic (you can add the student to the dummy data)
    StudentSignUpData.push({ userName: name, password: password,stream:stream||fields[0],id:Date.now(),year,marks:Math.floor(Math.random() * (100 - 70 + 1)) + 70 });
    students.push({ name: name,stream:stream||fields[0],id:Date.now(),year,marks:Math.floor(Math.random() * (100 - 70 + 1)) + 70});
    alert(`Student ${name} enrolled Successfull`);
    navigate("/student-login");
  };


  useEffect(()=>{
    let data=[]
    streamData?.map((item)=>{
      data.push(item.stream)
    })
    if(data[0]!==""){
      setStreamData(data)
    }else{
      setStream([fields[0]])
      setStreamData([...fields])
    }
    setStream(data[0])
  },[streamData])

  return (
    <div
      className="d-flex justify-content-center align-items-center "
      style={{ height: "100vh", width: "100%" }}
    >
      <div
        className="container"
        style={{
          backgroundColor: "white",
          height: "60vh",
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

        
        <select className="form-control mt-2" value={stream} onChange={(e) => setStream(e.target.value)}>
        {streamsData?.map(field => <option key={field} value={field}>{field}</option>)}
      </select>


      <select className="form-control mt-2" value={year} onChange={(e) => setYear(e.target.value)}>
        {years.map(field => <option key={field} value={field}>{field}</option>)}
      </select>
      
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
