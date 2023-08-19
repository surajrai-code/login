import React from 'react'
import './Signup.css';

const Signup = () => {
  return (
    <>
        <h1>Signup from</h1>
        <form>
        <label htmlFor='email'>Enter your Email:</label>
        <input type='email' id='email' placeholder='Enter your email'/>
        <label htmlFor='Password'>Enter your Password:</label>
        <input type='Password' id='Password' placeholder='Enter your Password'/>
        <label htmlFor='CPassword'>Conform  your Password:</label>
        <input type='Password' id='CPassword' placeholder='Conform  your Conform Password'/>
        <button>Signup</button>
        </form>
    </>
  )
}

export default Signup