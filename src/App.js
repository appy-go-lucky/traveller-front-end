import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import ShowBlogs from './components/ShowBlogs';
import GetBlogs from './components/GetBlogs';
import EditBlog from './components/EditBlog';
import Nav from './components/Nav';


class App extends Component {

  state = {
    blogs: [],
    isABlogInEditing: false,
    blogIdInEditing: 0
  }

  componentWillMount() {
    this.getBlogs();
  }

  getBlogs() {
    axios.get('https://v1mglih8ha.execute-api.eu-west-2.amazonaws.com/dev/traveller/blog')
      .then(response => {
        let sortedBlogs = response.data.blogs;
        sortedBlogs.sort((a, b) => parseFloat(a.blog_id) - parseFloat(b.blog_id));
        this.setState({ blogs: sortedBlogs })
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  addBlog = (userId, blogCountryName, blogText, blogCity, hotelName, hotelLink, restName, restLink, attractName, attractLink) => {
    if ((userId === undefined) || (userId === "0")) {
      alert("select  user");
    }
    if ((blogCountryName === undefined) || (blogCountryName === "Select the blog country")) {
      alert("select  country");
    } else {
      axios.post('https://v1mglih8ha.execute-api.eu-west-2.amazonaws.com/dev/traveller/blog', {
        blog_text: blogText,
        blog_country_name: blogCountryName,
        blog_city: blogCity,
        user_id: parseInt(userId),
        hotel_name: hotelName,
        hotel_link: hotelLink,
        rest_name: restName,
        rest_link: restLink,
        attract_name: attractName,
        attract_link: attractLink
      })
        .then(() => {
          this.getBlogs();
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  deleteBlog = (blogId) => {
    axios.delete(`https://v1mglih8ha.execute-api.eu-west-2.amazonaws.com/dev/traveller/blog/${blogId}`)
      .then(() => {
        this.getBlogs();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  modifyBlog = (blogId) => {
    if (this.state.isABlogInEditing === true) {
      alert("A blog is already in editing, please try again later")
    } else {
      this.setState({ isABlogInEditing: true, blogIdInEditing: blogId })
    }
  }

  render() {
    return (
      <div className="App">
        <Nav text="Talking Travel" />
        <div id="subHeader">
          <h4>Welcome to the travel site that gives you first-hand experiences of the places you want to visit</h4>
        </div>
        <div id="subHeader2">
          <h6>Take a look at the recommendations below and check out the best hotels, restaurants and attractions in that area</h6>
        </div>
        <div>
          <GetBlogs addBlogFunction={this.addBlog} />
          {
            this.state.blogs.map((element, index) => {
              if (this.state.isABlogInEditing) {
                if (this.state.blogIdInEditing === element.blog_id) {
                  return <EditBlog
                    key={index}
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
                    attract_link={element.attract_link} />
                }
              } else {
                return (
                  <ShowBlogs key={index}
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
                    modifyBlogFunction={this.modifyBlog} />
                )
              }
            })
          }

        </div>
        <div id="Footer">
          <p>Powered by 'Appy Go Lucky</p>
        </div>
      </div>
    );
  }
}
export default App;
