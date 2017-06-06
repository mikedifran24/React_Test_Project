import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Country from './Country.js';
import State from './State.js';

class App extends Component {
 constructor(props) {
    super(props);
    this.state = {selectedCountry: 'us'}; 
  }
    
  handleChange = (countryCode) => {
    this.setState({selectedCountry: countryCode});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Country handleChange={this.handleChange}/>
        <State selectedCountry={this.state.selectedCountry}/>
      </div>
    );
  }
}

export default App;
