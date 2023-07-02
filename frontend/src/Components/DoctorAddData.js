import React, { useState } from 'react';
import { Home } from './Home';

function AddDoctor() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5193/api/Doctor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName }),
      });

      if (response.ok) {
        // Doctor added successfully, perform any necessary actions
        console.log('Doctor added successfully');
      } else {
        // Handle error case
        console.log('Error adding doctor');
      }
    } catch (error) {
      console.log(error);
    }

    // Reset form inputs
    setFirstName('');
    setLastName('');
  };

  return (
    <div>
      <h1>Add Doctor</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>
        <button type="submit">Add Doctor</button>
      </form>
    </div>
  );
}

export default AddDoctor;
