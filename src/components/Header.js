import React from 'react'
import { useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src={process.env.PUBLIC_URL + '/calculator.png'} alt="Logo" width={'20px'} height={'20px'} />
                    <span className='ml-1'>ReactCalc</span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse ml-auto" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className={location.pathname === "/" ? "nav-link active" : "nav-link"} href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className={location.pathname === "/about" ? "nav-link active" : "nav-link"} href="/about">About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;