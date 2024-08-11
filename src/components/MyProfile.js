import React from 'react';
import { students } from './DummyData';

function MyProfile({ studentId }) {
  const student = students.find(s => s.id === studentId);

  return (
    <div className="container" style={{background:"white"}}>
      <h2>My Profile</h2>
      <p><strong>Name:</strong> {student?.name}</p>
      <p><strong>Year:</strong> {student?.year}</p>
      <p><strong>Stream:</strong> {student?.stream}</p>
      <p><strong>Subjects:</strong> {student?.subjects?.join(', ')}</p>
    </div>
  );
}

export default MyProfile;
