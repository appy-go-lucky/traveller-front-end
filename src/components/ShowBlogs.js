import React, { Component } from "react";

class ShowBlogs extends Component{

render(){
    return (
        <div>
            <p>Username: {this.props.user_name}</p>
            <p>blog country: {this.props.blog_country_name}</p>
            <p>blog region: {this.props.blog_city}</p>
            <p>{this.props.blog_text}</p>
            <p>Recommendations: </p> 
            <p><a  className="App-link"
                href = {"https://" + this.props.rest_link}
                target="_blank"
                rel="noopener noreferrer"
            >{this.props.rest_name}</a></p>
            <p><a  className="App-link"
                href = {"https://" + this.props.hotel_link}
                target="_blank"
                rel="noopener noreferrer"
            >{this.props.hotel_name}</a></p>
            <p><a  className="App-link"
                href = {"https://" + this.props.attract_link}
                target="_blank"
                rel="noopener noreferrer"
            >{this.props.attract_name}</a></p>
        </div>
    ) 
  }
}

export default ShowBlogs;