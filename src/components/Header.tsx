import React from 'react'
import logo from "../assets/logo.png"

function Header() {
  return (
    <header>
      <img src={logo} alt="logo" className="logo" />
      <nav>
        <ul>
          <li>Home</li>
          <li>Apply</li>
          <li>Jobs</li>
          <li>Result</li>
          <li>Courses</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header