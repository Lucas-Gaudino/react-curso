import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Juegos Digitales ZS</a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">PlayStation</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">X-Box</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">PC</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Nintendo</a>

          </li>
          
        </ul>
      </div>
        <CartWidget />
    </nav>
  );
}

export default NavBar;
