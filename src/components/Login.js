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
    localStorage.setItem('token', 'hi');
    // localStorage.setItem('user', response.data);
    let json = await response.json();
    console.log('Response: ', json);
  };

  render() {
    return (
      <div>
        <Navbar />
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input
              type="text"
              value={this.state.value}
              onChange={e => this.setState({ email: e.target.value })}
            />
          </label>
          <label>
            Password:
            <input
              type="text"
              value={this.state.value}
              onChange={e => this.setState({ password: e.target.value })}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default LoginForm;
