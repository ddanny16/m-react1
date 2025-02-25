import { useState } from "react";
import "../styles/_login.scss";

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
    <div className="login_container">
      <div className="login_image">
        <img src="/path-to-your-image.jpg" alt="Market woman selling" />
      </div>
      <div className="login_form_container">
        <h2 className="login_heading">Welcome back!</h2>
        <p className="login_text">
          Don’t have an account? <a href="/signup">Sign Up</a>
        </p>
        <form className="login_form" onSubmit={handleSubmit}>
          <input
            className="login_input"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="login_input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="login_error">{error}</p>}
          <button className="login_button" type="submit">Login</button>
        </form>
        <p className="login_forgot_password">
          <a href="/forgot-password">Forgot Password?</a>
        </p>
        <div className="login_social_login">
          <button className="login_google">Google</button>
          <button className="login_twitter">Twitter</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
