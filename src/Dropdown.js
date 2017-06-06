import React, { Component } from 'react';

class Dropdown extends Component {
  createOption(option) {
      return <option value={option.code}>{option.name}</option>
  }

  handleChange = (e) => {
    var countryCode = e.target.value;
    this.props.handleChange(countryCode);
  }

  render() {
    return (
      <div classname='Dropdown'>
        <select onChange={this.handleChange}>
            {this.props.list.map(this.createOption)}
        </select>
      </div>
    );
  }
}

export default Dropdown;