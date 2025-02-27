import { useState } from "react";
import "../styles/_signup.scss";
import Sideimg2 from "../assets/image 1100 (1).svg";
import Google from "../assets/Google Icon.svg";
import Twitter from "../assets/Twitter Icon.svg";
import Logo from "../assets/Frame 427321331.svg";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    setError("");
    alert("Login successful!");
  };

  return (
    <div className="signup_container">
      <Link className="relative_img" to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <div className="signup_image">
        <img src={Sideimg2} alt="Market woman smiling" />
      </div>
      <div className="signup_form">
        <h2 className="signup_heading">Login</h2>
        <p className="signup_text">
          Don't have an account?{" "}
          <Link className="text_ll" to="/signup">
            Sign Up
          </Link>
        </p>
        <form className="signup_form_element" onSubmit={handleSubmit}>
          <label htmlFor="email">Email Address</label>
          <input
            className="signup_input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            className="signup_input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="signup_error">{error}</p>}

          <button className="signup_button" type="submit">
            Login
          </button>

          <label className="signup_label">
            <input className="signup_checkbox" type="checkbox" required /> I
            Agree to the{" "}
            <Link className="text_ll" to="/terms">
              Terms
            </Link>{" "}
            and{" "}
            <Link className="text_ll" to="/terms">
              Conditions
            </Link>
          </label>

          <center className="center_or">or</center>
        </form>

        <div className="signup_social_login">
          <button className="signup_google">
            <img className="google_img" src={Google} alt="Google" />
            <span className="googles">Google</span>
          </button>
          <button className="signup_twitter">
            <img className="google_img" src={Twitter} alt="Twitter" />
            <span className="googles">Twitter</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
