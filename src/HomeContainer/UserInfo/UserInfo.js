import React, {Component} from 'react';

const heroku = "https://myrequest-app.herokuapp.com";
const localhost = "http://localhost:9000";
const activehost = localhost;

class UserInfo extends Component {
  constructor() {
    super();
    this.state = {
        username: ""
    }
  }
  componentDidMount(){
    this.setState({
      username: this.props.username
    });
  }
  generateUserInfo = () => {
    const username = this.props.username;
    return  <h3>{username}</h3>
  }
  render() {
    return(
      <div id="user-info-display">
        {this.generateUserInfo()}
      </div>
    )
  }

};

export default UserInfo;
