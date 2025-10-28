import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Seat.css";
function Seat(){
  let[pf,setprofile]=useState("");
  let[seats,setSeats]=useState([]);
  let[status,setStatus]=useState(0);
  let {Id}=useParams();

  const [formData, setFormData] = useState({ seatNo: '', rollNumber: '', entryDate: '', entryTime: '' });

  const [formVisible, setFormVisible] = useState(false);

  const handleCloseForm = () => {
    setFormVisible(false);
};

  const createCells = (p,q) => {
    const cells = [];
    for (let i = p; i <= q; i++) {
        const seat = seats.find(seat => seat.seatNo === i);
        const isAllocated = !!seat;
        cells.push(
            <div
                className={`cell ${isAllocated ? 'allocated' : ''}`}
                key={i}
                onClick={() => isAllocated ? remove(i) : handleCellClick(i)}
            >
                {i}
            </div>
        );
    }
    return cells;
};

const remove = async (id) => {
  try {
      const confirmed = window.confirm('Are you sure you want to free this seat?');
      if (!confirmed) {
          return; // If user cancels, do nothing
      }
      const response = await fetch(`http://localhost:8080/seat/delete/${id}`);
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const data = await response.text();
      console.log('Successfully Deleted:', data);
      setStatus(prevStatus => prevStatus + 1);
  } catch (error) {
      console.error('Error during Deletion:', error);
  }
};

const handleCellClick = (seatNo) => {
  setFormData({ ...formData, seatNo });
  setFormVisible(true);
};

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};

const handleSubmit = (e) => {
  e.preventDefault();
  const formBody = new URLSearchParams(formData).toString();

  fetch('http://localhost:8080/seat/added', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formBody,
  })
      .then(response => response.text())
      .then(data => {
          console.log('SignUp successful:', data);
          setStatus(prevStatus => prevStatus + 1);
      })
      .catch(error => {
          console.error('Error during SignUp:', error);
      });

  setFormVisible(false);
};

useEffect(() => {
  const fetchData = async () => {
      try {
          const response = await fetch('http://localhost:8080/seat/get');
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setSeats(data);
      } catch (error) {
          console.error('Error fetching data: ', error.message);
      }
  };

  fetchData();
}, [status]);

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
      <div id="tcd"><h1>Seats</h1></div>

      <div className="con">
                <div className="box box1">{createCells(1,30)}</div>
                <div className="box box2">{createCells(31,60)}</div>
                <div className="box box3">{createCells(61,90)}</div>
            </div>
            {formVisible && (
                <div className="form-container">
                    <button className="close-button" onClick={handleCloseForm}>X</button>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Seat No:</label>
                            <input type="text" name="seatNo" value={formData.seatNo} readOnly />
                        </div>
                        <div>
                            <label>Roll Number:</label>
                            <input type="text" name="rollNumber" value={formData.rollNumber} onChange={handleInputChange} />
                        </div>
                        <div>
                            <label>Entry Date:</label>
                            <input type="date" name="entryDate" value={formData.entryDate} onChange={handleInputChange} />
                        </div>
                        <div>
                            <label>Entry Time:</label>
                            <input type="time" name="entryTime" value={formData.entryTime} onChange={handleInputChange} />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            )}
    </div>
  )
}
export default Seat;