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
      ],
      showPersons: false})
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
      { name: 'Alex', age: 34 },
      { name: event.target.value, age: 33 }
    ]})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person
              name = {person.name} 
              age = {person.age} />
          })}
        </div> 
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Switch Name</button>
          {persons}
      </div>
    );
  }
}

export default App;
