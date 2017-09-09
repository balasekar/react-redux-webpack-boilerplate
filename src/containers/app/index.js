import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import Home from '../home'
import About from '../about'
import './app.css';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
            <div className="App">
                <div className="App-header">
                    <Link to="/">Home</Link>
                    <Link to="/about-us">About</Link>
                </div>
                <main>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about-us" component={About} />
                </main>
                <RaisedButton label="Material UI" />
            </div>
            </MuiThemeProvider>
        );
    }
}

export default App;