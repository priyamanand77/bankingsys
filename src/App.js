import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import MainAllUser from "./components/MainAllUser";
import MainAllAdmins from "./components/MainAllAdmin";
import AboutUs from "./components/AboutUs";
import TechinalIssue from "./components/TechinicalIssue";

function App() {
  return (
    <div>
      <Router>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<LandingPage/>} />
          <Route path="/users" element={<MainAllUser/>} />
          <Route path="/admin" element={<MainAllAdmins />} />
          <Route path ="/about" element={<AboutUs/>} />
          <Route path ="/techinicalproblem" element={<TechinalIssue/>} />
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
