var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// assets
app.use('/assets', express.static(__dirname + '/assets'));
app.use('/app', express.static(__dirname + '/app'));

/* Route all requests to the client for routing */
app.get('*', function(req, res) {
  res.sendFile('index.html', { root: __dirname });
});

app.listen(8080, function() {
  console.log('Server running on port 8080');
})

module.exports = app;
