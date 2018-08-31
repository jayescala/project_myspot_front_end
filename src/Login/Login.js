import React, { Component } from "react";

const heroku = "https://myrequest-app.herokuapp.com";
const localhost = "http://localhost:9000";
const activehost = localhost;

class Login extends Component {
  constructor(){
    super();
    this.state = {
      username: "",
      password: ""
    }
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const loginResponse = await fetch(activehost + "/user/login", {
      method: "post",
      credentials: "include",
      body: JSON.stringify(this.state),
      headers:{
        "Content-Type": "application/json"
        }
    });

    const parsedResponse = await loginResponse.json();
    if(parsedResponse.data.loggedIn === true){
      this.props.history.push("/home", {
        username: this.state.username
      });
    }
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  render(){
    return (
      <div id="login-container">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="username" onChange={this.handleChange} placeholder="username"/>
          <input type="password" name="password" onChange={this.handleChange} placeholder="password"/>
          <button type="submit">Enter</button>
        </form>
      </div>
    )
  }
}

export default Login;
