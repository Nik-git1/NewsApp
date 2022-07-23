
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to="/">
            NewsJunkey
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active  text-light" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-light" to="/sports">
                  Sports
                </Link>  
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-light" to="/entertainment">
                  Entertainment
                </Link>  
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-light" to="/general">
                  General
                </Link>  
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-light" to="/health">
                  Health
                </Link>  
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-light" to="/science">
                  Science
                </Link>  
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    )
  }
}

export default Navbar