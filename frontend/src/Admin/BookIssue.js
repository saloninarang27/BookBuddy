import React, { useEffect, useState }  from "react";
import { Link, useParams } from "react-router-dom";
function BookIssue(){
  let {Id,bookno,bookname,author,category}=useParams();

  // let[bookno,setbookno]=useState("");
  // let[bookname,setbookname]=useState("");
  // let[author,setauthor]=useState("");
  // let[category,setcategory]=useState("");
  let[username,setusername]=useState("");
  let[issueon,setissueon]=useState("");
  let[returnon,setreturnon]=useState("");
  let[status,setStatus]=useState(0);
  let[issue,setissue]=useState("");

  // function input1(event){
  //   setbookno(event.target.value);
  //   console.log(event.target.value);
  // }
  // function input2(event){
  //   setbookname(event.target.value);
  //   console.log(event.target.value);
  // }
  // function input6(event){
  //   setauthor(event.target.value);
  //   console.log(event.target.value);
  // }
  // function input7(event){
  //   setcategory(event.target.value);
  //   console.log(event.target.value);
  // }
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


  useEffect( ()=>{
    const fetchData = async () => {
      try {
          const response = await fetch(`http://localhost:8080/Books/deletee/${bookno}`);
          if (!response.ok) {
            throw new Error('Network response was not okk');
          }
          const data = await response.json();
          console.log(data);
          // setissue(data);


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


  function submit(event){
    event.preventDefault();
    const formdata = new FormData();
    formdata.append('bookno',bookno)
    formdata.append('bookname',bookname)
    formdata.append('author',author)
    formdata.append('category',category)
    formdata.append('username',username)
    formdata.append('issueon',issueon)
    formdata.append('returnon',returnon)

    fetch('http://localhost:8080/Issuee/add', {
      method:'POST',
      body: formdata,

    })
      .then(response => response.text())
      .then(data => {
        console.log('Added successful:', data);
        status++;
        setStatus(status);
        setissue(data);
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
        <h1>Issue Books</h1>
        <center><label>Book No</label></center>
        <input placeholder="Book No" value={bookno} disabled></input><br></br>
        <center><label>Book Name</label></center>
        <input placeholder="Book Name" value={bookname} disabled></input><br></br>
        <center><label>Author Name</label></center>
        <input placeholder="Author Name" value={author} disabled></input><br></br>
        <center><label>Category</label></center>
        <input placeholder="Category" value={category} disabled></input><br></br>
        <center><label>Username</label> </center>
        <input placeholder="Username" value={username} onChange={input3}></input><br></br>
        <center><label>Issue On</label> </center>
        <input placeholder="Issue On" type="date" value={issueon} onChange={input4}></input><br></br>
        <center><label>Return On</label> </center>
        <input placeholder="Return On" type="date" value={returnon} onChange={input5}></input><br></br>
        <br></br>
        <center><button onClick={submit}>Add</button> </center>
       </div>
       </main>
   </div>
  )
}
export default BookIssue