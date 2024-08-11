import React, { useState } from 'react'
import AdminLogin from '../components/AdminLogin';
import AdminDashboard from '../components/AdminDashboard';
import StudentSignUp from '../components/StudentSignUp';
import StudentLogin from '../components/StudentLogin';
import MyPerformance from '../components/MyPerformance';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import MyProfile from '../components/MyProfile';
import Navigation from '../components/Navbar';


const RouteComponent = () => {
    const [adminLoggedIn, setAdminLoggedIn] = useState(false);
    const [studentLoggedIn, setStudentLoggedIn] = useState(false);
    const [studentId, setStudentId] = useState(null);
    console.log('studentLoggedIn',studentLoggedIn);
  return (
    // <Router>
  <>
    <Router>
    <Navigation />
      <Routes>
        <Route path="/admin" element={<AdminLogin onLogin={setAdminLoggedIn} />} />
        {adminLoggedIn && <Route path="/admin-dashboard" element={<AdminDashboard />} />}
        
        <Route path="/signup" element={<StudentSignUp />} />

        <Route path="/student-login" element={<StudentLogin onLogin={(loggedIn, id) => { setStudentLoggedIn(loggedIn); setStudentId(id); }} />} />
        {studentLoggedIn && <Route path="/my-profile" element={<MyProfile studentId={1} />} />}

        {studentLoggedIn && <Route path="/performance" element={<MyPerformance studentId={1} />} />}
      </Routes>
    </Router>

    </>
  )
}

export default RouteComponent
