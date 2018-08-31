import React, {Component} from 'react';

const heroku = "https://myrequest-app.herokuapp.com";
const localhost = "http://localhost:9000";
const activehost = localhost;

class Playlist extends Component {
  constructor() {
    super();
    this.state = {
      approvedRequest: '',
      pendingRequest: ''
    }
  }
// componentDidMount = () => {
//   document.getElementsByTagName("button")[0].__reactEventHandlers$h4l9zkx4au7.onClick.call();
// }

// e=>{this.togglePlayback(),e.stopPropagation()}

// getApprovedRequest = async () => {
//   const getRooms = this.getRoom();
//   const approvedRequest = await fetch(activehost + "/api/v1/rooms/" + getRooms, {
//     credentials: '',
//     method: 'GET'
//   });
//
//   const parsedRequest = approvedRequest.json();
//   console.log(parsedRequest);
//   return approvedRequest;
// }

render() {
// document.getElementsByTagName("button")[0].__reactEventHandlers$52d9jn8snop.onClick.call();
  return (
    <div id="approved-requests">
      <iframe src="https://open.spotify.com/embed/user/1247039068/playlist/5mCSpKJKSf3cyCgixLN8RQ" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      {/* <iframe src="https://open.spotify.com/embed/track/0TlLq3lA83rQOYtrqBqSct" name="spotify-iframe" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media">
        <p>iframes are not supported by your browser.</p>
      </iframe> */}
      {/* <iframe src="https://open.spotify.com/embed/track/0TlLq3lA83rQOYtrqBqSct" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> */}
    </div>
  )
}

};

export default Playlist;
