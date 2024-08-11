import React from "react";
import Theader from "./Theader";
import { students } from "./DummyData";
import { STUDENT_HEADER } from "../constants/header";
import { useNavigate } from "react-router-dom";

const StudentsPage = () => {
    const navigate=useNavigate() 

    const handleEditStudent=(id)=>{
        navigate(`/student-detail/${id}`)
    }

  const tableBody = () => {
    let finalData= students?.map((student, index) => {

     return <tr key={student.id || index}>
        {STUDENT_HEADER?.map((singleHeader) => {
          let cellData;
          if (singleHeader === "Name") {
            cellData = student.name;
          } else if (singleHeader === "Stream") {
            cellData = student.stream;
          } else if (singleHeader === "Year") {
            cellData = student.year;
          } else if (singleHeader === "Id") {
            cellData = index + 1;
          }
          else if (singleHeader === "Edit") {
            cellData = "Edit";
          }
          else {
            cellData = ""; 
          }
          return <td key={singleHeader} onClick={()=>cellData==="Edit" ? handleEditStudent(student.id) : {}}>{cellData}</td>;
        })}
      </tr>
  });
    return finalData
  };

  return (
    <div>
      <table className="table table-dark table-hover">
        <Theader data={STUDENT_HEADER} />
        <tbody>{tableBody()}</tbody>
      </table>
    </div>
  );
};

export default StudentsPage;
