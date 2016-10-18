import React,{Component} from 'react';
import axios from 'axios';
import Header from './header';

class countryDetail extends Component{
    componentWillMount(){
           this.state = {country:undefined}
    }
    componentDidMount(){
        const name = this.props.params.name;
        axios.get('http://localhost:12000/countries/'+name)
        .then((response)=>{
            this.setState({country:response.data})
        })
    }
    render(){
        console.log(this.state.country);
        if (this.state.country==undefined){
            return (
                <div>Loading</div>
            )
        }
        return(
            <div className="country-detail">
                <Header/>
                <h1>Plan a Trip in {this.state.country.name}</h1>
                <div className="about container">
                    <h2>About</h2>
                    <iframe width="420px" height="315px" src={this.state.country.about.introductionMovieLink}>
                    </iframe>
                    <h5 className="introduction-text">{this.state.country.about.introduction}</h5>
                    <a href={this.state.country.about.officialWebSite} className="about-image">
                        <img src={this.state.country.about.image} width="450px"/>
                    </a>
                </div>
                <div className="container where">
                    <h2>Where</h2>
                    <div className="container itineraty">
                        <h3>Suggest Itineraties</h3>
                        <div className="row">
                                {this.state.country.where.suggestItineraties.map(function(itineraty){
                                    return(
                                        <div className="col-sm-6 col-md-3">
                                            <div className="thumbnail">
                                                <a href={itineraty.url}>
                                                    <img src={itineraty.image}/>
                                                </a>
                                                <div className="caption">
                                                    <h4>{itineraty.name}</h4>
                                                </div>
                                            </div>
                                        </div>

                                    )
                                })}
                        </div>
                    </div>
                    <div className="container top-places">
                        <h3>Top Places</h3>
                        <div className="row">
                            {this.state.country.where.topPlaces.map(function(place){
                                return(
                                    <div className="col-sm-6 col-md-4">
                                        <div className="thumbnail">
                                            <img src={place.image}/>
                                            <div className="caption">
                                                <h4>{place.name}</h4>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="container videos-seeing">
                        <h3>Videos Seeing</h3>
                        <div className="row">
                            {this.state.country.where.videos.map(function(video){
                                return(
                                    <div className="col-sm-6 col-md-4">
                                            <iframe src={video.url}></iframe>
                                            <h4>{video.name}</h4>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="when container">
                    <h2>When</h2>
                    <div className="row">
                       <div className="col-sm-6 col-md-4">
                           <a href={this.state.country.when.seasonsLink}>
                               <img src="http://res.cloudinary.com/dbzhzl8c8/image/upload/v1476744925/fourseasons_fhgzdk.jpg" width="260px" height="180px"/>
                                <h4>Seasons</h4>
                           </a>
                       </div>
                       <div className="col-sm-6 col-md-4">
                           <a href={this.state.country.when.weatherLink}>
                               <img src="http://res.cloudinary.com/dbzhzl8c8/image/upload/v1476745528/weather_tdqtch.jpg" width="260px" height="180px"/>
                                <h4>Wheather</h4>
                           </a>
                       </div>
                       <div className="col-sm-6 col-md-4">
                           <a href={this.state.country.when.holidayLink}>
                               <img src="http://res.cloudinary.com/dbzhzl8c8/image/upload/v1476746203/holiday_iqksjk.jpg" width="260px" height="180px"/>
                                <h4>Public Holiday</h4>
                           </a>
                       </div>
                    </div>
                </div>
                <div className="container cost">
                    <h2>Cost</h2>
                    <div className="container accomodation">
                        <h3>Accomodation</h3>
                        <p>{this.state.country.cost.accomodation}</p>
                    </div>
                    <div className="container transport">
                        <h3>Tranportation</h3>
                        <p>{this.state.country.cost.transport}</p>
                    </div>
                    <div className="container transport">
                        <h3>Meal</h3>
                        <p>{this.state.country.cost.meal.breakfast}</p>
                        <p>{this.state.country.cost.meal.lunch}</p>
                        <p>{this.state.country.cost.meal.dinner}</p>
                    </div>
                </div>
            </div>
           
            
        )
    }
}

export default countryDetail;