import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import ShowBlogs from './components/ShowBlogs';
const countryList = require('country-list');

class App extends Component {

  state = {
    blogs: [],
  }  

  componentWillMount(){
    this.getBlogs();
  }

  getBlogs(){
      axios.get('https://v1mglih8ha.execute-api.eu-west-2.amazonaws.com/dev/traveller/blog')
      .then(response => {
       this.setState({blogs:response.data.blogs})
       })
       .catch(function (error) {
       console.log(error);
       })
  }

  render(){
    return (
      <div>
        {
          this.state.blogs.map((element, index)=>{ 
            return(
              <ShowBlogs  key={index}
                      user_name={element.user_name}
                      blog_country_name={element.blog_country_name}
                      blog_city={element.blog_city}
                      blog_text={element.blog_text}
                      rest_name={element.rest_name}
                      rest_link={element.rest_link}
                      hotel_name={element.hotel_name}
                      hotel_link={element.hotel_link}
                      attract_name={element.attract_name}
                      attract_link={element.attract_link} />
                   )
            })
          }
      </div>
    );
  }
}
export default App;
