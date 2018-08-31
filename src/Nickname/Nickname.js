import React, { Component } from "react";

const heroku = "https://myrequest-app.herokuapp.com";
const localhost = "http://localhost:9000";
const activehost = localhost;

class Nickname extends Component {
  constructor(){
    super();
    this.state = {
      username: "",
      roomCode: ""
    }
  }
  componentDidMount = async () => {
    try {
      this.setState({
        roomCode: this.props.history.location.state.roomCode
      });
      console.log(this.state.roomCode);
    } catch(err) {
      console.log(err);
      this.props.history.push("/");
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.push("/room/" + this.state.roomCode);
  }
  handleChange = (event) => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    });
  }
  render(){
    return (
      <div id="nickname-container">
        <div id="nickname-display">
          <h1>Nickname</h1>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="username" value={this.state.username} placeholder="nickname" onChange={this.handleChange}/>
            <button type="submit">Enter</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Nickname;
