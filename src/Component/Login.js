import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { Button, Input, Box } from "@mui/material";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const authCtx = useContext(AuthContext);

  const switchHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("clicked");
    let url;

    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD4sZ6CEqGtzzuHodoCgc6CcDi2z3YOLGQ";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD4sZ6CEqGtzzuHodoCgc6CcDi2z3YOLGQ";
    }

    try {
      const response = await axios.post(url, {
        email,
        password,
        returnSecureToken: true,
      });

      const data = response.data;
      authCtx.login(data.idToken);
      authCtx.setEmail(email);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="login-box">
      <Box>
        <form className="login-form">
          <h1>User Login</h1>
          <label htmlFor="email">Email Id:</label>
          <br />
          <Input
            id="email"
            type="email"
            value={email}
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <Input
            id="password"
            type="password"
            value={password}
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <Button variant="contained" type="submit" onClick={submitHandler}>
            {isLogin ? "Login" : "Create New Account"}
          </Button>

          <Button variant="contained" type="button" onClick={switchHandler}>
            {isLogin ? "Create New Account" : "Login with Existing Account"}
          </Button>
          <br />
          <br />
        </form>
      </Box>
    </div>
  );
};

export default Login;
