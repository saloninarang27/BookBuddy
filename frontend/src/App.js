import { Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Student/Profile";
import AdminLogin from "./Pages/AdminLogin";
import AdProfile from "./Admin/AdProfile";
import AddBooks from "./Admin/AddBooks";
import Students from "./Admin/Students";
import AddStudents from "./Admin/AddStudents";
import Books from "./Admin/Books";
import StBooks from "./Student/StBooks";
import Issue from "./Admin/Issue";
import DeleteBooks from "./Admin/DeleteBooks";
import BookIssue from "./Admin/BookIssue";
import Records from "./Admin/Records";
import BoIssue from "./Student/BoIssuee";
import Request from "./Student/Request";
import Feedback from "./Admin/Feedback";
import ReturnBooks from "./Admin/ReturnBooks";
import DateReturn from "./Admin/DateReturn";
import History from "./Student/History";
import StPending from "./Student/StPending";
import Pending from "./Admin/Pending";
import Seat from "./Admin/Seat";
import Seatt from "./Student/Seatt";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Profile/:Id" element={<Profile/>}/>
      {/* <Route path="/" element={<Profile/>}/> */}
      <Route path="/AdminLogin" element={<AdminLogin/>}/>
      <Route path="/AdProfile/:Id" element={<AdProfile/>}/>
      <Route path="/AddBooks/:Id" element={<AddBooks/>}/>
      <Route path="/Students/:Id" element={<Students/>}/>
      <Route path="/AddStudents/:Id" element={<AddStudents/>}/>
      <Route path="/Books/:Id" element={<Books/>}/>
      <Route path="/StBooks/:Id" element={<StBooks/>}/>
      <Route path="/Issue/:Id" element={<Issue/>}/>
      <Route path="/DeleteBooks/:Id" element={<DeleteBooks/>}/>
      <Route path="/BookIssue/:Id/:bookno/:bookname/:author/:category" element={<BookIssue/>}/>
      <Route path="/Records/:Id" element={<Records/>}/>
      <Route path="/BoIssue/:Id/:username" element={<BoIssue/>}/>
      <Route path="/Request/:Id" element={<Request/>}/>
      <Route path="/Feedback/:Id" element={<Feedback/>}/>
      <Route path="/ReturnBooks/:Id" element={<ReturnBooks/>}/>
      <Route path="/DateReturn/:Id/:BId" element={<DateReturn/>}/>
      <Route path="/History/:Id/:username" element={<History/>}/>
      <Route path="/StPending/:Id/:username" element={<StPending/>}/>
      <Route path="/Pending/:Id" element={<Pending/>}/>
      <Route path="/Seat/:Id" element={<Seat/>}/>
      <Route path="/Seatt/:Id" element={<Seatt/>}/>
    </Routes>
  );
}

export default App;
