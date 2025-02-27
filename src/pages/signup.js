import { useState } from "react";
// import { Link } from "react-router-dom";
import "../styles/_signup.scss";
import Sideimg1 from "../assets/image 1100.svg";
import Google from "../assets/Google Icon.svg";
import Twitter from "../assets/Twitter Icon.svg";
import Logo from "../assets/Frame 427321331.svg";
import { Link } from "react-router-dom";

const Signup = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const validatePassword = () => {
    if (password.length < 6) {
      return "Password must be at least 6 characters long.";
    }
    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter.";
    }
    if (!/[0-9]/.test(password)) {
      return "Password must contain at least one number.";
    }
    if (password !== confirmPassword) {
      return "Passwords do not match.";
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorMessage = validatePassword();
    if (errorMessage) {
      setError(errorMessage);
    } else {
      setError("");
      alert("Sign-up successful!");
    }
  };

  return (
    <div className="signup_container">
      <Link className="relative_img" to="http://localhost:3000/#">
        {" "}
        <img src={Logo} alt="imglogo" />
      </Link>
      <div className="signup_image">
        <img src={Sideimg1} alt="Market woman smiling" />
      </div>
      <div className="signup_form">
        <h2 className="signup_heading">Sign Up</h2>
        <p className="signup_text">
          You have an account already?{" "}
          <a className="text_ll" href="/login">
            Login
          </a>
        </p>
        <form className="signup_form_element" onSubmit={handleSubmit}>
          <label for="tel">Phone Number</label>
          <input
            className="signup_input"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <label for="password">Password</label>

          <input
            className="signup_input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label for="password">Confirm Password</label>

          <input
            className="signup_input"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {error && <p className="signup_error">{error}</p>}
          <button className="signup_button" type="submit">
            Proceed
          </button>
          <label className="signup_label">
            <input className="signup_checkbox" type="checkbox" required /> I
            Agree to the{" "}
            <a className="text_ll" href="/terms">
              Terms
            </a>{" "}
            and{" "}
            <a className="text_ll" href="/terms">
              Conditions
            </a>
          </label>

          <center className="center_or">or</center>
        </form>
        <div className="signup_social_login">
          <button className="signup_google">
            <img className="google_img" src={Google} alt="google" />
            <span className="googles">Google</span>
          </button>
          <button className="signup_twitter">
            <img className="google_img" src={Twitter} alt="twitter" />
            <span className="googles">Twitter</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
