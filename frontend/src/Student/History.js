import React, { useEffect, useState }  from "react";
import { Link, useParams } from "react-router-dom";
function History(){
  let[tp,settp]=useState("");
  let[pf,setprofile]=useState("");
  let {Id,username}=useParams();
  var i=1;
   useEffect( ()=>{
   const fetchData = async () => {
     try {
         const response = await fetch(`http://localhost:8080/us/gett/${username}`);
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
    <div id="abc"><h1>Book History</h1></div>
      <div id="ghi"> 
                  <table id="def">
                  <thead className="ut" id="def1">
                       <th>Sl No.</th>
                        <th>Book No</th>
                        <th>Book Name</th>
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
                               <td>{cl.issuedon}</td>
                               <td>{cl.returnedon}</td>
                               <td>{cl.returndate}</td>

                            </tr>
                        ))
                    }
                </table>
            </div>
      </div>
  )
}
export default History