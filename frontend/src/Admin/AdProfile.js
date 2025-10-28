import React, { useEffect, useState } from "react";
import "./AdProfile.css";
import { Link, useParams } from "react-router-dom";

function AdProfile() {
  let[pf,setprofile]=useState("");
  let {Id}=useParams();

  useEffect( ()=>{
    const fetchData = async () => {
      try {
          const response = await fetch(`http://localhost:8080/Admin/getAdmin/${Id}`);
          if (!response.ok ) {
            throw new Error('Network response was not okk');
          }
          const data = await response.json();
          console.log(data);
          setprofile(data);
        } 
        catch (error) {
          console.error('Error fetching data: ', error.message);
        }
  }  ;
  if(1)
  {
      fetchData();
  }        
   },[1])

  return (
       <div className="containerr">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>Admin Dashboard</h2>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li className="nav-item"><Link to={`/AdProfile/${Id}`}>Dashboard</Link></li>
            <li className="nav-item"><Link to={`/AddBooks/${Id}`}>Add Books</Link></li>
            <li className="nav-item"><Link to={`/DeleteBooks/${Id}`}>Delete Books</Link></li>
            <li className="nav-item"><Link to={`/Students/${Id}`}>Students</Link></li>
            <li className="nav-item"><Link to={`/ReturnBooks/${Id}`}>Return Book</Link></li>
            <li className="nav-item"><Link to={`/Records/${Id}`}>Records</Link></li>
            <li className="nav-item"><Link to={`/Feedback/${Id}`}>Requests</Link></li>
            <li className="nav-item"><Link to={`/`}>Logout</Link></li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <div className="breadcrumbs">
          <h1>Welcome {pf.name}</h1>
        </div>
        <div className="dashboard-cards">
          <div className="card card-users">
            <h3><Link id="tdd" to={`/Seat/${Id}`}>Seat Allocation</Link></h3>
          </div>
          </div>
          <div className="dashboard-cards">
          <div className="card card-users">
            <h3><Link id="tdd" to={`/Issue/${Id}`}>Book Issue</Link></h3>
          </div>
          </div>
          <div className="dashboard-cards">
          <div className="card card-users">
            <h3><Link id="tdd" to={`/Pending/${Id}`}>Book Pending</Link></h3>
          </div>
          </div>
          <div className="dashboard-cards">
          <div className="card card-users">
            <h3><Link id="tdd" to={`/Books/${Id}`}>All Books</Link></h3>
          </div>
          </div>
    </main>
    </div>
   
   );
}

export default AdProfile;
