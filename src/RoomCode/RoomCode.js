import React, { Component } from "react";

const heroku = "https://myrequest-app.herokuapp.com";
const localhost = "http://localhost:9000";
const activehost = localhost;

class RoomCode extends Component {
  constructor(){
    super();
    this.state = {
      roomCode: ""
    }
  }
  getRooms = async () => {
    try {
      const data = await fetch(activehost + "/rooms/" + this.state.roomCode);
      const room = data.json();
      return room;
    } catch(err) {
      console.log(err);
      return err;
    }
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const room = await this.getRooms();
      const roomCodeCheck = room.data.code;
      console.log(roomCodeCheck);
      if(roomCodeCheck === this.state.roomCode){
        this.props.history.push("/nickname", {
          roomCode: this.state.roomCode
        });
      }
    } catch(err) {
      console.log(err);
      console.log("Room does not exist");
      this.setState({
        roomCode: ""
      });
      return err;
    }
  }
  handleChange = (event) => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    });
  }
  render(){
    return (
      <div id="search-room-container">
        <div id="search-room-display">
          <h1>Enter Room Code</h1>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="roomCode" value={this.state.roomCode} placeholder="room code" onChange={this.handleChange}/>
            <button type="submit">Enter</button>
          </form>
        </div>
      </div>
    )
  }
}

export default RoomCode;
