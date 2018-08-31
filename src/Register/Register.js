import React, { Component } from "react";

const heroku = "https://myrequest-app.herokuapp.com";
const localhost = "http://localhost:9000";
const activehost = localhost;

class Register extends Component {
  constructor(){
    super();
    this.state = {
      username: ""
    }
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const registerResponse = await fetch(activehost + "/user/register", {
      method: "post",
      body: JSON.stringify(this.state),
      headers:{
        "Content-Type": "application/json"
        }
    });
    const parsedResponse = await registerResponse.json();

    if(parsedResponse.data.loggedIn === true){
      const registerResponse = await fetch(activehost + "/authorize", {
        method: "GET"
      });
      const authorizeWindow = window.open(registerResponse.url, "_self", "height=500,width=500");
      console.log(authorizeWindow);
      console.log(authorizeWindow.opener);
      console.log(authorizeWindow.opener.document);
      // authorizeWindow.opener.document.write("<p>This is the source window!</p>");
      // authorizeWindow.close();

      // this.setState({
      //   authorize: registerResponse.url
      // });
      //
      // this.props.history.push("/home", {
      //   username: this.state.username
      // });
      console.log(registerResponse);
    }
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  render(){
    console.log(this.state);
    return (
      <div id="register-container">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="username" onChange={this.handleChange} placeholder="username"/>
          <input type="password" name="password" onChange={this.handleChange} placeholder="password"/>
          <button type="submit">Enter</button>
        </form>
      </div>
    )
  }
}

export default Register;
