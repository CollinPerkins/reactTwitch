import React, { Component } from 'react';

export default class Offline extends Component {

  render() {
    return (
      <li key={this.props.index} className="list-group-item ">
        <div className="col-md-2">
          <img src={this.props.userStream.stream.channel.logo}></img>
        </div>

        <a className="col-md-3" href={this.props.userStream.stream.channel.url} target="_blank">
          <h4 >
            {this.props.userStream.stream.channel.display_name}
          </h4>
        </a>
        <div className="col-md-7">
          <p>{this.props.userStream.stream.channel.game + " " + this.props.userStream.stream.channel.status}</p>
        </div>
      </li>
    );
  }
}
