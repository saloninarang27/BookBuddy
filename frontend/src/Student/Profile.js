import React, { useEffect, useState }  from "react";
import { Link, useParams } from "react-router-dom";
function Profile(){
  let {Id}=useParams();
  let[pf,setprofile]=useState("");

  useEffect( ()=>{
    const fetchData = async () => {
      try {
          const response = await fetch(`http://localhost:8080/Student/getStudent/${Id}`);
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


  return(
    <div className="containerr">
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Student Dashboard</h2>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li className="nav-item"><Link to={`/Profile/${Id}`}>Dashboard</Link></li>
          <li className="nav-item"><Link to={`/History/${Id}/${pf.username}`}>History</Link></li>
          <li className="nav-item"><Link to={`/Request/${Id}`}>Request</Link></li>
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
          <h3><Link id="tdd" to={`/Seatt/${Id}`}>Seat Allocation</Link></h3>
        </div>
        </div>
        <div className="dashboard-cards">
        <div className="card card-users">
          <h3><Link id="tdd" to={`/BoIssue/${Id}/${pf.username}`}>Book Issue</Link></h3>
        </div>
        </div>
        <div className="dashboard-cards">
        <div className="card card-users">
          <h3><Link id="tdd" to={`/StPending/${Id}/${pf.username}`}>Book Pending</Link></h3>
        </div>
        </div>
        <div className="dashboard-cards">
        <div className="card card-users">
        <h3><Link id="tdd" to={`/StBooks/${Id}`}>All Books</Link></h3>
        </div>
        </div>
  </main>
  </div>
  )
}
export default Profile