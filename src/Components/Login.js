import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [input, setInput] = useState([]);
  const submitHandler=()=>{
    setInput([...input,{email,password}]);
    setEmail('');
    setPassword('');
  }

  return (
    <div>
      <h1>Login page</h1>
      <form>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          placeholder="enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
        id="password"
          placeholder="enter your password"
          value={password}
          onChange={(e) => setPassword}
        />
        <button type="submit" onClick={submitHandler}>Login</button>
      </form>
    </div>
  );
};

export default Login;
