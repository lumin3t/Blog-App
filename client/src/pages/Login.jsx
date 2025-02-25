//import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="auth">
      <h2>Login</h2>
      {/* Login form */}
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      <p>Dont have an account?</p> <Link to="/register">Register</Link>
    </div>
  );
}

export default Login;
