import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
function DeleteBooks()
{
    let{Id}=useParams();
    let[books,setBooks]=useState();
    let[status,setStatus]=useState(0)
    var i=1;

    useEffect( ()=>{
        const fetchData = async () => {
          try {
              const response = await fetch(`http://localhost:8080/Books/total`);
              if (!response.ok) {
                throw new Error('Network response was not okk');
              }
              const data = await response.json();
              console.log(data);
              setBooks(data)
              
              
            } 
            catch (error) {
              console.error('Error fetching data: ', error.message);
            }
      }  ;
      if(1)
      {
          fetchData();
      }        
       },[status])


   const remove= async(id)=>
    {
        const response= await fetch(`http://localhost:8080/Books/delete/${id}`)
      .then(response => response.text())
      .then(data => {
        console.log('Successfully Deleted also:', data);
        status++;
        setStatus(status);
      })
      .catch(error => {
        console.error('Error during Deletion:', error);
      });

    }
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
     <div id="yymmii"><h1>All Books</h1></div>
   <div> 
             <table id="tabul">
                 <thead className="tti" id="tabuhh">
                    <th>Sl No.</th>
                     <th>Book No</th>
                     <th>Book Name</th>
                     <th>Author</th>
                     <th>Category</th>
                     <th>Delete</th>
                 </thead>
                 {
                     books && books.map(books =>(
                         <tr>
                            <td>{i++}</td>
                            <td>{books.bookno}</td>
                            <td>{books.bookname}</td>
                            <td>{books.author}</td>
                            <td>{books.category}</td>
                            <td><button onClick={()=>remove(books.id)} style={{width:'100%', backgroundColor: '#fb81c2', color: '#fff', marginRight: '8%', padding: '15px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Remove</button></td> 
                         </tr>
                     ))
                 }
             </table>
         </div>
   </div>
   
  
   </div>
  )
}
  export default DeleteBooks