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
        <div className="container" id="show">
            <div className="row">
                <div className="col-md-4 col-12"><b>Username:</b> {this.props.user_name}</div>
                <div className="col-md-4 col-12"><b>Destination:</b> {this.props.blog_country_name}</div>
                <div className="col-md-4 col-12"><b>Region:</b> {this.props.blog_city}</div>
                <div className="col-12"><b>Blog:</b> {this.props.blog_text}</div>
                <div className="col-12"><b><u>Recommendations: </u></b></div> 
                <div className="col-md-2 col-12"><b>Restaurant: </b></div>
                <div className="col-md-3 col-12"><b>{this.props.rest_name}</b></div>
                <div className="col-md-7 col-12">{this.props.rest_link === "nothing yet entered"? <div>{this.props.rest_name}</div>:
                <a  className="App-link"
                    href = {"https://" + this.props.rest_link}
                    target="_blank"
                    rel="noopener noreferrer"
                >{this.props.rest_link}</a>}</div>
                <div className="col-md-2 col-12"><b>Hotel: </b></div>
                <div className="col-md-3 col-12"><b>{this.props.hotel_name}</b></div>
                <div className="col-md-7 col-12">{this.props.hotel_link === "nothing yet entered"?<div>{this.props.hotel_name}</div>:
                <a  className="App-link"
                    href = {"https://" + this.props.hotel_link}
                    target="_blank"
                    rel="noopener noreferrer"
                >{this.props.hotel_link}</a>}</div>
                <div className="col-md-2 col-12"><b>Attraction: </b></div>
                <div className="col-md-3 col-12"><b>{this.props.attract_name}</b></div>
                <div className="col-md-7 col-12">{this.props.attract_link === "nothing yet entered"?<div>{this.props.attract_name}</div>:
                <a  className="App-link"
                    href = {"https://" + this.props.attract_link}
                    target="_blank"
                    rel="noopener noreferrer"
                >{this.props.attract_link}</a>}</div>
                <div className="col-6 text-center"><button className="btn btn-secondary"  
                    type="button"onClick={this.modifyBlogClicked}>modify blog</button></div> 
                <div className="col-6 text-center"><button className="btn btn-secondary" 
                    type="button"onClick={this.deleteBlogClicked}>delete blog</button></div>
            </div>    
        </div>
    ) 
  }
}

export default ShowBlogs;