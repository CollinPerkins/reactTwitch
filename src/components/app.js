import React, { Component } from 'react';
import $ from 'jquery';
import axios from 'axios';
import Bluebird from 'bluebird';

import Error from './error';
import Offline from './offline';
import Streamer from './streamer';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usersList: ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"],
      offlineFilter: false,
      errorFilter: false,
      streamerFilter: false

    }
    this.renderUsers = this.renderUsers.bind(this);
    this.offlineView = this.offlineView.bind(this);
    this.errorView = this.errorView.bind(this);
    this.streamerView = this.streamerView.bind(this);
  }

  renderUsers() {
    if (!this.state.userData || !this.state.userData.length) return;

    return this.state.userData.map((user, index) => {
      // console.log(this.state.usersList[index]);
      if(user.error === 'error') {
        if(!this.state.errorFilter){
          return (
            <Error index={index} user={this.state.usersList[index]}/>
          )
        } else {
          return;
        }

      }
      if(user.data.stream === null){
        if(!this.state.offlineFilter){
          return (
            <Offline index={index} user={this.state.usersList[index]}/>
          )
        } else {
          return;
        }
      }
      if(!this.state.streamerFilter){
        return (
        <Streamer index={index} user={this.state.usersList[index]} userStream={user.data}/>
        )
      } else {
        return;
      }
    })
  };

  componentWillMount(){
    const userList = this.state.usersList.map((user) => {
      return axios.get(`https://api.twitch.tv/kraken/users/${user}?client_id=pl279j6lfuewen5dotua3yvv6zx1ma`)
      .then(function (response) {
        return axios.get(`https://api.twitch.tv/kraken/streams/${user}?client_id=pl279j6lfuewen5dotua3yvv6zx1ma`)
      })
      .catch(function (error) {
        return {error: 'error'};
      });
    })

    const users = Bluebird.all(userList)
     .then((userData) => {
       this.setState({userData: userData});
     });
  }

  streamerView() {
    this.setState({streamerFilter: !this.state.streamerFilter});
  }

  offlineView() {
    this.setState({offlineFilter: !this.state.offlineFilter});
  }

  errorView() {
    this.setState({errorFilter: !this.state.errorFilter});
  }

  render() {
    return (
      <div>
        <button onClick={this.errorView} className={this.state.errorFilter ? 'filtered btn' : 'notFiltered btn'}>Not Found</button>
        <button onClick={this.offlineView} className={this.state.offlineFilter ? 'filtered btn' : 'notFiltered btn'}>Offline</button>
        <button onClick={this.streamerView} className={this.state.streamerFilter ? 'filtered btn' : 'notFiltered btn'}>Online</button>
        <ul className="list-group">
          {this.renderUsers()}
        </ul>
      </div>
    );
  }
}
