import "./App.css";
import { BrowserRouter,Route, Routes,useLocation } from "react-router-dom";

import { DoctorDataCards } from "./components/DoctorDataCards";
import AddDoctor from "./components/DoctorAddData";
import { Login } from "./components/Login";
import { Home } from "./components/Home";
import { Register } from "./components/Register";
import { About } from "./components/About";

import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { AdminDashboard } from "./components/AdminDashboard";
import { Doctordash } from "./components/PatientDashboard";

import { Appointment } from "./components/Appointment";
import AppointmentForm from "./components/AppointmentForm";
import { Card } from "./components/Card";
import AddSpecialization from "./components/AddSpecilization";
import ViewSpecializations from "./components/ViewSpecialization";
import { PatientDashboard } from "./components/PatientDashboard";
import { DoctorDashboard } from "./components/DoctorsDashboard";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Home1" element={<Home />} />
          
          <Route path="/doctor" element={<DoctorDashboard />} />
          <Route path="/patient" element={<PatientDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/Doctorview" element={<AdminDashboard />} />
          
          <Route path="/appointment" element={<AppointmentForm />} />
          <Route path="/addspecialization" element={<AddSpecialization />} />
          <Route path="/viewspecialization" element={<ViewSpecializations />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Under" element={<DoctorDataCards></DoctorDataCards>}></Route>
          <Route path="/logged-in" element={<Home></Home>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
