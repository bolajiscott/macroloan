import React, { useState, useRef } from "react";
import axios from 'axios';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const SignUp = ()=> {
  const userRef = useRef();
  const errRef = useRef();
  
  const [surname, setSurname] = useState('');
  const [firstname, setFirstName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [mobile, setMobile] = useState('');
  const [dob, setDob] = useState('');
  const [occupation, setOccupation] = useState('');
  const [placeOfWork, setPlaceOfWork] = useState('');
  const [role, setRole] = useState('');
  const [address, setAddress] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
          const response = await axios.post("https://macroloan-backend.herokuapp.com/api/auth/signup"
      ,
        { surname, firstname, password, email, gender, mobile, dob, occupation,
          placeOfWork, role, address
        }
      );
      console.log(response);
      
    } catch (err) {
        console.log(err);
    }


  }

    return (
      <form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>Surname</label>
          <input
            type="text"
            className="form-control"
            placeholder="Surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>    
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Gender</label>
          <input
            type="text"
            className="form-control"
            placeholder="Gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Mobile</label>
          <input
            type="text"
            className="form-control"
            placeholder="Mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Date of birth</label>
          <input 
            type="date" 
            className="form-control" 
            placeholder="Date of birth" 
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Occupation</label>
          <input
            type="occupation"
            className="form-control"
            placeholder="Occupation"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Place of work</label>
          <input
            type="place of work"
            className="form-control"
            placeholder="place of work"
            value={placeOfWork}
            onChange={(e) => setPlaceOfWork(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Role</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder="role" 
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Address</label>
          <input
            type="text"
            className="form-control"
            placeholder="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    );
  }

  export default SignUp
