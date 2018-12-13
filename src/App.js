import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Animals from './Animals';

class App extends Component {
  state = {
    totalAnimals: 0
  }
  handleClick() {
    const currentTotal = this.state.totalAnimals;
    this.setState({ totalAnimals: currentTotal + 1 })
  }
  render() {
    return (
      <div className="App">
        <Header />
        <h3>Number of Lions:</h3>
        <Animals updateAnimals={this.handleClick.bind(this)}/>
        <h3>Number of Giraffes:</h3>
        <Animals updateAnimals={this.handleClick.bind(this)}/>
        <h3>Number of Tigers:</h3>
        <Animals updateAnimals={this.handleClick.bind(this)}/>
        <h2>There are {this.state.totalAnimals} animals in your zoo!</h2>
      </div>
    );
  }
}

export default App;
