import React from 'react';
import Navbar from './Navbar';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    let response = await fetch('http://localhost:8000/users/login/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    });
    // console.log('JWT Token in header >>>>>', response.headers.get('authorization'))
    localStorage.clear()
    localStorage.setItem('test-token', 'hi');
    // localStorage.setItem('user', response.data);
    let json = await response.json();
    console.log('Response: ', json);
  };

  render() {
    return (
      <div>
        <Navbar />

        <div
          className="container border border-primary rounded my-5 w-50"
          id="login-form-container"
        >
          <form id="login-form" className="form text-center" onSubmit={this.handleSubmit}>
            <h4 className="m-1 text-center">User Login</h4>
            <div className="row">
              <div className="form-group text-center col-12">
                <label htmlFor="email" className="control-label" />
                <input
                  type="email"
                  className="form-control text-center text-muted"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="form-group text-center col-12">
              <label htmlFor="password" className="control-label" />
                <input
                  type="password"
                  value={this.state.value}
                  onChange={e => this.setState({ email: e.target.value })}
                  className="form-control text-center text-muted"
                  id="password"
                  placeholder="Password"
                  pattern="(?=^.{8,30}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                  required
                />
              </div>
            </div>
            <div className="form-group text-center ">
              <button
                type="submit"
                value={this.state.value}
                onChange={e => this.setState({ email: e.target.value })}
                id="login-button"
                className="btn btn-lg btn-primary"
              >
                <i className="fas fa-sign-in-alt" /> Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;


// <div>
// <Navbar />
// <form onSubmit={this.handleSubmit}>
//   <label>
//     Email:
//     <input
//       type="text"
//       value={this.state.value}
//       onChange={e => this.setState({ email: e.target.value })}
//     />
//   </label>
//   <label>
//     Password:
//     <input
//       type="text"
//       value={this.state.value}
//       onChange={e => this.setState({ password: e.target.value })}
//     />
//   </label>
//   <input type="submit" value="Submit" />
// </form>
// </div>
