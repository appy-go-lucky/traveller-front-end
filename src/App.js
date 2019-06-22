import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import ShowBlogs from './components/ShowBlogs';
import GetBlogs from './components/GetBlogs';
import EditBlog from './components/EditBlog';


class App extends Component {

  state = {
    blogs:[],
    isABlogInEditing: false, 
    blogIdInEditing: 0
  }  

  componentWillMount(){
    this.getBlogs();
  }

  getBlogs(){
      axios.get('https://v1mglih8ha.execute-api.eu-west-2.amazonaws.com/dev/traveller/blog')
      .then(response => {
        let sortedBlogs = response.data.blogs;
        sortedBlogs.sort((a, b) => parseFloat(a.blog_id) - parseFloat(b.blog_id));
       this.setState({blogs:sortedBlogs})
       })
       .catch(function (error) {
       console.log(error);
       })
  }

  addBlog = (userId, blogCountryName, blogCity, blogText, hotelName, hotelLink, restName, restLink, attractName, attractLink)=>{
    if ((userId === undefined) || (userId === "0")){
      alert("select  user");
    }
    if ((blogCountryName === undefined) || (blogCountryName === "Select the blog country")){
      alert("select  country");
    }else{
      axios.post('https://v1mglih8ha.execute-api.eu-west-2.amazonaws.com/dev/traveller/blog',{
      blog_text:blogText,      
      blog_country_name:blogCountryName,
      blog_city:blogCity,
      user_id:parseInt(userId),
      hotel_name:hotelName,
      hotel_link:hotelLink,
      rest_name:restName,
      rest_link:restLink,
      attract_name:attractName,
      attract_link:attractLink  
     })
    .then(() => {
      this.getBlogs();
    })
    .catch(function (error) {
      console.log(error);
    });
    }
  }

  deleteBlog = (blogId) =>{
    axios.delete(`https://v1mglih8ha.execute-api.eu-west-2.amazonaws.com/dev/traveller/blog/${blogId}`)
    .then(() =>{
      this.getBlogs();
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  modifyBlog = (blogId) =>{
    if(this.state.isABlogInEditing === true){
      alert("A blog is already in editing, please try again later")
    }else{
    this.setState({isABlogInEditing: true, blogIdInEditing:blogId})
    }
  }

  saveChanges = (blogId, blogCountryName, blogCity, blogText)=>{
    if ((blogCountryName === undefined)){
      alert("select  country");
    }else{
      axios.put('https://v1mglih8ha.execute-api.eu-west-2.amazonaws.com/dev/traveller/blog',{
      blog_id:parseInt(blogId),
      blog_text:blogText,      
      blog_country_name:blogCountryName,
      blog_city:blogCity, 
     })
    .then(() => {
      this.getBlogs();
      this.setState({isABlogInEditing: false, blogIdInEditing:0})
    })
    .catch(function (error) {
      console.log(error);
    });
    }
  }


  discardChanges = () =>{
    this.setState({isABlogInEditing: false, blogIdInEditing:0})
  }
  
  render(){
    return (
      <div>
        <GetBlogs addBlogFunction={this.addBlog}/>
        {
          this.state.blogs.map((element, index)=>{
            if(this.state.isABlogInEditing){
              if(this.state.blogIdInEditing === element.blog_id){
                return <EditBlog 
                      key={index}
                      blog_id={element.blog_id}
                      user_id={element.user_id}
                      user_name={element.user_name}
                      blog_country_name={element.blog_country_name}
                      blog_city={element.blog_city}
                      blog_text={element.blog_text}
                      rest_name={element.rest_name}
                      rest_link={element.rest_link}
                      hotel_name={element.hotel_name}
                      hotel_link={element.hotel_link}
                      attract_name={element.attract_name}
                      attract_link={element.attract_link}
                      saveChangeFunction={this.saveChanges}
                      discardChangeFunction={this.discardChanges}/>
              }
            } else{
              return(  
                <ShowBlogs  key={index}
                      blog_id={element.blog_id}
                      user_name={element.user_name}
                      blog_country_name={element.blog_country_name}
                      blog_city={element.blog_city}
                      blog_text={element.blog_text}
                      rest_name={element.rest_name}
                      rest_link={element.rest_link}
                      hotel_name={element.hotel_name}
                      hotel_link={element.hotel_link}
                      attract_name={element.attract_name}
                      attract_link={element.attract_link} 
                      deleteBlogFunction={this.deleteBlog}
                      modifyBlogFunction={this.modifyBlog}/>
                   )
              }
            })
          }
      </div>
    );
  }
}
export default App;
