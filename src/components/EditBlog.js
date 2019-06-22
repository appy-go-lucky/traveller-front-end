import React, { Component } from "react";
import axios from "axios";
const countryList = require('country-list');

class EditBlogs extends Component{

state = {
    blog:{blog_id:0, blog_text:"", blog_country_name:"", blog_city:""},
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
            blog_id:this.props.blog_id,
            blog_text:this.props.blog_text,
            blog_country_name:this.props.blog_country_name,
            blog_city:this.props.blog_city,
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
    
    saveCountry = (event) =>{
        this.setState({blog_country_name:event.target.value})
      }

    blogCityBoxChanged = (event) =>{
    this.setState({blog_city: event.target.value})
        }

    blogPostBoxChanged = (event) =>{
        this.setState({blog_text: event.target.value})
        }

    saveChangeClicked = () => {
        this.props.saveChangeFunction(this.state.blog_id, this.state.blog_country_name,
                                   this.state.blog_city, this.state.blog_text);
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
                    <select onChange={this.saveCountry}>
                        <option value={this.props.blog_country_name}>{this.props.blog_country_name}</option>
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