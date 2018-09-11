import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

	 state = {users: []}

  componentDidMount() {
    fetch('http://54.202.6.90/api', {method: 'GET', mode: 'cors'})
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
         <p>Client side woot!</p>
      </div>
    );
  }
}

export default App;
