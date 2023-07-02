import React, { useState } from 'react';

const AppointmentForm = () => {
  const [doctorId, setDoctorId] = useState('');
  const [patientId, setPatientId] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission or data processing here
    // You can use the values of the state variables (doctorId, patientId, appointmentDate, description) for further processing

    // Reset the form after submission
    setDoctorId('');
    setPatientId('');
    setAppointmentDate('');
    setDescription('');
  };

  return (
    <div>
      <h2>Appointment Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="doctorId">Doctor ID:</label>
          <input
            type="number"
            id="doctorId"
            value={doctorId}
            onChange={(e) => setDoctorId(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="patientId">Patient ID:</label>
          <input
            type="number"
            id="patientId"
            value={patientId}
            onChange={(e) => setPatientId(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="appointmentDate">Appointment Date:</label>
          <input
            type="datetime-local"
            id="appointmentDate"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
