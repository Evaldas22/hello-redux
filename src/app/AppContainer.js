import React, { Component } from 'react';
import './AppContainer.css';
import {store} from './store/store';
import {changeName} from './duck/actions';


class AppContainer extends Component {

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

export default AppContainer;
