import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    blogs: ["Hi, there", "my name is", "David"]
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
