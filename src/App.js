import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
      show: true
    };
    
  }
  
  Increment=()=>{
    this.setState({ number: this.state.number +1 });
  }
  Decrease=()=>{
    this.setState({ number: this.state.number -1 });
  }
  ToggleVisibility=()=>{
    this.setState({ show: !this.state.show });
  }
  
  render() {
    return (
      <div>
        <button onClick={this.Increment}>Increment number</button>
        <button onClick={this.Decrease}>Decrease number</button>
        <button onClick={this.ToggleVisibility}>{this.state.show ? 'Hide number' : 'Show number'}</button>
        {this.state.show ? <h2>{this.state.number}</h2> : ''}
        
      </div>
    )
  }
}

export default App;
