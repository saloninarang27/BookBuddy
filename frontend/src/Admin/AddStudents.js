import React, { useState }  from "react";
import { Link, useParams } from "react-router-dom";
function AddStudents(){
  let {Id}=useParams();
  let[username,setusername]=useState("");
  let[password,setpassword]=useState("");
  let[name,setname]=useState("");
  let[email,setemail]=useState("");

  function input1(event){
    setusername(event.target.value);
    console.log(event.target.value);
  }
  function input2(event){
    setpassword(event.target.value);
    console.log(event.target.value);
  }
  function input3(event){
    setname(event.target.value);
    console.log(event.target.value);
  }
  function input4(event){
    setemail(event.target.value);
    console.log(event.target.value);
  }
  function submit(event){
    event.preventDefault();
    const formdata = new FormData();
    formdata.append('username',username)
    formdata.append('password',password)
    formdata.append('name',name)
    formdata.append('email',email)
   
    fetch('http://localhost:8080/Student/add', {
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
          <h1>Add Students</h1>
        <center><label>Username</label></center>
        <input placeholder="Username" value={username} onChange={input1}></input><br></br>
        <center><label>Password</label></center>
        <input placeholder="Password" value={password} onChange={input2}></input><br></br>
        <center><label>Name</label> </center>
        <input placeholder="Name" value={name} onChange={input3}></input><br></br>
        <center><label>Email</label> </center>
        <input placeholder="Email" value={email} onChange={input4}></input><br></br>
        <br></br>
        <center><button onClick={submit}>Add</button> </center>
       </div>
       </main>
    </div>
  )
}
export default AddStudents