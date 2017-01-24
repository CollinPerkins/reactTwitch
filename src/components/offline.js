import React, { Component } from 'react';

export default class Offline extends Component {

  render() {
    return (
      <li key={this.props.index} className="list-group-item ">
        <div className="col-md-2">
          <img src={this.props.userStream.stream.channel.logo}></img>
        </div>

        <a className="col-md-3" href={this.props.userStream._links.channel} target="_blank">
          <h4 >
            {this.props.user}
          </h4>
        </a>
        <div className="col-md-7">
          <p>Offline</p>
        </div>
      </li>
    );
  }
}
