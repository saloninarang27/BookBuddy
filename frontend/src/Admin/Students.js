import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Student.css"
function Students(){
  let[tp,settp]=useState("");
  let {Id}=useParams();
   useEffect( ()=>{
   const fetchData = async () => {
     try {
         const response = await fetch(`http://localhost:8080/Student/all`);
         if (!response.ok) {
           throw new Error('Network response was not okk');
         }
         const data = await response.json();
         console.log(data);
         settp(data);
         console.log(tp); 
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
      <div>
        <div id="yymm"><h1>All Students</h1></div>
      <span id="mmyy"><button type="submit"><Link id="nuy" to={`/AddStudents/${Id}`}>Add More+</Link></button></span>
      <div> 
                <table id="tabu">
                    <thead className="tt" id="tabuh">
                        <th>Name</th>
                        <th>Roll No</th>
                        <th>Email</th>
                    </thead>
                    {
                        tp && tp.map(cl =>(
                            <tr>
                               <td>{cl.name}</td>
                               <td>{cl.username}</td>
                              <td>{cl.email}</td>
                            </tr>
                        ))
                    }
                </table>
            </div>
      </div>
      
     
      </div>
      
  )
}
export default Students