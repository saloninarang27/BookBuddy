import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
function StBooks(){
  let[tp,settp]=useState("");
  let {Id}=useParams();
  let[pf,setprofile]=useState("");
   useEffect( ()=>{
   const fetchData = async () => {
     try {
         const response = await fetch(`http://localhost:8080/Books/total`);
         if (!response.ok) {
           throw new Error('Network response was not okk');
         }
         const data = await response.json();
         console.log(data);
         settp(data);
         console.log(tp); 
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
      <div>
        <div id="yymm"><h1>All Books</h1></div>
      {/* <span id="mmyy"><button type="submit"><Link id="nuy" to={`/AddStudents/${Id}`}>Add More+</Link></button></span> */}
      <div> 
                <table id="tabu">
                    <thead className="tt" id="tabuh">
                        <th>Book No</th>
                        <th>Book Name</th>
                        <th>Author</th>
                        <th>Category</th>
                    </thead>
                    {
                        tp && tp.map(cl =>(
                            <tr>
                               <td>{cl.bookno}</td>
                               <td>{cl.bookname}</td>
                               <td>{cl.author}</td>
                               <td>{cl.category}</td>
                            </tr>
                        ))
                    }
                </table>
            </div>
      </div>
      
     
      </div>
      
  )
}
export default StBooks