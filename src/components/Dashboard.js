import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Dashboard(){
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.pushState("/login");
    } catch {
      setError("failed to log out");
    }
    
  }
  return (
    <>
      {error && <p>{error}</p>}
      <p>Email: {currentUser.email}</p>
      <Link to="/update-profile">Update profile</Link>
      <div>Dashboard</div>
      <button onClick={handleLogout}> log out</button>
    </>
  );
};

