import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
function DateReturn(){
  let {Id,BId}=useParams();
  let[bookno,setbookno]=useState("");
  let[bookname,setbookname]=useState("");
  let[author,setauthor]=useState("");
  let[category,setcategory]=useState("");
  let[username,setusername]=useState();
  let[issueon,setissueon]=useState("");
  let[returnon,setreturnon]=useState("");
  let[returndate,setreturndate]=useState("");
  let[issue,setissue]=useState("");
  let[i,seti]=useState(0);
  let[status,setStatus]=useState(0);

  function input1(event){
    setbookno(event.target.value);
    console.log(event.target.value);
  }
  function input2(event){
    setbookname(event.target.value);
    console.log(event.target.value);
  }
  function input3(event){
    setusername(event.target.value);
    console.log(event.target.value);
  }
  function input4(event){
    setissueon(event.target.value);
    console.log(event.target.value);
  }
  function input5(event){
    setreturnon(event.target.value);
    console.log(event.target.value);
  }
  function input6(event){
    setreturndate(event.target.value);
    console.log(event.target.value);
  }
  

  
      const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:8080/Issuee/delete/${BId}`);
            if (!response.ok) {
              throw new Error('Network response was not okk');
            }
            const data = await response.json();
            console.log(data);
            //submit2();
            
            
          } 
          catch (error) {
            console.error('Error fetching data: ', error.message);
          }
    }  ;
   
    useEffect( ()=>{
      const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:8080/Issuee/getbook/${BId}`);
            if (!response.ok) {
              throw new Error('Network response was not okk');
            }
            const data = await response.json();
            console.log(data);
            setissue(data);
            
            
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

     function submit2(){
      const formdata = new FormData();
      formdata.append('bookno',issue.bookno)
      formdata.append('bookname',issue.bookname)
      formdata.append('author',issue.author)
      formdata.append('category',issue.category)
      // formdata.append('username',username)
      // formdata.append('issuedon',issueon)
      // formdata.append('returnedon',returnon)
      // formdata.append('returndate',returndate)
      
     
      fetch('http://localhost:8080/Books/book', {
        method:'POST',
        body: formdata,
      
      })
        .then(response => response.text())
        .then(data => {
          console.log('Added successful:', data);
          // status++;
          // fetchData();
          // setStatus(status);
        })
        .catch(error => {
          console.error('Error during Added:', error);
        });
    }
    function submit(event){
      event.preventDefault();
      const formdata = new FormData();
      formdata.append('bookno',issue.bookno)
      formdata.append('bookname',issue.bookname)
      formdata.append('username',issue.username)
      formdata.append('issuedon',issue.issueon)
      formdata.append('returndate',issue.returnon)
      formdata.append('returnedon',returndate)
     
      fetch('http://localhost:8080/us/add', {
        method:'POST',
        body: formdata,
      
      })
        .then(response => response.text())
        .then(data => {
          console.log('Added successful:', data);
          fetchData();
          submit2();
        })
        .catch(error => {
          console.error('Error during Added:', error);
        });
    }

  if(issue===null){
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
     </div>

    )
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
        <h1>Return Books</h1>
        <center><label>Book No</label></center>
        <input placeholder="Book No" value={issue.bookno} onChange={input1}></input><br></br>
        <center><label>Book Name</label></center>
        <input placeholder="Book Name" value={issue.bookname} onChange={input2}></input><br></br>
        <center><label>Username</label> </center>
        <input placeholder="Username" value={issue.username} onChange={input3}></input><br></br>
        <center><label>Issued On</label> </center>
        <input placeholder="Issued On" type="date" value={issue.issueon} onChange={input4}></input><br></br>
        <center><label>Expected Return Date</label> </center>
        <input placeholder="Expected Return Date" type="date" value={issue.returnon} onChange={input5}></input><br></br>
        <center><label>Returned On</label> </center>
        <input placeholder="Returned On" type="date" value={returndate} onChange={input6}></input><br></br>
        <br></br>
        <center><button onClick={submit}>Add</button></center>
       </div>
       </main>
   </div>
  )
}
export default DateReturn