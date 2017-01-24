import React, { Component } from 'react';

export default class Error extends Component {

  render() {
    return (
      <li key={this.props.index} className="list-group-item ">
        <div className="col-md-2">
          <img src="https://storally.com/img/user.png"></img>
        </div>
        <div className="col-md-3">
          <h4 >
            {this.props.user}
          </h4>
        </div>
        <div className="col-md-7">
          <p>This user does note exsist!</p>
        </div>
      </li>
    );
  }
}
