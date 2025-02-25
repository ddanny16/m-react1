import { useState } from "react";
// import { Link } from "react-router-dom";
import "../styles/_signup.scss";


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
        <div className="signup_image">
          <img src="/path-to-your-image.jpg" alt="Market woman smiling" />
        </div>
        <div className="signup_form">
          <h2 className="signup_heading">Sign Up</h2>
          <p className="signup_text">You have an account already? <a href="/login">Login</a></p>
          <form className="signup_form_element" onSubmit={handleSubmit}>
            <input
              className="signup_input"
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <input
              className="signup_input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              className="signup_input"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {error && <p className="signup_error">{error}</p>}
            <label className="signup_label">
              <input className="signup_checkbox" type="checkbox" required /> I Agree to the Terms and Conditions
            </label>
            <button className="signup_button" type="submit">Proceed</button>
          </form>
          <div className="signup_social_login">
            <button className="signup_google">Google</button>
            <button className="signup_twitter">Twitter</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Signup; 