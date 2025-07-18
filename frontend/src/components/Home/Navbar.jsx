import logo1 from "../../assets/images/logo1.svg";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white py-3">
        <div className="container">
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img src={logo1} alt="logo" style={{ height: "30px" }} />
          </Link>

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
                <Link className="nav-link" to="/signup">
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link "
                  to="/product"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                </Link>
                {/* <ul className="dropdown-menu">
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
                </ul> */}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/support">
                  Support
                </Link>
              </li>
              <li className="nav-item">
                <i class="fa-solid fa-bars"></i>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
