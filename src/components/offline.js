import React, { Component } from 'react';

export default class Offline extends Component {

  render() {
    return (
      <li key={this.props.index} className="list-group-item ">
        <div className="col-md-2">
          <img src={this.props.user.logo}></img>
        </div>

        <a className="col-md-3" href={`https://www.twitch.tv/${this.props.user.name}`} target="_blank">
          <h4 >
            {this.props.user.name}
          </h4>
        </a>
        <div className="col-md-7">
          <p>Offline</p>
        </div>
      </li>
    );
  }
}
