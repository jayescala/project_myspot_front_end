import React, { Component } from "react";
import UserInfo from "./UserInfo/UserInfo.js";
import RoomList from "./RoomList/RoomList.js";
import CreateRoom from "./CreateRoom/CreateRoom.js";
import SearchRoom from "./SearchRoom/SearchRoom.js";

const heroku = "https://myrequest-app.herokuapp.com";
const localhost = "http://localhost:9000";
const activehost = localhost;

class HomeContainer extends Component {
  constructor(){
    super();
    this.state = {
      username: "",
      roomCode: "",
      accessToken: "",
      refreshToken: ""
    }
  }
  getRooms = async () => {
    try {
      const data = await fetch(activehost + "/rooms");
      const rooms = data.json();
      return rooms;
    } catch(err) {
      console.log(err);
      return err;
    }
  }
  componentDidMount = async () => {
    console.log(this.props);
    try {
      this.setState({
        accessToken: this.props.match.params.accessToken,
        refreshToken: this.props.match.params.refreshToken
      });
    } catch(err) {
      console.log(err);
      this.props.history.push("/");
    }
  }
  addRoom = async (room, event) => {
    event.preventDefault();
    try {
      await fetch(activehost + "/rooms", {
        method: "post",
        body: JSON.stringify(room),
        headers: {
          "content-type": "application/json"
        }
      });
      this.state = room;
      this.props.history.push("/room/" + this.state.roomCode);
    } catch(err) {
      console.log(err);
    }
  }

  render(){
    return(
      <div>
        <h1>Home</h1>
        <div id="home-container">
          <div id="user-info-component" className="home-column">
            <UserInfo username={this.state.username}/>
          </div>
          <div id="room-list-component" className="home-column">
            <h3>Open Rooms</h3>
            <RoomList />
          </div>
          <div id="create-room-component" className="home-column">
            <CreateRoom addRoom={this.addRoom}/>
            <SearchRoom accessToken={this.props.match.params.accessToken} refreshToken={this.props.match.params.refreshToken} history={this.props.history}/>
          </div>
        </div>
      </div>
    )
  }
};

export default HomeContainer;
