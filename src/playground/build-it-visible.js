
class Visability extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
    this.handlerToggle = this.handlerToggle.bind(this);
  }
  handlerToggle () {
    this.setState(prevState => ({visible: !prevState.visible}));
  }
  render() {
    return(
      <div>
        <h1>Visability</h1>
        <button onClick={this.handlerToggle}>{this.state.visible ? 'Hide info' : 'Show additional info'}</button>
        {this.state.visible && (<div><p>Additional info</p></div>)}
      </div>
    );
  }
}

ReactDOM.render(<Visability />, document.getElementById('app'));








// let visible = false;

// const onVisible = () => {
//   visible = !visible;
//   render();
// }

// const render = () => {
  
//   const template = (
//     <div>
//       <h1>Visibility</h1>
//       <button onClick={onVisible}>{visible ? 'Hide info' : 'Show more info'}</button>
//       {visible && <p>Here is more info!!</p> }
//     </div>
//   );

//   ReactDOM.render(template, document.getElementById('app'));
// }

// render();