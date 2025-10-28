import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css"; 

function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let[Id,setId]=useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    setUsername("");
    setPassword("");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(`http://localhost:8080/Student/GetProfile/${username}/${password}`);
        if(!response.ok) {
          throw new Error('Network response was not ok');

        }

        const data = await response.json();
        console.log(data);
        setId(data);
      } catch (error) {
        console.error('Error fetching data: ', error.message);
      }
    };
     if(username || password)
        {  console.log(username +" " + password )
          fetchData();}

  }, [username, password]);
  return (
    <div className="container">
      <h1 id="one"><center>Book Buddy</center></h1>
      <div className="card">
        <div className="card-body">
          <div>
            <span className="role" onClick={() => console.log("Student clicked")}>Student</span>
            <span className="role"><Link to="/AdminLogin">Admin</Link></span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group"><br></br>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit"><Link to={`/Profile/${Id}`}>Login</Link></button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
