import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand bg-info text-white" id="nav-bar">
          <div className="row">
            <h3 className="navbar-brand ml-3 w-40"> ReCoupe: A Project Car Visual Reference </h3>
            <div className="row ml-2">
              <button id="view-my-projects-button" className="btn btn-primary ml-2">
                <i className="far fa-folder-open" /> My Projects
              </button>
              <button id="create-project-button" className="btn btn-primary ml-2">
                <i className="fas fa-plus" /> Create Project
              </button>
              <button id="logout-button" className="btn btn-primary ml-2">
                <i className="fas fa-sign-out-alt" /> Logout
              </button>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
