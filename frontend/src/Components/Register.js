import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetch("http://localhost:5193/api/Specialization")
      .then((response) => response.json())
      .then((data) => {
        setSpecialization(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // User data
    const user = {
      userName: username,
      useremail: useremail,
      password: password,
      role: role,
    };

    // Doctor data
    const doctor = {
      name: doctorName,
      specializationId: specialization,
      age: age,
      gender: gender,
      phone: phone,
      education: education,
      experience: experience,
      address: address,
      description: description,
    };

    // Make the API call to register the user
    fetch("http://localhost:5193/api/User/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((userData) => {
        // Check if the user registration was successful
        if (userData.success) {
          // Use the returned user ID to associate the doctor with the user
          doctor.userId = userData.id;

          // Make the API call to create the doctor
          fetch("http://localhost:5193/api/Doctor", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(doctor),
          })
            .then((response) => response.json())
            .then((doctorData) => {
              console.log("Doctor created successfully:", doctorData);
              toast.success("User registered successfully with doctor");
              // Redirect to login page or perform any other necessary action
            })
            .catch((error) => {
              toast.error("An error occurred during doctor creation");
              console.error(error);
            });
        } else {
          toast.error("User registration failed");
        }
      })
      .catch((error) => {
        toast.error("An error occurred during user registration");
        console.error(error);
      });
  };

  return (
    <div className="row">
      <div className="offset-lg-3 col-lg-6" style={{ marginTop: "100px" }}>
        <form onSubmit={handleSubmit} className="container">
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
                <label>Role</label>
                <select
                  className="form-control"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                >
                  <option value="">--Role--</option>
                  <option value="patient">Patient</option>
                  <option value="doctor">Doctor</option>
                </select>
              </div>

              {role === "doctor" && (
                <div>
                  <h4>Doctor Details</h4>
                  <div className="form-group">
                    <label>
                      Doctor Name <span className="errmsg">*</span>
                    </label>
                    <input
                      value={doctorName}
                      onChange={(e) => setDoctorName(e.target.value)}
                      className="form-control"
                    />
                  </div>
                  {specialization === null ? (
                    <p>No Data Found</p>
                  ) : (
                    <div className="form-group">
                      <label>
                        Specialization <span className="errmsg">*</span>
                      </label>
                      <select
                        value={specialization}
                        onChange={(e) => setSpecialization(e.target.value)}
                        className="form-control"
                      >
                        <option value="">--Select Specialization--</option>
                        {specialization.map((item) => (
                          <option key={item.id} value={item.id}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  <div className="form-group">
                    <label>
                      Age <span className="errmsg">*</span>
                    </label>
                    <input
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      className="form-control"
                      type="number"
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      Gender <span className="errmsg">*</span>
                    </label>
                    <input
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      Phone <span className="errmsg">*</span>
                    </label>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Education</label>
                    <input
                      value={education}
                      onChange={(e) => setEducation(e.target.value)}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Experience</label>
                    <input
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                      className="form-control"
                      type="number"
                    />
                  </div>
                  <div className="form-group">
                    <label>Address</label>
                    <input
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <input
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>
              )}
            </div>
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
