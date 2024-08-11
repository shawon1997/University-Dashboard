import React, { useState } from "react";
import { stream, streamData, updateStream } from "./DummyData";
import AddEditStream from "./AddEditStream";
import StudentsPage from "./StudentsPage";

function AdminDashboard() {
  const [formData, setFormData] = useState([...streamData]);
  const [isStudentList,setIsStudentList]=useState(false)

  const handleChange = (e, index, subIndex = null) => {
    e.preventDefault();
    if (e.target.name === "stream") {
      formData[index]["stream"] = e.target.value;
      setFormData([...formData]);
    } else {
      formData[index]["subject"][subIndex] = e.target.value;
      setFormData([...formData]);
    }
  };

  const handleSubmit = () => {
    updateStream(formData);
    alert(`Streams and subject updated successfully`);
  };



  const addMoreSubjects = (index) => {
    formData[index]?.subject?.push("");
    setFormData([...formData]);
  };

  const addMoreStream = () => {
    formData.push({ stream: "", subject: [""] });
    setFormData([...formData]);
  };

  const handleDeleteSubject = (index, subIndex) => {
    formData[index].subject.splice(subIndex, 1);
    setFormData([...formData]);
  };

  const handleDeleteStream = (index) => {
    formData.splice(index, 1);
    setFormData([...formData]);
  };

  return (
    <div className="container" style={{ backgroundColor: "whitesmoke" }}>
      <h2>Admin Dashboard</h2>
      <p>Manage students, fields, and subjects here.</p>
      {/* Additional functionalities for managing the university data */}

      <div>
        <button onClick={()=>setIsStudentList(false)}>Add Edit Stream And Subjects</button>
        <button onClick={()=>setIsStudentList(true)}>Students List</button>
      </div>

     {isStudentList ? <StudentsPage/> : <AddEditStream
        handleChange={handleChange}
        handleDeleteStream={handleDeleteStream}
        handleDeleteSubject={handleDeleteSubject}
        addMoreStream={addMoreStream}
        addMoreSubjects={addMoreSubjects}
        handleSubmit={handleSubmit}
        setFormData={setFormData}
        formData={formData}
      />}
    </div>
  );
}

export default AdminDashboard;
