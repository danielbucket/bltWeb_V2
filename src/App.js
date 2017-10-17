import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      user_name: "",
      user_email: ""
    }
  }

  componentDidMount() {
    fetch('/tits')
    .then(res => res.json())
    .then(data => {
      this.setState({
        user_name: data.data[0].user_name,
        user_email: data.data[0].user_email
      })
      console.log("data: ", data.data[0])
    })
  }
  render() {
    return (
      <div className="App">
        <p>User Name: {this.state.user_name}</p>
        <p>User Email: {this.state.user_email}</p>
      </div>
    );
  }
}

export default App;
