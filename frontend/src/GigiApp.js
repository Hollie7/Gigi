import React from 'react';
import logo from './logo.svg';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ButtonBase from '@material-ui/core/ButtonBase';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import { flexbox } from '@material-ui/system';
import './App.css';

const styles = (theme) => ({
  Container: {
      backgroundColor: "#e1f5fe",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "calc(10px + 2vmin)",
  },
  viewButtonLabel: {
    textTransform: "none",
    maxWidth: '80%',
    overflow: 'hidden',
    wordWrap:"break-word",
    wordBreak:"break-all",  
  },
  TextField: {
    width: '80%',
    marginLeft: "5%",
    marginBottom: "1%"
  },
  ButtonList: {
    width: '80%',
    marginLeft: "5%",
    fontSize: "2vmin",
  },
  top: {
    top: '5%',
    position: "fixed",
  },
  bottom: {
    width: '90%',
    bottom: '3%',
    position: "fixed",
  },
  chatlist: {
    flexGrow: "1",
    flexShrink: "1",
  },

});


class GiGiApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '', options: []};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    {
      const newOption = {
        text: "test1111111",
        id: 0,
      };    
      this.state.options = this.state.options.concat(newOption); 

      const newOption2 = {
        text: "test222222",
        id: 1,
      };    
      this.state.options = this.state.options.concat(newOption2); 

      const newOption3 = {
        text: "test3",
        id: 2,
      };    
      this.state.options = this.state.options.concat(newOption3); 
    }
  }


  render() {

    const {classes} = this.props;

    return (
      <body>
      <div className={classes.Container}>
      <Box display="flex" flexDirection="column" >
        <Container flexGrow = {1} flexShrink = {1} onSubmit={this.handleSubmit}>
        <ChatList items={this.state.items} />
        <div className={classes.bottom}>
        <OptionList options = {this.state.options} classes = {classes} onClick = {i=>this.optionClick(i)}/>
          <form noValidate autoComplete="off">
            <TextField
              fullWidth
              multiline
              rowsMax={4}
              value={this.state.text}
              onChange={this.handleChange}
              className = {classes.TextField}
            />
          </form>
          <Button variant="contained" color="primary" style={{float:"right", width: "15%"}} ref={(button)=>this.buttonRef=(button)} onClick={this.handleSubmit}>
            Send
          </Button>
          </div>
          </Container>
        </Box>
        </div>
        </body>
    );
  }

  optionClick(i) {
    const newItem = {
      text: this.state.options[i].text,
      id: Date.now(),
      isGiGi: false,
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
    }));    
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

GiGiApp.propTypes = {
  classes: PropTypes.object.isRequired
};


class OptionList extends React.Component {


  render() {
    
    var length = 0;
    const chars = this.props.options.map(item => {
      if(item.text.length >= 10) length = 1;
      return (<Button size = "medium" disableFocusRipple key={item.id} onClick={() => this.props.onClick(item.id)}> <div className={this.props.classes.viewButtonLabel}><span> {item.text}</span> </div></Button>);
    }); 
    
    if(length == 1) {
      return (
      <ButtonGroup orientation="vertical" className={this.props.classes.ButtonList} color="default" ref={ (node) => this.contentNode = (node) }> {chars} </ButtonGroup>
    );
    }
    else 
    return (
      <ButtonGroup fullWidth className={this.props.classes.ButtonList} color="default" ref={ (node) => this.contentNode = (node) }> {chars} </ButtonGroup>
    );
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
      <Container className = "Chat-List" ref={ (node) => this.contentNode = (node) }> {chars} </Container>
    );
  }
}

export default withStyles(styles)(GiGiApp);
