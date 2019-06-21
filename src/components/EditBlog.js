import React, { Component } from "react";
import axios from "axios";
const countryList = require('country-list');

class EditBlogs extends Component{

state = {
    blog:{blog_text:"", blog_country_name:"", blog_city:"", user_id:0, hotel_name:"",
            hotel_link:"", rest_name:"", rest_link:"", attract_name:"", attract_link:""},
    users:[],
    countries:[]
}

componentWillMount(){
    this.getUsers()
    this.getCountries()
    this.blogToEdit()
    }

    blogToEdit() {
        this.setState({
            blog_text:this.props.blog_text,
            blog_country_name:this.props.blog_country_name,
            blog_city:this.props.blog_city,
            user_id:this.props.user_id,
            hotel_name:this.props.hotel_name,
            hotel_link:this.props.hotel_link,
            rest_name:this.props.rest_name,
            rest_link:this.props.rest_link,
            attract_name:this.props.attract_name,
            attract_link:this.props.attract_link,
        })
    }

    getUsers(){
        axios.get('https://v1mglih8ha.execute-api.eu-west-2.amazonaws.com/dev/traveller/user')
    
        .then(response =>{
          this.setState({users:response.data.users})
        })
        .catch(function (error) {
        console.log(error);
        })
      }

    getCountries(){
        const currentCountries = countryList.getNames()
        this.setState({countries:currentCountries})
    }  

    saveUser = (event) =>{
        this.setState({user_id:event.target.value})
      }
    
    saveCountry = (event) =>{
        this.setState({blog_country_name:event.target.value})
      }

    blogCityBoxChanged = (event) =>{
    this.setState({blog_city: event.target.value})
        }

    blogPostBoxChanged = (event) =>{
        this.setState({blog_text: event.target.value})
        }

    hotelTextBoxChanged = (event) =>{
        this.setState({hotel_name: event.target.value})
        }

    hotelLinkBoxChanged = (event) =>{
        this.setState({hotel_link: event.target.value})
        }
    restTextBoxChanged = (event) =>{
        this.setState({rest_name: event.target.value})
        }

    restLinkBoxChanged = (event) =>{
        this.setState({rest_link: event.target.value})
        }

    attractTextBoxChanged = (event) =>{
        this.setState({attract_name: event.target.value})
        }

    attractLinkBoxChanged = (event) =>{
        this.setState({attract_link: event.target.value})
        }

    saveChangeClicked = () => {
        this.props.saveChangeFunction(this.state.user_id, this.state.blog_country_name,
                                   this.state.blog_city, this.state.blog_text,
                                   this.state.hotel_name,this.state.hotel_link,
                                   this.state.rest_name,this.state.rest_link,
                                   this.state.attract_name,this.state.attract_link);
        } 

    discardChangeClicked = () =>{
        this.props.discardChangeFunction()
    }

render(){
    return (
        <div className="container" >
        <div className="row generalContent">
        <form className="formInTheCentre">
            <div className="row">
              <div className="col-2">
                    <select onChange={this.saveUser}>
                        <option value={this.props.user_id}>{this.props.user_name}</option>
                            { 
                                this.state.users.map((element, index)=>{
                                    return <option key={index} value={element.user_id}>{element.user_name} 
                                        </option>
                                })
                            }
                    </select >
                </div>
                <div className="col-2">
                    <select onChange={this.saveCountry}>
                        <option value="0">{this.props.blog_country_name}</option>
                            { 
                                this.state.countries.map((element, index)=>{
                                    return <option key={index} value={element}>{element} 
                                        </option>
                                })
                            }
                    </select >
                </div>
                <div className="col-12">    
                    <input onChange={this.blogCityBoxChanged} className="form-control" type="text"
                    defaultValue={this.props.blog_city}/>
                </div>
                <div className="col-12">    
                    <input onChange={this.blogPostBoxChanged} className="form-control" type="text"
                    defaultValue={this.props.blog_text}/>
                </div>
                <div className="col-12">    
                    <input onChange={this.hotelTextBoxChanged} className="form-control" type="text"
                    defaultValue={this.props.hotel_name}/>
                </div>
                <div className="col-12">    
                    <input onChange={this.hotelLinkBoxChanged} className="form-control" type="text"
                    defaultValue={this.props.hotel_link}/>
                </div>
                <div className="col-12">    
                    <input onChange={this.restTextBoxChanged} className="form-control" type="text"
                    defaultValue={this.props.rest_name}/>
                </div>
                <div className="col-12">    
                    <input onChange={this.restLinkBoxChanged} className="form-control" type="text"
                    defaultValue={this.props.rest_link}/>
                </div>
                <div className="col-12">    
                    <input onChange={this.attractTextBoxChanged} className="form-control" type="text"
                    defaultValue={this.props.attract_name}/>
                </div>
                <div className="col-12">    
                    <input onChange={this.attractLinkBoxChanged} className="form-control" type="text"
                    defaultValue={this.props.attract_link}/>
                </div>
                <div className="col-6 text-center">
                    <button className="btn btn-secondary" type="button" onClick={this.saveChangeClicked}>
                    Save changes
                    </button>
                </div>
                <div className="col-6 text-center">
                    <button className="btn btn-secondary" type="button" 
                    onClick={this.discardChangeClicked}>
                    discard changes
                    </button>
                </div>
            </div>
        </form>      
        </div>
    </div>
    ) 
  }
}

export default EditBlogs;