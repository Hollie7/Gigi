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
      <div>
        <h3>GiGi:Hello!</h3>
        <ChatList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          {/*<label htmlFor="new-todo">
            What needs to be done?
          </label>*/}
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Send
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
      isGiGi: false
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

class ChatList extends React.Component {
  render() {

    const chars = this.props.items.map(item => {
      const desc = item.isGiGi ?'GiGi:' :'Me';      
      return (
        <li key={item.id}><p>{desc}: {item.text}</p></li>
      );
    }); 

    return (
      <ul> {chars} </ul>
    );
  }
}

export default GiGiApp;
