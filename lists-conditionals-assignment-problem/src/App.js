import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation'
import Char from './Char/Char'

class App extends Component {

  state = {
    inputLength: 0,
    input: []
  }

  updateCharCountHandler = (event) => {

    let input = event.target.value;

    this.setState({
      inputLength: input.length,
      input: input.split('')
    });

  }

  charClickHandler = (index) => {

    let charArray = [...this.state.input];
    charArray.splice(index, 1);

    this.setState({
      inputLength: charArray.length,
      input: charArray
    })

  }

  characterList = () => {
    return (
        <div>
          {this.state.input.map((char, index) => {
            return <Char
            click={() => this.charClickHandler(index)}  
            char={char} />
          })}
        </div>
    )
  };

  render() {
    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> Validation) which receives the text length as a prop</li>
          <li>Inside the Validation, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> Char) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each Char receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a Char, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <p/>
        <input 
          type="text"
          value={this.state.input.join('')}
          onChange={this.updateCharCountHandler}>
        </input>
        <p>Character Count: {this.state.inputLength}</p>
        <Validation charCount={this.state.inputLength}/>
        {this.characterList()}
      </div>
    );
  }
}

export default App;
