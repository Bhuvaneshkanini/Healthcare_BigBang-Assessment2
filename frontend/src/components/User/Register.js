import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { toast,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const RegisterTeacher = () => {
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [specializationId, setSpecializationId] = useState(0);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState(0);
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [image, setImage] = useState("");
  const [patients, setPatients] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (validateUser()) {
      const userData = {
        userName: username,
        password:password
      };
      fetch("http://localhost:5193/api/User", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(userData),
      })
        .then((res) => res.json())
        .then((resp) => {
          console.log(resp);
          if (Object.keys(resp).length === 0) {
            toast.error("Login failed, invalid credentials");
          } else {
            toast.success("Success");
            if (role === "doctor") {
              addDoctor();
            }
            if (role === "patient") {
              addPatient();
            }
            //window.alert("Registered Successfully" + resp);
            navigate("/");
          }
        })
        .catch((err) => {
          window.alert("invalid credentials");
          toast.error("Login Failed due to: " + err.message);
        });
    }
  };

  const addDoctor = () => {
    if (validate()) {
      const doctorData = {
        firstName:firstName,
        lastName:lastName,
        age:age,
        gender:gender,
        specializationID: specializationId,
        email:email,
        phone:phone,
        education:education,
        experience:experience,
        address:address,
        description:description,
        status: "Inactive",
        image:"",
      };
      
      fetch("http://localhost:5193/api/Doctor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(doctorData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          toast.success("Doctor added successfully");
          setFirstName("");
          setLastName("");
          setAge(0);
          setGender("");
          setSpecializationId(0);
          setEmail("");
          setPhone("");
          setEducation("");
          setExperience(0);
          setAddress("");
          setDescription("");
          setStatus("");
          setImage("");
        })
        .catch((error) => {
          console.error(error);
          toast.error("Failed to add doctor");
          console.log(error)
        });
    }
  };

  const addPatient = () => {
    if (validate()) {
      const patientData = {
        firstName,
        lastName,
        age,
        email,
        phone,
        address,
      };
      fetch("http://localhost:5193/api/Patient", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(patientData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          toast.success("Patient added successfully");
          setFirstName("");
          setLastName("");
          setAge(0);
          setEmail("");
          setPhone("");
          setAddress("");
        })
        .catch((error) => {
          console.error(error);
          toast.error("Failed to add patient");
        });
    }
  };

  const validate = () => {
    let result = true;
    return result;
  };

  const validateUser = () => {
    let result = true;
    if (username === "" || username === null) {
      result = false;
    }
    if (password === "" || password === null) {
      result = false;
    }
    return result;
  };

  

  return (
    <div className="row">
      <ToastContainer />
      <div className="offset-lg-3 col-lg-6" style={{ marginTop: "100px" }}>
        <form onSubmit={handleRegister} className="container">
          <div className="card">
            <div className="card-header">
              <h2>Register</h2>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label>
                  User Name <span className="errmsg">*</span>
                </label>
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>
                  Email <span className="errmsg">*</span>
                </label>
                <input
                  value={useremail}
                  onChange={(e) => setUseremail(e.target.value)}
                  className="form-control"
                  autoComplete="off"
                />
              </div>
              <div className="form-group">
                <label>
                  Password <span className="errmsg">*</span>
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="exampleDropdown">Role</label>
                <select
                  className="form-control"
                  id="exampleDropdown"
                  onChange={(e) => setRole(e.target.value)}
                  required
                >
                  <option value="">--Role--</option>
                  <option value="doctor">Doctor</option>
                  <option value="patient">Patient</option>
                </select>
              </div>
            </div>

            {role === "doctor" && (
              <div className="py-3">
                <div className="form-group ">
                  <label>First Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Last Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Age:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Gender:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Specialization ID:</label>
                  <input
                    className="form-control"
                    type="number"
                    value={specializationId}
                    onChange={(e) => setSpecializationId(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    value={email}
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Phone:</label>
                  <input
                    className="form-control"
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Education:</label>
                  <input
                    className="form-control"
                    type="text"
                    value={education}
                    onChange={(e) => setEducation(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Experience:</label>
                  <input
                    className="form-control"
                    type="number"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Address:</label>
                  <input
                    className="form-control"
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Description:</label>
                  <input
                    className="form-control"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  
                  <div className="form-group">
                <label>Image:</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="form-control"
                /></div>

                </div>
              </div>
            )}

            {role === "patient" && 
            (<div className="py-3">
              <div className="form-group">
                <label>First Name:</label>
                <input
                  type="text"
                  className="form-control"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Last Name:</label>
                <input
                  type="text"
                  className="form-control"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Age:</label>
                <input
                  type="text"
                  className="form-control"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  value={email}
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Phone:</label>
                <input
                  className="form-control"
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Address:</label>
                <input
                  className="form-control"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
          )}

            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
