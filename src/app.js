console.log('app.js is running');

const multiplier = {
  numbers: [1,5,10],
  multiplyBy: 5,
  multiply() {
    return this.numbers.map(number => number * this.multiplyBy);
  }
}

console.log(multiplier.multiply());


const template = <div><p> InDecision App - one more </p> <p> paragraph</p></div>;

const user = {
  name: 'Marek',
  age: 23,
  location: 'Hamburg'
}
function getLocation (location) {
  if (location) return <p>Location: {location} </p>;
}
const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>User age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

const appRoot = document.getElementById('app');


ReactDOM.render(templateTwo, appRoot);