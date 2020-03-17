import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
  <section id="navbar">
    <h1 className="title-text"><a className="main-title" href="http://localhost:3000/">Guess With Friends</a></h1>
    {/* <ul class>
      <li>
        <Link to="/">Dashboard</Link>
      </li>
      <li>
        <Link to="/add-game">Add New Game</Link>
      </li>
    </ul> */}
  </section>
)



export default NavBar;
