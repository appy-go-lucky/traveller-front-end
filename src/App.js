import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import ShowBlogs from './components/ShowBlogs';
import GetBlogs from './components/GetBlogs';
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

  addBlog(user_id, blog_country_name, blog_text, blog_city, hotel_name, hotel_link, rest_name, 
    rest_link, attract_name, attract_link){
    if ((user_id === undefined) || (user_id === "0")){
      alert("select  user");
    }
    if ((blog_country_name === undefined) || (blog_country_name === "Select the blog country")){
      alert("select  country");
    }else{
    axios.post('https://v1mglih8ha.execute-api.eu-west-2.amazonaws.com/dev/traveller',{
      user_id:parseInt(user_id),
      blog_city:blog_city,
      blog_country_name:blog_country_name,
      blog_text:blog_text,
      hotel_name:hotel_name,
      hotel_link:hotel_link,
      rest_name:rest_name,
      rest_link:rest_link,
      attract_name:attract_name,
      attract_link:attract_link  
    })
    .then(response => {
      this.getBlogs();
    })
    .catch(function (error) {
      console.log(error);
    });
    }
  }

  render(){
    return (
      <div>
        <GetBlogs addBlogFunction={this.addBlog}/>
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
