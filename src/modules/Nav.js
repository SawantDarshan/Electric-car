import React from "react";
import "./Nav.css";

// navbar componenet 


function Nav({ category, carList }) {


  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          Find My Car
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#home">
                <i className="bi bi-house-door nav-icons"></i>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#trending">
                <i className="bi bi-arrow-up-right nav-icons"></i>
                Trending
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#compare">
                <i className="bi bi-images nav-icons"></i>
                Compare
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#about">
                <i className="bi bi-file-earmark-person nav-icons"></i>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#api">
                <i className="bi bi-braces nav-icons"></i>
                API
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link active dropdown-toggle"
                href="#home"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-card-list nav-icons"></i>
                Category
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {category.map((item) => (
                  <li>
                    <a className="dropdown-item" href="#carlist">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            {/* <li className="nav-item">
              <a
                className="nav-link disabled"
                href="#"
                tabIndex="-1"
                aria-disabled="true"
              >
                <span></span>
                <span className="car-counter">{carList.length}</span>
              </a>
            </li> */}
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-info" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
