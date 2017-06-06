import React, { Component } from 'react';
import Dropdown from './Dropdown.js';

class Country extends Component {
  constructor(props) {
    super(props);
    this.state = {countryArray: []}; 
  }

  componentDidMount() {
        fetch(`http://localhost:8000/api/countries/`) 
            .then((result) => {
              result.json().then((json) => {
                this.setState({countryArray: json})
              })
            });
    }
  render() {
    return (
      <Dropdown list={this.state.countryArray} handleChange={this.props.handleChange} />
    );
  }
}

export default Country;