import { useState } from 'react';
import { Outlet, Link, NavLink } from "react-router-dom";
import logo from "../img/logo.png";
import '../stylesheets/RootLayout.css';

function AuthModal({ isOpen, onClose, initialMode = 'signup' }) {
    const [mode, setMode] = useState(initialMode); // signup Mode/login Mode

    if (!isOpen) return null;

    return (
        <div className="auth-modal-backdrop" onClick={onClose}>
            <div className="auth-modal-content" onClick={(e) => e.stopPropagation()}>

                <div className="auth-modal-header">
                    <h5 className="auth-modal-title">
                        {mode === 'signup' ? 'Signup with PGLife' : 'Login with PGLife'}
                    </h5>
                    <button type="button" className="auth-modal-close" onClick={onClose}>
                        &times;
                    </button>
                </div>

                <div className="auth-modal-body">
                    {mode === 'signup' ? (
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="auth-input-group">
                                <input type="text" placeholder="Full Name" required />
                            </div>

                            <div className="auth-input-group">
                                <input type="tel" placeholder="Phone Number" required />
                            </div>

                            <div className="auth-input-group">
                                <input type="email" placeholder="Email" required />
                            </div>

                            <div className="auth-input-group">
                                <input type="password" placeholder="Password" required />
                            </div>

                            <div className="auth-input-group">
                                <input type="text" placeholder="College Name" required />
                            </div>

                            <div className="auth-gender-group">
                                <span>I'm a</span>
                                <label>
                                    <input type="radio" name="gender" value="male" defaultChecked /> Male
                                </label>
                                <label>
                                    <input type="radio" name="gender" value="female" /> Female
                                </label>
                            </div>

                            <button type="submit" className="auth-submit-btn">Create Account</button>
                        </form>
                    ) : (
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="auth-input-group">
                                <input type="email" placeholder="Email" required />
                            </div>

                            <div className="auth-input-group">
                                <input type="password" placeholder="Password" required />
                            </div>

                            <button type="submit" className="auth-submit-btn">Login</button>
                        </form>
                    )}
                </div>

                <div className="auth-modal-footer">
                    {mode === 'signup' ? (
                        <p>Already have an account? <span className="auth-link" onClick={() => setMode('login')}>Login</span></p>
                    ) : (
                        <p><span className="auth-link" onClick={() => setMode('signup')}>Click here</span> to register a new account</p>
                    )}
                </div>

            </div>
        </div>
    );
}

export function RootLayout() {
    const [modalState, setModalState] = useState({ isOpen: false, mode: 'signup' });
    const openModal = (mode) => setModalState({ isOpen: true, mode });
    const closeModal = () => setModalState({ isOpen: false, mode: 'signup' });

    return (
        <section className="body">
            <header className="header sticky-top">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <Link className="navbar-brand" to='/'>
                        <img src={logo} alt="PGLife" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <button className="nav-link btn btn-link" onClick={() => openModal('signup')}>
                                    <i className="fas fa-user me-1"></i> Sign-Up
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link btn btn-link" onClick={() => openModal('login')}>
                                    <i className="fas fa-sign-in-alt me-1"></i> Log-in
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

            <section className="page-container">
                <Outlet />
            </section>
            {/* ---
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
             --- */}
            <AuthModal
                isOpen={modalState.isOpen}
                initialMode={modalState.mode}
                onClose={closeModal}
            />

            <footer className="footer">
                <div className="footer-container">
                    <ul className="footer-links">
                        <li><NavLink className="nav-link" to='/room-search-delhi'>PG in Delhi</NavLink></li>
                        <li><NavLink className="nav-link" to='/room-search-mumbai'>PG in Mumbai</NavLink></li>
                        <li><NavLink className="nav-link" to='/room-search-chennai'>PG in Chennai</NavLink></li>
                        <li><NavLink className="nav-link" to='/room-search-bangalore'>PG in Bangalore</NavLink></li>
                    </ul>
                    <hr className="separator" />
                    <p className="copyright-text">© PGLife 2026</p>
                </div>
            </footer>
        </section>
    );
}