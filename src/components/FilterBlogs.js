import React, { Component } from "react";


class FilterBlogs extends Component{
    state = {
        countryToFilterOn:"",
        filterOn: false
    }

    filterBlogCountryClicked = () => {
        this.props.filterBlogCountryFunction();
    }

    saveFilteredCountry = (event) =>{
        this.setState({countryToFilterOn:event.target.value})
    }

    filterBlogClicked = () => {
        this.props.filterBlogClickedFunction(this.state.countryToFilterOn);
        this.setState({filterOn: true})
    }

    resetFilterClicked = () =>{
        this.props.resetFilterClickedFunction();
        this.setState({filterOn:false})
    }

    render(){
        return (
            <div className="container" >{this.state.filterOn ? 
                <div><button className="btn btn-secondary" type="button"onClick={this.resetFilterClicked}>reset filter</button></div>:
                <div className="col-md-2 col-12 text-center">{this.props.filteredContent ? 
                <div className="col-2">
                        <select onChange={this.saveFilteredCountry}>
                            <option value="0">Select a country to filter on</option>
                                { 
                                    this.props.countriesToFilterOn.map((element, index)=>{
                                        return <option key={index} value={element}>{element} 
                                            </option>
                                    })
                                }
                        </select ><button className="btn btn-secondary" 
                    type="button"onClick={this.filterBlogClicked}>filter</button></div>:
                    <button className="btn btn-secondary"  
                    type="button"onClick={this.filterBlogCountryClicked}>filter by blog country</button>}
            </div>}
            </div>

    ) 
  }
}

export default FilterBlogs;