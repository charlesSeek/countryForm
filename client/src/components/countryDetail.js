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
            </div>
            //<div>hello world</div>
            
        )
    }
}

export default countryDetail;