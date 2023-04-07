import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {

const [name, setName] = useState(' ');
const [email, setEmail] = useState(' ');
const [gender, setGender] = useState('male');
const [phoneNumber, setPhoneNumber] = useState(' ');
const [password , setPassword] = useState(' ');
const [errorMessage, setErrorMessage ] = useState(' ');

if (name === '' || email === '' || gender === '' || phoneNumber === '' || password === '') {
  setErrorMessage('All fields are mandatory');
} else if (!name.match(/^[a-zA-Z0-9 ]+$/)) {
  setErrorMessage('Name is not alphanumeric');
} else if (!email.includes('@')) {
  setErrorMessage('Email must contain @');
} else if (gender !== 'male' && gender !== 'female' && gender !== 'other') {
  setErrorMessage('Please identify as male, female or other');
} else if (!phoneNumber.match(/^\d+$/)) {
  setErrorMessage('Phone Number must contain only numbers');
} else if (password.length < 6) {
  setErrorMessage('Password must contain atleast 6 letters');
} else {
  setErrorMessage('');

 
  const username = email.split('@')[0];
  alert(`Hello ${username}! Form submitted successfully`);
}
};

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          data-testid="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          data-testid="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="gender">Gender:</label>
        <select id="gender" data-testid="gender" value={gender} onChange={(event) => setGender(event.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          data-testid="phoneNumber"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          data-testid="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div>
        <button type="submit" data-testid="submit">
          Submit
        </button>
      </div>
      {errorMessage !== '' && <p>{errorMessage}</p>}
    </form>
  );



export default App;
