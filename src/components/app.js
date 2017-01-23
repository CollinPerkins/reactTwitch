import React, { Component } from 'react';
import $ from 'jquery';
import axios from 'axios';
import Bluebird from 'bluebird';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usersList: ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"]
    }
    this.renderUsers = this.renderUsers.bind(this);
  }

  renderUsers() {
    if (!this.state.userData || !this.state.userData.length) return;
    console.log(this.state.userData);
    return this.state.userData.map((user, index) => {
      // console.log(this.state.usersList[index]);
      if(user.error === 'error') {
        return (
          <div key={index}>
            <h1>{this.state.usersList[index]}</h1>
            <h3>This user does note exsist!</h3>
          </div>
        )
      }
      if(user.data.stream === null){
        return (
          <div key={index}>
            <h1>{this.state.usersList[index]}</h1>
            <h3>Offline</h3>
          </div>
        )
      }
      return <h1 key={index}>{user.data.stream.channel.display_name}</h1>
    })
  };

  componentWillMount(){
    const userList = this.state.usersList.map((user) => {
      return axios.get(`https://api.twitch.tv/kraken/users/${user}?client_id=pl279j6lfuewen5dotua3yvv6zx1ma`)
      .then(function (response) {
        console.log(response);
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

  render() {
    return (
      <div>
        {this.renderUsers()}
      </div>
    );
  }
}
