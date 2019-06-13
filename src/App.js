import React, { Component } from 'react';
import './App.css';
const countryList = require('country-list');

class App extends Component {

  state = {
    blogs: ["Hi, there", "my name is", "David", countryList.getName('TW')]
  }

  render(){
    return (
      <div>
        {
          this.state.blogs.map((element, index)=>{
          return <p>{element}</p>
          })
        }
      </div>
    );
  }
}
export default App;
