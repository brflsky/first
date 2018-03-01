class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of cumputer!';
    const options = ['One', 'Two', 'Five'];

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options}/>
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
};

class Action extends React.Component {
  onActionHandler () {
    alert('OnActionHandler');
  }
  render() {
    return (
      <div>
        <button onClick={this.onActionHandler}>What should we do</button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handlerRemoveAll = this.handlerRemoveAll.bind(this);
  }

  handlerRemoveAll() {
    //alert('OnRemoveAllHandler');
    console.log(this.props.options);
  }
  render() {
    return (
      <div>
        {
          this.props.options.map((option) => <Option key={option} option={option} />)
        }
        <button onClick={this.handlerRemoveAll}>RemoveAll</button>
      </div>
    );

  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.option}
      </div>
    );
  }
}

class AddOption extends React.Component {

  handlerSubmit (e) {
    e.preventDefault();
    if (e.target.elements.actionName.value.trim()) {
      alert(e.target.elements.actionName.value)
    }
    e.target.elements.actionName.value = '';
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handlerSubmit} >
          <input type="text" name="actionName" />
          <button >Add action</button>
        </form>
      </div>
    );
  }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));