import React, { useState } from "react";
import "./Signup.css";
import axios from 'axios';

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [cpassword, setCpassword] = useState();
  const [input, setInput] = useState([]);
  const submithandler=(e)=>{
    e.preventDefault();
    const newInput={name,email,password,cpassword}
    setInput([...input,newInput]);
    setEmail('');
    setName('');
    setCpassword('');
    setPassword('');
    postData();
  }
  const postData=()=>{
    axios.post('http://localhost:3000/signup',input).then((res)=>{
      console.log(res);
    })
    .catch((err)=>{
      console.error("Error", err)})
    
  }
  return (
    <>
      <h1>Signup from</h1>
      <form>
        <label htmlFor="name">Enter your name:</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Enter your Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="Password">Enter your Password:</label>
        <input
          type="Password"
          id="Password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="CPassword">Conform your Password:</label>
        <input
          type="Password"
          id="CPassword"
          placeholder="Conform  your Conform Password"
          value={cpassword}
          onChange={(e) => setCpassword(e.target.value)}
        />
        <button type="submit" onClick={submithandler}>Signup</button>
      </form>
    </>
  );
};

export default Signup;
