import React, { Component } from "react";
import chatHistory from "./chatHistory";
import eventHistory from "./eventHistory";
import Rooms from "./Rooms";
import "./Navbar.css";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="Navbar">
        <Link to="/Login">
          <h3>Logout</h3>
        </Link>
        <ul className="navLink">
          <Link to="/eventHistory">
            <li>eventHistory</li>
          </Link>
          <Link to="/chatHistory">
            <li>chatHistory</li>
          </Link>
          <Link to="/Rooms">
            <li>Rooms</li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
