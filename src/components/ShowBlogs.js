import React, { Component } from "react";

class ShowBlogs extends Component{

render(){
    return (
        <div>
            <p>Username: {this.props.user_name}</p>
            <p>blog country: {this.props.blog_country_name}</p>
            <p>blog region: {this.props.blog_city}</p>
            <p>{this.props.blog_text}</p>
            <p>Recommendations: {this.props.rest_name}</p>
            <p>{this.props.rest_link}</p>
            <p>{this.props.hotel_name}</p>
            <p>{this.props.hotel_link}</p>
            <p>{this.props.attract_text}</p>
            <a  className="App-link"
                href = {this.props.attract_link}
                target="_blank"
                rel="noopener noreferrer"
            >{this.props.attract_name}</a>
            
        </div>
    ) 
  }
}

export default ShowBlogs;