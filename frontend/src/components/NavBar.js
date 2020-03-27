import React from 'react';
import { Link } from 'react-router-dom';
import './styles/NavBar.css';

const NavBar = (props) => (
  <>
  <section id="navbar">
    <div id="left-nav">
      <h1 className="site-name">Guess With Friends</h1>
      <p className="sub-heading">Predict the future!</p>
    </div>
    <div id="right-nav">
        <p>Susan is logged in</p>
        <ul id="navbar-items">
          <li>
           <Link to="/" onClick={props.resetSelectedGame}>Dashboard</Link>
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
