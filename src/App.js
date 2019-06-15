import React, { Component } from 'react';
import './App.css';
const countryList = require('country-list');

class App extends Component {

  state = {
    blogs: [{
              username:"Brian",
              blogCountry:countryList.getName('TW'),
              blogRegion:"Manchester",
              blogText:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum deserunt explicabo commodi eos dignissimos libero, quam expedita quas in molestiae minus fuga dolor, provident doloribus quae reprehenderit aliquam nam eaque.",
              resterauntRecommendationText:"Tony Romas",
              resterauntLink:"www.tonyromas.com",
              hotelRecommendationText:"Best Western",
              hotelLink:"www.bestwestern.co.uk",
              attractionText:"Alton Towers",
              attractionLink:"https://www.altontowers.com/"
            },
            {
              username:"Dave",
              blogCountry:countryList.getName('GB'),
              blogRegion:"London",
              blogText:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum deserunt explicabo commodi eos dignissimos libero, quam expedita quas in molestiae minus fuga dolor, provident doloribus quae reprehenderit aliquam nam eaque.",
              resterauntRecommendationText:"Nandos",
              resterauntLink:"www.nandos.co.uk",
              hotelRecommendationText:"Hilton",
              hotelLink:"https://www.hilton.com/",
              attractionText:"Madam Tussauds",
              attractionLink:"https://www.madametussauds.com/"
            },
            {
              username:"Sarah",
              blogCountry:countryList.getName('BR'),
              blogRegion:"Sao Paulo",
              blogText:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum deserunt explicabo commodi eos dignissimos libero, quam expedita quas in molestiae minus fuga dolor, provident doloribus quae reprehenderit aliquam nam eaque.",
              resterauntRecommendationText:"Pizza Express",
              resterauntLink:"www.pizzaexpress.com",
              hotelRecommendationText:"Travelodge",
              hotelLink:"www.travelodge.co.uk",
              attractionText:"Stone Hendge",
              attractionLink:"https://www.english-heritage.org.uk/visit/places/stonehenge/"
            }
          ]
  }  

  render(){
    return (
      <div>
        {
          this.state.blogs.map((element, index)=>{
          return <div> 
                  <p>Username: {element.username}</p>
                  <p>blog country: {element.blogCountry}</p>
                  <p>blog region: {element.blogRegion}</p>
                  <p>{element.blogText}</p>
                  <p>Recommendations: {element.resterauntRecommendationText}</p>
                  <p>{element.resterauntLink}</p>
                  <p>{element.hotelRecommendationText}</p>
                  <p>{element.hotelLink}</p>
                  <p>{element.attractionText}</p>
                  <a  className="App-link"
                      href = {element.attractionLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      >{element.attractionLink}</a>
                 </div> 
          })
        }
      </div>
    );
  }
}
export default App;
