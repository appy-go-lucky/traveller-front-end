import React, { Component } from "react";
import './ShowBlogs.css';

class ShowBlogs extends Component{

deleteBlogClicked = () => {
        this.props.deleteBlogFunction(this.props.blog_id);
    }
modifyBlogClicked = () => {
        this.props.modifyBlogFunction(this.props.blog_id);
    }

render(){
    return (
        <div>
            <p>Username: {this.props.user_name}</p>
            <p>blog country: {this.props.blog_country_name}</p>
            <p>blog region: {this.props.blog_city}</p>
            <p>{this.props.blog_text}</p>
            <p>Recommendations: </p> 
            <div>{this.props.rest_link === "nothing yet entered"? <p>{this.props.rest_name}</p>:
            <a  className="App-link"
                href = {"https://" + this.props.rest_link}
                target="_blank"
                rel="noopener noreferrer"
            >{this.props.rest_name}</a>}</div>
            <div>{this.props.hotel_link === "nothing yet entered"?<p>{this.props.hotel_name}</p>:
            <a  className="App-link"
                href = {"https://" + this.props.hotel_link}
                target="_blank"
                rel="noopener noreferrer"
            >{this.props.hotel_name}</a>}</div>
            <div>{this.props.attract_link === "nothing yet entered"?<p>{this.props.attract_name}</p>:
            <a  className="App-link"
                href = {"https://" + this.props.attract_link}
                target="_blank"
                rel="noopener noreferrer"
            >{this.props.attract_name}</a>}</div>
            <div className="col-md-2 col-12 text-center"><button className="btn btn-secondary"  
                type="button"onClick={this.modifyBlogClicked}>modify blog</button></div> 
            <div className="col-md-2 col-12 text-center"><button className="btn btn-secondary" 
                type="button"onClick={this.deleteBlogClicked}>delete blog</button></div>    
        </div>
    ) 
  }
}

export default ShowBlogs;