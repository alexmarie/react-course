import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Alex', age: 34 },
      { name: 'Rhys', age: 38 },
      { name: 'Josh', age: 36 }
    ]
  }

  switchNameHandler = (newName) => {
    //console.log('Was clicked');
    // DON'T DO THIS this.state.persons[0].name = "Ace"
    this.setState({
      persons: [
      { name: 'Alex', age: 34 },
      { name: newName, age: 33 }
    ]})
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
      { name: 'Alex', age: 34 },
      { name: event.target.value, age: 33 }
    ]})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('Dude')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Marie')}
          changed={this.nameChangeHandler}>I like pilates!</Person>
        <Person 
          name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
        <Person 
          name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
      </div>
    );
  }
}

export default App;
