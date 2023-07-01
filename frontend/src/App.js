import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter,Route, Routes } from "react-router-dom";

import { Doctor } from "./Components/DoctorData";
import AddDoctor from "./Components/DoctorAddData";
import { Login } from "./Components/Login";
import { Home } from "./Components/Home";
import { Register } from "./Components/Register";
import { About } from "./Components/About";

import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/patient" element={<AddDoctor />} />
          <Route path="/register" element={<Register />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
