import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Projects from './components/Projects';
import UserProject from './components/UserProject';
import AddProject from './components/AddProject';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={() => <Redirect to="/login" />} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/userproject" component={UserProject} />
            <Route exact path="/addproject" component={AddProject} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;