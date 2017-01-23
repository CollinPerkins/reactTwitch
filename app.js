const express = require('express');
const path = require('path');
const port = process.env.PORT || 3030;
const app = express();
const cors = require('cors');
const axios = require('axios');

app.use(express.static(__dirname + '/'));

app.use(cors());

// app.get('/getTwitchList', (req, res) => {
//   var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
//   var userList = [];
//   for (var i = 0; i < users.length; i++) {
//     axios.get('https://api.twitch.tv/kraken/users/' + users[i] + '?client_id=pl279j6lfuewen5dotua3yvv6zx1ma')
//     .then(function (response) {
//       userList.push(response.data);
//
//       console.log(userList);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
//     console.log(userList);
//   }
// });

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'))
});
app.listen(port);
console.log("Server Started " + port);
