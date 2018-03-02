class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handlerIncrement = this.handlerIncrement.bind(this);
    this.handlerDecrement = this.handlerDecrement.bind(this);
    this.handlerReset = this.handlerReset.bind(this);
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('count');
      const count = parseInt(JSON.parse(json),10);
      console.log(count);
      if(!isNaN(count))
        this.setState(()=>({count}));
    } catch (e) {
  
    }

  }

  componentDidUpdate(prevProsps, prevState) {
    if (prevState.count === this.state.count) return;
    const json = JSON.stringify(this.state.count);
    localStorage.setItem('count',json)
  }

  handlerIncrement () {
    this.setState(prevState => ({count: prevState.count + 1}));
  };
  handlerDecrement() {
    this.setState(prevState => {
      return {count: prevState.count -1}
    });
  };
  handlerReset() {
    this.setState(() => {
      return {
        count: 0
      }
    });
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handlerIncrement}>+1</button>
        <button onClick={this.handlerDecrement}>-1</button>
        <button onClick={this.handlerReset}>Reset</button>
      </div>
    );
  }
}



ReactDOM.render(<Counter />, document.getElementById('app'));



// console.log('app.js is running');

// let counter = 0;
// const id1 = 'bID1';
// const id2 = 'bID2';
// const id3 = 'bID3';

// const increment = () => {
//   counter++;
//   renderCounter();
// }
// const decrement = () => {
//   counter--;
//   renderCounter();
// }
// const reset = () => {
//   counter = 0;
//   renderCounter();
// }

// const renderCounter = () => {
//   const templateTwo = (
//     <div>
//       <h1>Counter: {counter} </h1>
//       <button id={id1} onClick={increment}>+1</button>&nbsp;
//       <button id={id2} onClick={decrement}>-1</button>&nbsp;
//       <button id={id3} onClick={reset}>RESET</button>
//     </div>
//   );
//   ReactDOM.render(templateTwo, appRoot);
// }

// var appRoot = document.getElementById('app');

// renderCounter();