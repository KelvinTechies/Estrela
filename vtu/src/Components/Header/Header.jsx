import React from "react";
import "./Header.css";
import Hero from "../Hero/Hero";
import Products from "../Products/Products";
import Footer from "../Footer/Footer";
function Header() {
  return (
    <div>
      <div className="nav">
        <div className="h1">EazyCharge</div>
        <div className="nav_2">
          <nav>
            <ul>
              <li>Home </li>
              <li>About Us </li>
              <li>Services </li>
              <li>Register </li>
              <li>Login </li>
            </ul>
          </nav>
        </div>
      </div>
      <Hero />
      <Products />
    </div>
  );
}

export default Header;
