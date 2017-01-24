import React, { Component } from 'react';

export default class Error extends Component {

  render() {
    return (
      <li key={this.props.index} className="list-group-item ">
        <h1>{this.props.user}</h1>
        <h3>This user does note exsist!</h3>
      </li>
    );
  }
}
