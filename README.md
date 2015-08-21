## How to build a view
````
module.exports = {
  events: function () {
    'h1': [
      ['click', this.displayAlertMessage, this],
    ]
  },
  build: function (data, wrapper) {
    var html = '<h1>' + data.name + '</h1>';
    return [html, this.events()];
  },
  displayAlertMessage: function (e) {
    alert('hellllloooo!');
  }
}
````

### Client-side
````
var DomHelper = require('dom-helper');
var index = require('./views')

window.onload = function () {
  var entry = index.build();
  DomHelper.render(entry, '.container');
}
````

### Server-side (w/ Express)
````
var app = require('express')();
var DomHelper = require('dom-helper');
var index = require('./views')

app.get('/', function(req, res) {
  res.render('index', { body: index.render({ name: 'Maria' })[0] });
}); 
````

Depending on what templating engine you are using, you will want to render `body` as raw html.
