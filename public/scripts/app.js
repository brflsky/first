'use strict';

console.log('app.js is running');

var multiplier = {
  numbers: [1, 5, 10],
  multiplyBy: 5,
  multiply: function multiply() {
    var _this = this;

    return this.numbers.map(function (number) {
      return number * _this.multiplyBy;
    });
  }
};

console.log(multiplier.multiply());

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'p',
    null,
    ' InDecision App - one more '
  ),
  ' ',
  React.createElement(
    'p',
    null,
    ' paragraph'
  )
);

var user = {
  name: 'Marek',
  age: 23,
  location: 'Hamburg'
};
function getLocation(location) {
  if (location) return React.createElement(
    'p',
    null,
    'Location: ',
    location,
    ' '
  );
}
var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'Anonymous'
  ),
  user.age && user.age >= 18 && React.createElement(
    'p',
    null,
    'User age: ',
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
