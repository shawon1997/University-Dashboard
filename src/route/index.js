import React, { useState } from 'react'
import AdminLogin from '../components/AdminLogin';
import AdminDashboard from '../components/AdminDashboard';
import StudentSignUp from '../components/StudentSignUp';
import StudentLogin from '../components/StudentLogin';
import MyPerformance from '../components/MyPerformance';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import MyProfile from '../components/MyProfile';
import Navigation from '../components/Navbar';
import StudentDetailsForm from '../components/StudentDetailsForm';


const RouteComponent = () => {
    const [adminLoggedIn, setAdminLoggedIn] = useState(false);
    const [studentLoggedIn, setStudentLoggedIn] = useState(false);
    const [studentId, setStudentId] = useState(null);

  return (
    // <Router>
  <>
    <Router>
    <Navigation />
      <Routes>
        <Route path="/admin" element={<AdminLogin onLogin={setAdminLoggedIn} />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        
        <Route path="/signup" element={<StudentSignUp />} />
        <Route path="/student-detail/:id" element={<StudentDetailsForm />} />

  
        <Route path="/student-login" element={<StudentLogin onLogin={(loggedIn, id) => { setStudentLoggedIn(loggedIn); setStudentId(id); }} />} />
         <Route path="/my-profile" element={<MyProfile studentId={studentId} />} />

        <Route path="/performance" element={<MyPerformance studentId={studentId} />} />
      </Routes>
    </Router>

    </>
  )
}

export default RouteComponent
