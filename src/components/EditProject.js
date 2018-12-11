import React, { Component } from 'react'
// const BASE_URL = 'http://localhost:8000';
const BASE_URL = 'https://project-car-reference-api.herokuapp.com'

class EditProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      img_url: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = async event => {
    let id=this.props.id
    console.log('<>>>>>>>', this.props)
    try {
      event.preventDefault();
      let response = await fetch(`${BASE_URL}/projects/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({
          title: this.state.title,
          description: this.state.description
        })
      });
      let json = await response.json();
      console.log(json)
      this.props.history.push('/projects');
    } catch (error) {
      console.log(error);
    }
  };

  render () {
    return (
      <div
      className="container border border-primary rounded my-5 w-50"
      id="edit-project-container"
    >
      <form id="edit-project-form" className="form text-center" onSubmit={this.handleSubmit}>
        <h4 className="m-1 text-center">Edit Project</h4>

        <div className="form-group text-center">
          <label htmlFor="edit-project-title" className="control-label"></label>
          <input
            required
            type="text"
            className="form-control text-center"
            id="edit-project-title"
            placeholder="Title"
            name="title"
            onChange={e => this.setState({ title: e.target.value })}
          />
        </div>

        <div className="form-group text-center">
          <label htmlFor="edit-project-description" className="control-label"></label>
          <input
            required
            type="text"
            className="form-control text-center"
            id="edit-project-description"
            placeholder="Description"
            name="description"
            onChange={e => this.setState({ description: e.target.value })}
          />
        </div>

        <div className="form-group text-center ">
          <button
            type="submit"
            id="submit-edit-project-button"
            className="btn btn-lg btn-primary"
          >
            <i className="fas fa-plus"></i> Submit Changes
          </button>
        </div>
      </form>
    </div>

    )
  }
}

export default EditProject