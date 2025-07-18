import logo1 from "../../assets/images/logo1.svg";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white py-3">
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand" href="#">
            <img src={logo1} alt="logo" style={{ height: "30px" }} />
          </a>

          {/* Toggler for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Nav Items */}
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarContent"
          >
            <ul className="navbar-nav align-items-center gap-3">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Signup
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Kite
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Console
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Coin
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Support
                </a>
              </li>
              <li className="nav-item">
                <a className="btn btn-outline-primary btn-sm" href="#">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
