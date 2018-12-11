import React, { Component } from 'react';
class UserProject extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render() {
    console.log(this.props.location.state);
    let {title, description, photos} = this.props.location.state

    let photoCards = photos.map(photo => {
      return (
        <div key={photo.id} className="container border border-primary rounded my-5 w-80 bg-white">        
        <img src={photo.url} alt="" className="img-fluid w-100 h-auto"/>
        <h4>{photo.title}</h4>
        <p>{photo.description}</p>
        </div>
      )
    })

    return (
      <div className="container border border-primary rounded my-5 ml-4 mr-4 mx-auto bg-light">
        <h3>
        {title}
        </h3>
        <p>
        {description}
        </p>
        {photoCards}
      </div>
    );
  }
}
export default UserProject;