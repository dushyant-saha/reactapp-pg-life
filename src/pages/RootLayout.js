import { Outlet } from "react-router-dom";
import logo from "../img/logo.png";
import { Link, NavLink } from 'react-router-dom';
// import './stylesheets/RootLayout.css'; 

export function RootLayout() {
    return (
        <section className="page-container">
            <header className="header sticky-top">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <Link className="navbar-brand" >
                        <img src={logo} alt="PGLife" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link">Sign-Up</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link">Log-in</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <section className="body">
                <Outlet />
            </section>
            <footer className="footer">
                <div className="footer-container">
                    <ul className="footer-links">
                        <li><NavLink className="nav-link">PG in Delhi</NavLink></li>
                        <li><NavLink className="nav-link">PG in Mumbai</NavLink></li>
                        <li><NavLink className="nav-link">PG in Chennai</NavLink></li>
                        <li><NavLink className="nav-link">PG in Bangalore</NavLink></li>
                    </ul>
                    <hr className="separator"></hr>
                    <p className="copyright-text">© PGLife 2026</p>
                </div>
            </footer>
        </section>
    );
}