import React from 'react';
import { Link } from 'react-router-dom';
import './styles/NavBar.css';

const NavBar = () => (
  <>
  <section id="navbar">
    <div id="left-nav">
      <h1 className="site-name"><a href="http://localhost:3000/">Guess With Friends</a></h1>
      <p className="sub-heading">Compete against your friends wherever your interests lie!</p>
    </div>
    <div id="right-nav">
        <ul id="navbar-items">
          <li>
           <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/add-game">Add New Game</Link>
          </li>
      </ul>
    </div>
  </section>
  <hr/>
  </>
)



export default NavBar;
