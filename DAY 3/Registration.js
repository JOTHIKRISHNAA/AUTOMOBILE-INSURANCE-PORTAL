import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  const [username, setname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setphone] = useState('');
  const [vehicle, setvehicle] = useState('');
  const [licence, setlicence] = useState('');
  

  const handleNameChange = (e) => {
    setname(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setphone(e.target.value);
  };
  const handleVehicleChange = (e) => {
    setvehicle(e.target.value);
  };
  const handleLicenceChange = (e) => {
    setlicence(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform sign-up logic here, such as making an API call to create a new user
    console.log('Username:', username);
    console.log('phone no:', phone);
    console.log('Email:', email);
    console.log('Vehicle:', vehicle);
    console.log('Licence:', licence);
    // Reset form fields
    setname('');
    setphone('');
    setEmail('');
    setvehicle('');
    setlicence('');
  };

  return (
    <div className='back' style={{width:'100vw',height:'100vh',justifyContent:'center',alignItems:'center',display:'flex',marginTop:-50,paddingTop:-100}}>
    <div style={{justifyContent:'center',alignItems:'center',backgroundColor:"ButtonShadow",padding:40,marginLeft:-1000,width:'20vw',height:'40vw',overflowY:'scroll'}}>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label >User Name:</label>
        <input
        type="text"
        onChange={handleNameChange}
        placeholder='enter your name'
        required
        />
        <label>Mobile No:</label>
        <input
          type="number"
          pattern="[0-9]*"
          value={phone}
          onChange={handlePhoneChange}
          placeholder='enter your phone number'
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder='enter your Email'
          value={email}
          onChange={handleEmailChange}
          required
        />
        
        <label>Vehicle No:</label>
        <input
          
          value={vehicle}
          placeholder='enter your vehicle number'
          onChange={handleVehicleChange}
          required
        />

        <label>Licence No:</label>
        <input
        
        
          value={licence}
          placeholder='enter your licence number'
          onChange={handleLicenceChange}
          required
        />
        <br></br>
        <label>Vehicle Type:
          <br></br>
            <select>
           
            <option>Two Wheeler</option>
            <option>Four Wheeler</option>
            </select>
        </label>
        <br></br>
        <label>Vehicle Model:</label>
        <input
        placeholder='enter vehicle model'
        type="text"
        
        />
        <label>Licence proof:</label>
        
        <input
        placeholder='enter vehicle model'
        type="file"
        
        />
        <button type="submit">Sign Up</button>

        <h4>Already User?<Link to='/'>Sign in</Link></h4>
      </form>
    </div>
    </div>
  );
};

export default SignupPage;
