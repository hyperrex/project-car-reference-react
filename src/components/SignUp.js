import React from 'react'

class SignUpForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value})
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    let response = await fetch('https://project-car-reference-api.herokuapp.com/users/', {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({"name": this.state.name})
    })
    let json = await response.json()
    console.log("Response: ", json)
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SignUpForm