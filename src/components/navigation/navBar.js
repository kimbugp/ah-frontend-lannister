import React from "react";

const NavBar = () => (
  <nav
    className="navbar navbar-expand-lg fixed-top navbar-light bg-light"
    id="newNav"
  >
    <a id="brand1" className="navbar-brand" href="/home">
      <img id="logo_img" src="pics/ah-logo.png" alt="" />
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <hr />
    <hr />
    <hr />

    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="/create-article">
            Finance
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="/create-article">
            Finance
          </a>
        </li>

        <li className="nav-item active">
          <a className="nav-link" href="/create-article">
            Fashion
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="/create-article">
            Health
          </a>
        </li>
        <li className="nav-item active ">
          <a className="nav-link" href="/create-article">
            Sports
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="/create-article">
            Movies
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="/create-article">
            Music
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="/create-article">
            Science
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="/create-article">
            Tech
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="/create-article">
            Education
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="/create-article">
            More
          </a>
        </li>

        <li className="nav-item active" id="search-icon">
          <a href="/create-article">
            <i className="fas fa-search" />
          </a>
        </li>

        <li className="nav-item active dropdown" id="user-icon">
          <a
            className="nav-link dropdown-toggle"
            href="/create-article"
            id="navbarDropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-user-circle " />
          </a>
          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <a className="dropdown-item" href="/create-article">
              Create Article
            </a>
            <a className="dropdown-item" href="/create-article">
              My Stories
            </a>
            <a className="dropdown-item" href="/create-article">
              Reading Stats
            </a>
            <a className="dropdown-item" href="/create-article">
              Bookmarks
            </a>
            <a className="dropdown-item" href="/create-article">
              Profile
            </a>
            <a className="dropdown-item" href="/create-article">
              Sign Out
            </a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
