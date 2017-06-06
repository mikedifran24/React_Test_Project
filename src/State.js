import React, { Component } from 'react';
import Dropdown from './Dropdown.js';

class State extends Component {
  constructor(props) {
    super(props);
    this.state = {stateArray: []}; 
  }
  
  componentWillReceiveProps() {
        fetch('http://localhost:8000/api/countries/'+
        this.props.selectedCountry+'/states') 
            .then((result) => {
              result.json().then((json) => {
                this.setState({stateArray: json})
              })
            });
    }
  render() {
    return (
      <Dropdown list={this.state.stateArray}/>
    );
  }
}

export default State;