import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
function Seatt(){
  let[pf,setprofile]=useState("");
  let[seats,setSeats]=useState([]);
  let[status,setStatus]=useState(0);
  let {Id}=useParams();

  const createCells = (p,q) => {
    const cells = [];
    for (let i = p; i <= q; i++) {
        const seat = seats.find(seat => seat.seatNo === i);
        const isAllocated = !!seat;
        cells.push(
            <div
                className={`cell ${isAllocated ? 'allocated' : ''}`}
                key={i}
                // onClick={() => isAllocated ? remove(i) : handleCellClick(i)}
            >
                {i}
            </div>
        );
    }
    return cells;
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
      <div id="tcd"><h1>Seats</h1></div>

      <div className="con">
                <div className="box box1">{createCells(1,30)}</div>
                <div className="box box2">{createCells(31,60)}</div>
                <div className="box box3">{createCells(61,90)}</div>
            </div>
    </div>
  )
}
export default Seatt;