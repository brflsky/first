class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleRemoveOption = this.handleRemoveOption.bind(this);
    this.state = {
      options: props.options
    }
  }

  componentDidMount () {
    //if (prevState.options.length !== this.state.options.length) {}
    try {

      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (json) {
        this.setState(()=>({ options }));
      }
    } catch (e) {
      //alert(e);
    }
    
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  handleRemoveOption (optionToRemove) {
    this.setState((prevState) => ({options: prevState.options.filter((option)=> option !== optionToRemove)}));
  }

  handleAddOption(option) {
    if (!option.trim()) {
      return 'Add something';
    }
    if (this.state.options.indexOf(option) > -1) {
      return 'Already in the options';
    }

    this.setState((prevState) => {
      const newOptions = [...prevState.options];
      newOptions.push(option);
      console.log(newOptions);
      return { options: newOptions }
    });
  }

  handleRemoveAll() {
    this.setState(() => ({ options: [] }));
  }

  handlePick() {
    const rNumb = Math.floor(Math.random() * this.state.options.length);
    console.log(this.state.options[rNumb]);
  }

  render() {
    const subtitle = 'Put your life in the hands of cumputer!';


    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          handlePick={this.handlePick}
          hasOptions={this.state.options.length}
         />
        <Options
          options={this.state.options}
          handleRemoveAll={this.handleRemoveAll}
          handleRemoveOption={this.handleRemoveOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
}

const Header = (props) => {

  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );

};

Header.defaultProps = {
  title: 'Indecision'
}

const Action = (props) => {

  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>What should we do</button>
    </div>
  );

}

const Options = (props) => {


  return (
    <div>
      {
        props.options.map((option) => <Option key={option} option={option} handleRemoveOption={props.handleRemoveOption}/>)
      }
      <button onClick={props.handleRemoveAll}>RemoveAll</button>
    </div>
  );


}

const Option = (props) => {

  return (
    <div>
      {props.option}
      <button onClick={() => props.handleRemoveOption(props.option) }>X</button>
    </div>
  );

}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handlerSubmit = this.handlerSubmit.bind(this);
    this.state = {
      err: undefined
    }
  }
  handlerSubmit(e) {
    e.preventDefault();
    const option = e.target.elements.actionName.value.trim();
    const err = this.props.handleAddOption(option);
    this.setState(() => ({ err }));
    e.target.elements.actionName.value = '';
  }

  render() {
    return (
      <div>
        {this.state.err && <p>{this.state.err}</p>}
        <form onSubmit={this.handlerSubmit} >
          <input type="text" name="actionName" />
          <button >Add action</button>
        </form>
      </div>
    );
  }
}

try {

  JSON.parse('sfasdf');
} catch (e) {
  //
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));