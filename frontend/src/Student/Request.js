import React, { useState }  from "react"
import { Link, useParams } from "react-router-dom";
function Request(){
  let{Id}=useParams();
  let[feedback,setfeedback]=useState("");
  let[username,setusername]=useState("");
  let[name,setname]=useState("");
  let[pf,setprofile]=useState("");

  function input1(event){
    setfeedback(event.target.value);
    console.log(event.target.value);
  }
  function input2(event){
    setusername(event.target.value);
    console.log(event.target.value);
  }
  function input3(event){
    setname(event.target.value);
    console.log(event.target.value);
  }
  function submit(event){
    event.preventDefault();
    const formdata = new FormData();
    formdata.append('feedback',feedback)
    formdata.append('username',username)
    formdata.append('name',name)
   
    fetch('http://localhost:8080/request/adds', {
      method:'POST',
      body: formdata,
    
    })
      .then(response => response.text())
      .then(data => {
        console.log('Request sent successful:', data);
        setprofile(data);
      })
      .catch(error => {
        console.error('Error during Added:', error);
      });
  }

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
    <main className="aaaaa">
        <div className="bcde">
          <h1>Feedback</h1>
        <center><label>Feedback</label></center>
        <input placeholder="Request" value={feedback} onChange={input1}></input><br></br>
        <center><label>User Name</label></center>
        <input placeholder="Posted by (Username)" value={username} onChange={input2}></input><br></br>
        <center><label>Name</label> </center>
        <input placeholder="Posted by (name)" value={name} onChange={input3}></input><br></br>
        <br></br>
        <center><button onClick={submit}>Add</button> </center>
       </div>
       </main>
    </div>
  )
}
export default Request