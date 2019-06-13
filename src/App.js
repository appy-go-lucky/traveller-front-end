import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    blogs: ["Hi, there"]
  }

  render(){
    return (
      <div>
        <p>{this.state.blogs}</p>
      </div>
    );
  }
}
export default App;
