import React from "react";
import "./App.css";
import Nav from "./Nav/Nav.js";
import RoomCode from "./RoomCode/RoomCode.js";
import Nickname from "./Nickname/Nickname.js"
import Register from "./Register/Register.js";
import Login from "./Login/Login.js";
import HomeContainer from "./HomeContainer/HomeContainer.js";
import RoomContainer from "./RoomContainer/RoomContainer.js";
import { Route, Switch } from "react-router-dom";

const My404 = () => {
  return (
    <div>
      <h1>404</h1>
      <h3>Sorry, the page cannot be found.</h3>
    </div>
  );
}

const App = () => {
  return (
    <main>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component= { RoomCode }/>
          <Route exact path="/nickname" component= { Nickname }/>
          <Route exact path="/user/register" component= { Register }/>
          <Route exact path="/user/login" component= { Login }/>
          <Route exact path="/home/:accessToken/:refreshToken" component={ HomeContainer }/>
          <Route path="/room/:code" component={ RoomContainer }/>
          <Route component= { My404 }/>
        </Switch>
      </div>
    </main>
  );
}

export default App;
