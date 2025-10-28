import React, { useState }  from "react";
import { Link, useParams } from "react-router-dom";
import "./AddBooks.css";
function AddBooks(){
  let {Id}=useParams();
  let[bookno,setbookno]=useState("");
  let[bookname,setbookname]=useState("");
  let[author,setauthor]=useState("");
  let[category,setcategory]=useState("");

  function input1(event){
    setbookno(event.target.value);
    console.log(event.target.value);
  }
  function input2(event){
    setbookname(event.target.value);
    console.log(event.target.value);
  }
  function input3(event){
    setauthor(event.target.value);
    console.log(event.target.value);
  }
  function input4(event){
    setcategory(event.target.value);
    console.log(event.target.value);
  }
  function submit(event){
    event.preventDefault();
    const formdata = new FormData();
    formdata.append('bookno',bookno)
    formdata.append('bookname',bookname)
    formdata.append('author',author)
    formdata.append('category',category)
   
    fetch('http://localhost:8080/Books/book', {
      method:'POST',
      body: formdata,
    
    })
      .then(response => response.text())
      .then(data => {
        console.log('Added successful:', data);
      })
      .catch(error => {
        console.error('Error during Added:', error);
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
      <main className="aaaaa">
        <div className="bcde">
          <h1>Add Books</h1>
        <center><label>Book No</label></center>
        <input placeholder="BookNo" value={bookno} onChange={input1}></input><br></br>
        <center><label>Book Name</label></center>
        <input placeholder="BookName" value={bookname} onChange={input2}></input><br></br>
        <center><label>Author</label> </center>
        <input placeholder="Author" value={author} onChange={input3}></input><br></br>
        <center><label>Category</label> </center>
        <input placeholder="Category" value={category} onChange={input4}></input><br></br>
        <br></br>
        <center><button onClick={submit}>Add</button> </center>
       </div>
       </main>
    </div>
  )
}
export default AddBooks