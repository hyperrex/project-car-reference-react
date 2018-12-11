import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
// const BASE_URL = 'http://localhost:8000';
// const BASE_URL = 'https://project-car-reference-api.herokuapp.com';
class Navbar extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <nav className="navbar bg-info text-white" id="nav-bar">
          <div className="row">
            <h3 className="navbar-brand ml-3 w-40">
              ReCoupe: A Project Car Visual Reference
            </h3>

            <NavLink to='/projects'>
              <button
                id="view-my-projects-button"
                className="btn btn-primary ml-2"
                >
                <i className="far fa-folder-open" /> My Projects
                </button>
            </NavLink>
            <NavLink to='/createproject'>
              <button
                id="view-my-projects-button"
                className="btn btn-primary ml-2"
                >
                <i className="far fa-folder-open" /> Create Project
                </button>
            </NavLink>
            <NavLink to='/login'>
              <button
                id="view-my-projects-button"
                className="btn btn-primary ml-2"
                >
                <i className="far fa-folder-open" /> Logout
                </button>
            </NavLink>
           
            
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
