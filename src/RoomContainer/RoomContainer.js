import React, {Component} from 'react';
import Search from "./Search/Search.js";
import Chat from "./Chat/Chat.js";
import ApprovedRequests from "./ApprovedRequests/ApprovedRequests.js";

const heroku = "https://myrequest-app.herokuapp.com";
const localhost = "http://localhost:9000";
const activehost = localhost;

class Room extends Component {
  constructor() {
    super();
    this.state = {
      code: '',
      createdByUsername: '',
      createdByUserId: '',
      comments: '',
      pendingRequest: '',
      approvedRequest: '',
      roomName: '',
      description: '',
      image: '',
      tracks: [],
      accessToken: "",
      refreshToken: ""
    }
  }
  getRoom = async () => {
    const roomCode = this.getCode();
    const room = await fetch(activehost + "/rooms/" + roomCode, {
      method: 'GET'
    });

    const parsedRoom = room.json();
    console.log(parsedRoom);
    return parsedRoom
  }

  // addTracks = async (track, event) => {
  //   this.state.tracks.push(track);
  //   console.log(this.state.tracks);
  // }

  getCode = () => {

    const pathName = this.props.location.pathname;

    const pathNameArray = pathName.split("/");

    const roomCode = pathNameArray[pathNameArray.length - 1]

    return roomCode;
  }

  deleteRoom = async (id, e) => {
    e.preventDefault();
    console.log('deleteRoom function is being called, this is the id:', id);
    try {
      const deleteRoom = await fetch(activehost + "/room/" + id, {
        method: 'DELETE'
      });

      const parsedRoom = await deleteRoom.json();
      this.setState({room: this.state.room.filter((room, i) => room._id)});

    } catch(err) {
      console.log(err);
    }
  }




  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Room: {this.state.code}</h1>
        <div id="home-container">
          <div id="search-component" className="home-column">
            <Search accessToken={this.props.location.state.accessToken} refreshToken={this.props.location.state.refreshToken}/>
          </div>
          <div id="playlist-component" className="home-column">
            <h3>Host</h3>
            <ApprovedRequests />
          </div>
          <div id="chat-component" className="home-column">
            {/* <Chat /> */}
          </div>
        </div>
      </div>
    )
  }
}

  export default Room;
