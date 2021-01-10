import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import SearchBox from "../SearchBox";

import "./styles.scss";

const NavBar = ({ toggleNavbar, isActive }) => (
  <StaticQuery
    query={graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
      }
    `}
    render={(data) => (
      <nav className="navbar sticky-nav" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img src="/img/circle-logo-FCHI.png" />
            <strong>Fremont County Home Inspection, LLC</strong>
          </Link>
          <button
            className={`button navbar-burger ${isActive ? "is-active" : ""}`}
            data-target="navMenu"
            onClick={toggleNavbar}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
          id="navMenu"
        >
          <div className="navbar-end">
            {/* <SearchBox searchIndex={data.siteSearchIndex.index} /> */}
            <Link className="navbar-item" to="/">
              Home
            </Link>
            <Link className="navbar-item" to="/services">
              Home Services
            </Link>
            <Link className="navbar-item" to="/commercial">
              Commercial Services
            </Link>
            <Link className="navbar-item" to="/regions">
              Regions
            </Link>
            <Link className="navbar-item" to="/about">
              About
            </Link>
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <Link className="button is-primary is-outlined" to="/contact">
                    Contact Us
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )}
  />
);

export default NavBar;
