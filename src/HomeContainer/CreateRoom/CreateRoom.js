import React, {Component} from 'react';

const heroku = "https://myrequest-app.herokuapp.com";
const localhost = "http://localhost:9000";
const activehost = localhost;

class CreateRoom extends Component {
  constructor() {
    super();
    this.state = {
      code: '1234',
      createdByUsername: '',
      createdByUserId: '',
      comments: '',
      pendingRequest: '',
      approvedRequest: '',
      roomName: '',
      description: '',
      image: ''
    }
  }

  handleChange = (event) => {
    this.setState({[event.currentTarget.name]: event.currentTarget.value});
  }

  render() {
    return (
      <div>
        <h3>Create Room</h3>
        <form onSubmit={this.props.addRoom.bind(this, this.state)}>
          <label>
            Room Name: <input type="text" name="roomName" onChange={this.handleChange}/>
          </label><br/>
          <label>
            Description: <input type="text" name="description" onChange={this.handleChange}/>
          </label><br/>
          <label>
            Image: <input type="text" name="image" onChange={this.handleChange}/>
          </label><br/>
          <input type="submit" value="Create Room"/>
        </form>
    </div>
    )
  }
}


export default CreateRoom;
