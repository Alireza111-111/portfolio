    import React, { useState } from "react";
    import Clock from "./Clock";
    import { Link } from "react-router-dom";

    function Navbar() {
      const [menuOpen, setMenuOpen] = useState(false);

      const toggleMenu = () => setMenuOpen(prev => !prev);

      return (
        <header className="navbar-custom px-3 py-2">
          <div className="container-fluid d-flex justify-content-between align-items-center position-relative">

            <div className="mobile-layout">
              <Link to="/" className="navbar-brand text-white fs-4">
                Alireza Zandi
              </Link>

            

              <button className="hamburger-btn mobile-only" onClick={toggleMenu} aria-label="Toggle menu">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1.5 12.5a.5.5 0 010-1h13a.5.5 0 010 1h-13zm0-5a.5.5 0 010-1h13a.5.5 0 010 1h-13zm0-5a.5.5 0 010-1h13a.5.5 0 010 1h-13z"/>
                </svg>
              </button>
            </div>

            <nav className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
              <ul className="nav text-small nav-links-custom mb-0">
                <li className="nav-item mx-2">
                  <Link to="/" className="nav-link text-white" onClick={() => setMenuOpen(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                      <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
                    </svg>
                    Home
                  </Link>
                </li>

                <li className="nav-item mx-2">
                  <Link to="/about" className="nav-link text-white" onClick={() => setMenuOpen(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-file-person" viewBox="0 0 16 16">
                      <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                      <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                    </svg>
                    About
                  </Link>
                </li>

                <li className="nav-item mx-2">
                  <Link to="/contact" className="nav-link text-white" onClick={() => setMenuOpen(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58z"/>
                    </svg>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

<div className="clock-navbar desktop-only">
              <Clock />
            </div>
          </div>
        </header>
      );
    }

    export default Navbar;