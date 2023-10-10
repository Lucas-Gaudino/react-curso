import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';

const NavBar = ({cart}) => {
    return (
        <div className="d-flex flex-column">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-0 justify-content-between p-3">
            <Link to="/" className="navbar-brand">
                <img src={logo} alt="Zur-Play" width="30" height="30" className="d-inline-block align-top mr-2" />
                Zur-Play
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <Link className="nav-link text-white mr-5" to="/cart">
              <CartWidget itemCount={cart.reduce((total, item) => total + item.quantity, 0)} />
            </Link>
        </nav>

        <div className="category-bar bg-dark-blue d-flex align-items-center pl-3">
            <ul className="navbar-nav d-flex justify-content-between flex-row w-75 m-auto">
                <li className="nav-item">
                    <Link className="nav-link text-white category-link" to="/category/3">PlayStation</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white category-link" to="/category/1">X-Box</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white category-link" to="/category/2">PC</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white category-link" to="/category/4">Nintendo</Link>
                </li>
            </ul>
        </div>
    </div>

  );
}

export default NavBar;
