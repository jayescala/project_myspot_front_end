import React, {Component} from 'react';

const heroku = "https://myrequest-app.herokuapp.com";
const localhost = "http://localhost:9000";
const activehost = localhost;

class RoomList extends Component {
  constructor() {
    super();
    this.state = {
      code: '',
      roomName: '',
      description: '',
      roomList: []
    }
  }

  componentDidMount() {
    console.log("mounted");
    this.getRooms().then((roomList) => {
      this.setState({
        roomList: roomList.data
      });
      console.log(this.state.roomList);
    }).catch((err) => {
      console.log(err, 'this is an error in the componentDidMount');
    });


  }

  getRooms = async () => {
    const rooms = await fetch(activehost + '/rooms', {
      method: 'GET'
    });

    const parsedRoom = rooms.json();

    return parsedRoom;
  }

  roomList = () => {
    const roomList = this.state.roomList.map((room, i) => {
      return  <li key={room._id}>
                <p>Room Code: {room.code}</p>
                <p>Name: {room.roomName}</p>
                <p>{room.description}</p>
              </li>
    });
    return roomList;
    console.log(roomList);
  }

  render() {
    return(
      <div>
        <ul>
          {this.roomList()}
        </ul>
      </div>

    )
  }
};

export default RoomList;
