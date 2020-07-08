import React, {Component} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { withRouter} from 'react-router-dom'
import { MemoryRouter as Router } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

import { withStyles } from '@material-ui/styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const useStyles = (theme) => ({
  root: {
    width: "100vw",
    flexGrow: 1,
  },
  menuButton: {
    flexGrow: 0,
  },
  title: {
    flexGrow: 1,
    textAlign:"center",
  },
  text: {
    textTransform: "none",
  }
});

class Navbar extends Component {
    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push('/')
    }

    render() {
        const {classes} =  this.props;
        const loginRegLink = (
                <Button color="inherit" size="small" component={RouterLink} to="/login">Login</Button>
                
        )

        const userLink = (
            <ButtonGroup color="primary">
                <li className="nav-item">
                    <Link className="nav-link" to="/profile">Profile</Link>
                </li>
                <li className="nav-item">
                    <a href="" onClick={this.logOut.bind(this)} className="nav-link">Logout</a>
                </li>
            </ButtonGroup>
        )

        return (
            <div className={classes.root}>
            <AppBar position="static">
              <Toolbar>
              <Button disableRipple disableFocusRipple color="inherit" size="large"  component={RouterLink} to="/" className={classes.title}>
                <Typography variant="h6" className={classes.text}>
                
                  GiGi:Always Here
                
                </Typography>
                </Button>
                {localStorage.usertoken ? userLink : loginRegLink}
              </Toolbar>
            </AppBar>
            </div>

        )
    }
}

export default  withStyles(useStyles)(withRouter(Navbar))

            /*<nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
                <button className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbar1"
                    aria-controls="navbar1"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-md-center" id="navbar1">
                        <h3>GiGi:Always Here </h3>
                        {localStorage.usertoken ? userLink : loginRegLink}
                    </div>
            </nav>*/