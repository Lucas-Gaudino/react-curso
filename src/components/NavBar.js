import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">

        <Link to="/" className="navbar-brand">
            <img src={logo} alt="Zur-Play" width="30" height="30" className="d-inline-block align-top mr-2" />
            Zur-Play
        </Link>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link text-white" to="/category/playstation">PlayStation</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-white" to="/category/xbox">X-Box</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-white" to="/category/pc">PC</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-white" to="/category/nintendo">Nintendo</Link>
            </li>
            </ul>
        </div>

        <div className="d-flex ml-auto cart-widget">
            <CartWidget />
        </div>
    </nav>
  );
}

export default NavBar;
