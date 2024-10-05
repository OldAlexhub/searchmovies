import { Outlet, Link } from "react-router-dom";
import { useState } from "react";

const Layout = () => {
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);

  const handleNavbarToggle = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            🎬 MovieVerse
          </Link>
          <button
            className={`navbar-toggler ${isNavbarCollapsed ? "" : "collapsed"}`}
            type="button"
            onClick={handleNavbarToggle}
            aria-controls="navbarResponsive"
            aria-expanded={!isNavbarCollapsed}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${
              isNavbarCollapsed ? "" : "show"
            }`}
            id="navbarResponsive"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/searchbyplot">
                  Search by Plot
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-3">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
