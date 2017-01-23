import React, { Component } from 'react';
import $ from 'jquery';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  componentWillMount(){
    // $.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?callback=?', function(data) {
    //   console.log(data);
    // });
    $.ajax({
      url: `https://api.twitch.tv/kraken/streams/freecodecamp`,
      jsonp: "callback",
      dataType: "jsonp",
      data: {
        format: "json"
      },
      success: function( response ) {
        // this.setState({
        // })
        console.log(response);
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Hi</h1>
      </div>
    );
  }
}
