import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="auth">
      <h2>Register</h2>
      {/* Register form */}
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Register</button>
      </form>
      <p>Already have an account?</p> <Link to="/login">Login</Link>
    </div>
  );
}
export default Register;
