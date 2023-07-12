import React, { useState } from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [name, setname] = useState('');
  const [vehicle, setvehicle] = useState('');

  const handleNameChange = (e) => {
    setname(e.target.value);
  };

  const handleVehicleChange = (e) => {
    setvehicle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform sign-in logic here, such as making an API call to authenticate the user
    console.log('Name:', name);
    console.log('Vehicle:', vehicle);
    // Reset form fields
    setname('');
    setvehicle('');
  };

  return (
    <div className='back' style={{width:'100vw',height:'100vh',justifyContent:'center',alignItems:'center',display:'flex',marginTop:-50}}>
    <div style={{justifyContent:'center',alignItems:'center',backgroundColor:"ButtonShadow",padding:30,marginLeft:-1000,width:'20vw'}}>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">User Name:</label>
        <input
          
          placeholder='enter your username'
          value={name}
          onChange={handleNameChange}
          required
        />
        <br></br>
        <label>Vehicle No:</label>
        <input
          
          placeholder='enter your vehicle no'
          value={vehicle}
          onChange={handleVehicleChange}
          required
        />
        <br></br>
        <button type="submit">Sign In</button>
      </form>
      <h4>new user?<Link to="Registration">signup</Link></h4>
      
    </div>
    </div>
  );
};

export default LoginPage;
