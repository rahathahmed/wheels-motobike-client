import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Img/logo.png';
import './Header.css'
const Header = () => {
    return (
        <div>
              <nav style={{background:'#1c232d'}} class="navbar navbar-expand-lg navbar-light fixed-top">
                <img src={logo} width="100px" class="navbar-brand"  alt="logo" />
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse  " id="navbarNav">
                    <ul class="navbar-nav  ms-auto ">
                    <li class="nav-item active">
                        <Link class="nav-link text-white" to="/home"  href="#">Home </Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/products" href="#">Products</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link"to="/about"  href="#">About</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link"to="/login"  href="#">Login</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/register" href="#">Register</Link>
                    </li>
                    <Link class="nav-link" to="/login" href="#">
                        <button className="btn btn-danger"> Log In</button>
                    </Link>

                    </ul>
                </div>
            </nav>
           
        </div>
    );
};

export default Header;