import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter,Route, Routes } from "react-router-dom";

import { Doctor } from "./components/DoctorData";
import AddDoctor from "./components/DoctorAddData";
import { Login } from "./components/Login";
import { Home } from "./components/Home";
import { Register } from "./components/Register";
import { About } from "./components/About";

import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { AdminDashboard } from "./components/AdminDashboard";
import { Doctordash } from "./components/DoctorDashboard";

import { Appointment } from "./components/Appointment";
import AppointmentForm from "./components/AppointmentForm";
import { Card } from "./components/Card";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/Under" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/doctor" element={<Doctordash />} />
          <Route path="/patient" element={<AddDoctor />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/appointment" element={<AppointmentForm />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Doctor></Doctor>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
