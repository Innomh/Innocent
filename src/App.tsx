// App.js
import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">🍴 My Restaurant</h2>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header id="home" className="hero">
        <h1>Welcome to My Restaurant</h1>
        <p>Delicious food, cozy vibes, and great memories.</p>
        <a href="#menu" className="btn">
          See Menu
        </a>
      </header>

      {/* Menu Section */}
      <section id="menu" className="section">
        <h2>Our Menu</h2>
        <div className="menu-grid">
          <div className="menu-item">
            <h3>🍕 Pizza</h3>
            <p>Freshly baked with your favorite toppings</p>
          </div>
          <div className="menu-item">
            <h3>🍔 Burgers</h3>
            <p>Juicy beef burgers with crispy fries</p>
          </div>
          <div className="menu-item">
            <h3>🥗 Salads</h3>
            <p>Healthy and tasty options for everyone</p>
          </div>
          <div className="menu-item">
            <h3>🍰 Desserts</h3>
            <p>Sweet treats to end your meal</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about">
        <h2>About Us</h2>
        <p>
          At My Restaurant, we believe food brings people together. With fresh
          ingredients and love in every dish, we create experiences you’ll never
          forget.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <h2>Contact Us</h2>
        <p>📍 123 Food Street, Flavor Town</p>
        <p>📞 +27 123 456 789</p>
        <p>📧 hello@myrestaurant.com</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 My Restaurant | All Rights Reserved</p>
      </footer>
    </div>
  );
}
