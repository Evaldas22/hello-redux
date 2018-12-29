import React, { Component } from 'react';
import './App.css'



class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      name: 'World',
      input: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  submitName = () => {
    this.setState({
      name: this.state.input,
      input: ''
    })
  }

  render() {
    return (
      <div className="App">
      <img src={require('./minions.jpg')} alt='minions.jpg' title='happy minions' />
        <br />
        <input value={this.state.input} onChange={this.handleChange} />
        <button onClick={this.submitName} >Change your name</button>
        <p>Hello {this.state.name}!</p>
      </div>
    );
  }
}

export default App;
