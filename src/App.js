import React, { Component } from 'react';
import './App.css'
import {createStore} from 'redux';


// our constant
const CHANGE_NAME = 'CHANGE_NAME';

// action creator
const changeName = (name) => {
  return {
    type: CHANGE_NAME,
    payload: {
      name
    }
  }
}

// reducer
const nameReducer = (state = 'World', action) => {
  switch (action.type){
    case CHANGE_NAME:
      return {
        name: action.payload.name
      };

    default:
      return state;
  }
}

// initial state
const initialState = {
  name: 'World!'
}

// store
const store = createStore(nameReducer, initialState);

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      input: ''
    }    
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  submitName = () => {
    // before reseting input, dispatch an action to change name
    store.dispatch(changeName(this.state.input));

    this.setState({
      input: ''
    });
  }

  render() {
    return (
      <div className="App">
      <img src={require('./images/minions.jpg')} alt='minions.jpg' title='happy minions' />
        <br />
        <input value={this.state.input} onChange={this.handleChange} />
        <button onClick={this.submitName} >Change greeting name</button>
        <p>Hello {store.getState().name}!</p>
      </div>
    );
  }
}

export default App;
