import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Link } from "@mui/material";

const Header = () => {
  const authCtx = useContext(AuthContext);

  return (
    <>
      {authCtx.isLoggedIn ? (
        <>
          <Link href="/data">Data</Link>
          <Link href="/logout" onClick={authCtx.logout}>Logout</Link>
        </>
      ) : (
        <Link href="/login" variant="body2">
          Login
        </Link>
      )}
    </>
  );
};

export default Header;