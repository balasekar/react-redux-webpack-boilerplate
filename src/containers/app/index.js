import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

import Home from '../home'
import About from '../about'
import logo from './logo.svg';
import './app.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to Spowerz</h2>
                    <Link to="/">Home</Link>
                    <Link to="/about-us">About</Link>
                </div>
                <main>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about-us" component={About} />
                </main>
            </div>
        );
    }
}

export default App;