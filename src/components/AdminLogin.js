import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogin({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();

  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      onLogin(true);
      alert('Admin Login Successfull');
      navigate("/admin-dashboard")
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center ' style={{height:"100vh",width:"100%"}}>
      <div className="container" style={{backgroundColor:"white",height:"50vh",width:"30%", border:"1px solid",borderRadius:"6px",padding:"3%"}}>
      <h2>Admin Login</h2>
      <input type="text" className="form-control mb-3" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button className="btn btn-primary mt-2" onClick={handleLogin}>Login</button>
    </div>
    </div>
  );
}

export default AdminLogin;
