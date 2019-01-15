import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

class App extends Component {

  state = {
    username: 'ReactN00b'
  }

  nameChangeHandler = (event) => {
    this.setState({username: event.target.value})
  }

  render() {

    const style = {
      width: "20%",
      margin: "16px auto",
      border: "1px solid #eee",
      boxShadow: "0 2px 3px #ccc",
      padding: "16px"
  }

    return (
      <div className="App" style={style}>
        <UserInput
          username={this.state.username}
          changed={this.nameChangeHandler}></UserInput>
        <UserOutput username={this.state.username}>is my username!</UserOutput>
        <UserOutput>I am learning React!</UserOutput>
      </div>
    );
  }
}

export default App;
