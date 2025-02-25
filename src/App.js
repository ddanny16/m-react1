import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import First from "./components/first";
import Header from "./components/header";
import Hero from "./components/hero";
import Brand from "./components/brands";
import Category from "./components/category";
import Cat from "./components/cat";
import Customer from "./components/customer";
import Collection from "./components/collection";
import Popular from "./components/popular";
import Banner from "./components/banner";
import Footer from "./components/footer";
import Login from "./pages/login";  // Import Login page
import SignUp from "./pages/signup"; // Import SignUp page

function App() {
  return (
    <Router>
      <First />
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Brand />
            <Category />
            <Cat />
            <Customer />
            <Collection />
            <Popular />
            <Banner />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
