import React from 'react'
import './Header.scss'

import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src="assets/icons/logo.png" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="uil uil-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/category">Category</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About Us</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="uil uil-search"></i></a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cart"><i className="uil uil-shopping-cart"></i></Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="uil uil-user"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header