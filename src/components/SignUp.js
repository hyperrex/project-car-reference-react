import React from 'react';
import Navbar from './Navbar';

const BASE_URL = 'http://localhost:8000';
// const BASE_URL = 'https://project-car-reference-api.herokuapp.com';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = async event => {
    event.preventDefault();
    console.log(this.state);
    try {
      let response = await fetch(`${BASE_URL}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify(this.state)
      });
      let json = await response.json();
      console.log('Response: ', json);
    }
    catch(error) {
      console.log(error)
    }
  };

  render() {
    return (
      <div>
        <Navbar />
        <div
          className="container border border-primary rounded my-5 w-50"
          id="sign-up-container"
        >
          <form
            id="sign-up-form"
            className="form text-center"
            onSubmit={this.handleSubmit}
          >
            <h4 className="m-1 text-center">
              Not registered yet? Just enter your information below.
            </h4>
            <div className="row">
              <div className="form-group text-center col-6">
                <label htmlFor="first-name" className="control-label" />
                <input
                  type="first-name"
                  className="form-control text-center text-muted"
                  id="first-name"
                  placeholder="First Name"
                  required
                  onChange={e => this.setState({ first_name: e.target.value })}
                />
              </div>

              <div className="form-group text-center col-6">
                <label htmlFor="last-name" className="control-label" />
                <input
                  type="last-name"
                  className="form-control text-center text-muted"
                  id="last-name"
                  placeholder="Last Name"
                  required
                  onChange={e => this.setState({ last_name: e.target.value })}
                />
              </div>
            </div>

            <div className="row">
              <div className="form-group text-center col-12">
                <label htmlFor="email" className="control-label" />
                <input
                  type="email"
                  className="form-control text-center text-muted"
                  id="create-email"
                  placeholder="Email"
                  required
                  onChange={e => this.setState({ email: e.target.value })}
                />
              </div>
            </div>

            <div className="row">
              <div className="form-group text-center col-6">
                <label htmlFor="password" className="control-label" />
                <input
                  type="password"
                  className="form-control text-center text-muted"
                  id="sign-up-password"
                  placeholder="Password"
                  pattern="(?=^.{8,30}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                  required
                  onChange={e => this.setState({ password: e.target.value })}
                />
                <small id="passwordHelpInline" className="text-center">
                  Must be 8-30 characters long and include upper and lower case
                  letters, a number, and a special character.
                </small>
              </div>

              <div className="form-group text-center col-6">
                <label htmlFor="verify-password" className="control-label" />
                <input
                  type="password"
                  className="form-control text-center text-muted"
                  id="verify-password"
                  placeholder="Re-Enter Password"
                  pattern="(?=^.{8,30}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                  required
                />
                <small id="passwordHelpInline" className="text-center">
                  Re-entry password to verify
                </small>
              </div>
            </div>

            <div className="form-group text-center">
              <button
                type="submit"
                id="submit-button"
                className="btn btn-lg btn-primary"
              >
                <i className="fa fa-user-circle" /> Register
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUpForm;
