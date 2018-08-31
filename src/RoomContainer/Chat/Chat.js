import React, { Component } from "react";
import socketIOClient from "socket.io-client";

const heroku = "https://myrequest-app.herokuapp.com";
const localhost = "http://localhost:9000";
const activehost = localhost;

class Chat extends Component {
  constructor(){
    super();
    this.state = {
      message: "",
      handle: "",
      comments: []
    }
  }
  componentDidMount() {
    const socket = socketIOClient(activehost);

    socket.on("chat", function(data){
      let message = "<p><strong>" + data.handle + ": </strong>" + data.message + "</p>";
      document.getElementById("output").innerHTML+=message;
    });
  }
  send = () => {
    const socket = socketIOClient(activehost);
    socket.emit("chat", {
      message: this.state.message,
      handle: this.state.handle
    });
  }
  onChat = (event) => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    });
  }
  render() {
    return (
      <div>
        <div id="mario-chat">
          <div id="chat-window">
            <div id="output">
            </div>
            <div id="feedback">
            </div>
          </div>
          <input id="handle" name="handle" type="text" placeholder="Handle" onChange={this.onChat}/>
          <input id="message" name="message" type="text" placeholder="Message" onChange={this.onChat}/>
          <button id="send" onClick={ this.send }>Send</button>
        </div>
      </div>
    );
  }
}

export default Chat;
