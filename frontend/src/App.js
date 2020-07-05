import React from 'react';
import logo from './logo.svg';
import './App.css';


class GiGiApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  render() {
    return (
      <div className="App">
      <header className="App-header">
        <h3>GiGi:Hello!</h3>
        <ChatList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          {/*<label htmlFor="new-todo">
            What needs to be done?
          </label>*/}
          <textarea class = "inputLine" ref={(input)=>this.inputRef=(input)}
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button class = "button" ref={(button)=>this.buttonRef=(button)}>
            Send
          </button>
        </form>
        </header>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
    if (this.inputRef) {
        console.log('resizing...')
        this.inputRef.style.height = 'auto';
        this.inputRef.style.height = this.inputRef.scrollHeight + 'px';
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
      isGiGi: Date.now()%2,
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

class ChatList extends React.Component {

  componentDidMount() {
    this.contentNode.scrollTop = this.contentNode.scrollHeight;
  }

  componentDidUpdate() {
    this.contentNode.scrollTop = this.contentNode.scrollHeight;
  }

  render() {

    const chars = this.props.items.map(item => {
      // const desc = item.isGiGi ?'GiGi' :'Me';
      if (item.isGiGi)      
        return (<div key={item.id} className = "Chat-GiGi" contenteditable> <span > {item.text} </span></div>);
      else 
        return (<div key={item.id} className = "Chat-Me" contenteditable> <span > {item.text} </span></div>);
    }); 
    

    return (
      <div className = "Chat-List" ref={ (node) => this.contentNode = (node) }> {chars} </div>
    );
  }
}

export default GiGiApp;
