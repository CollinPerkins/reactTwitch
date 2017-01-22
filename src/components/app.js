import React, { Component } from 'react';
import $ from 'jquery';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  componentWillMount(){
    // $.ajax({
    //   url: ``,
    //   jsonp: "callback",
    //   dataType: "jsonp",
    //   data: {
    //     format: "json"
    //   },
    //   success: function( response ) {
    //     this.setState({
    //     })
    //   }.bind(this)
    // });
  }

  render() {
    return (
      <div>
        <h1>Hi</h1>
      </div>
    );
  }
}
