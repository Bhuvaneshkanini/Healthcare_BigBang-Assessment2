import "./App.css";
import { BrowserRouter,Route, Routes} from "react-router-dom";

import { Login } from "./components/User/Login";
import { Home } from "./components/Home";
import { About } from "./components/About";

import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { AdminDoctorDashboard } from "./components/Admin/AdminDoctorDashboard";
import AppointmentForm from "./components/AppointmentForm";

import ViewSpecializations from "./components/ViewSpecialization";

import { DoctorDashboard } from "./components/Doctor/DoctorsDashboard";

import AddSpecialization from "./components/Patient/AddSpecilization";
import {PatientDashboard} from "./components/Patient/PatientDashboard";
import { RegisterTeacher } from "./components/User/Register";
import { AdminPatientDashboard } from "./components/Admin/AdminPatientDashboard";
import { UnauthorizedPage } from "./components/User/Unauthorized";
import UnderConstruction from "./components/User/UnderContruction";




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
          <Route path="/admin" element={<AdminDoctorDashboard />} />
          <Route path="/Doctorview" element={<AdminDoctorDashboard />} />
          <Route path="/Patientview" element={<AdminPatientDashboard />} />
          <Route path="/appointment" element={<AppointmentForm />} />
          <Route path="/addspecialization" element={<AddSpecialization />} />
          <Route path="/viewspecialization" element={<ViewSpecializations />} />
          <Route path="/register" element={<RegisterTeacher />} />
          <Route path="/logged-in" element={<Home></Home>}></Route>
          <Route path="/unauthorized" element={<UnauthorizedPage></UnauthorizedPage>}></Route>
          <Route path="/undercontruct" element={<UnderConstruction></UnderConstruction>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
