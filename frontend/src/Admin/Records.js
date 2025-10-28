import React, { useEffect, useState }  from "react";
import { Link, useParams } from "react-router-dom";
function Records(){
  let[tp,settp]=useState("");
  let {Id}=useParams();
  var i=1;
   useEffect( ()=>{
   const fetchData = async () => {
     try {
         const response = await fetch(`http://localhost:8080/us/find`);
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
        <div id="yymmii"><h1>Records</h1></div>
      <div> 
                <table id="tabul">
                    <thead className="tti" id="tabuhh">
                       <th>Sl No.</th>
                        <th>Book No</th>
                        <th>Book Name</th>
                        <th>Username</th>
                        <th>Issue On</th>
                        <th>Expected Return Date</th>
                        <th>Returned On</th>
                    </thead>
                    {
                        tp && tp.map(cl =>(
                            <tr>
                               <td>{i++}</td>
                               <td>{cl.bookno}</td>
                               <td>{cl.bookname}</td>
                               <td>{cl.username}</td>
                               <td>{cl.issuedon}</td>
                               <td>{cl.returnedon}</td>
                               <td>{cl.returndate}</td>

                            </tr>
                        ))
                    }
                </table>
            </div>
      </div>
      </div>
  )
}
export default Records