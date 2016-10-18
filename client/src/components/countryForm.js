import React,{Component} from 'react';
import Header from './header';

class CountryForm extends Component{
    render(){
        return(
            <div className="container">
                <Header/>
                <form className="country-form">
                    <div className="jumbotron">
                        <h2>About</h2>
                        <div className="form-group">
                            <label for="countryName">Country Name</label>
                            <input type="text" name="countryName" className="form-control" placeholder="please input the name of country"/>
                        </div>
                        <div className="form-group">
                            <label for="continentName">Continent Name</label>
                            <input type="text" name="continentName" className="form-control" placeholder="please input the name of continent"/>
                        </div>
                        <div className="form-group">
                            <label for="countryIntroduction">Country Introduction</label>
                            <textarea name="countryIntroduction" className="form-control" placeholder="please input the introduction" rows="5"></textarea>
                        </div>
                        <div className="form-group">
                            <label for="introductionMovie">Introduction Movie</label>
                            <input type="text" name="introductionMovie" className="form-control" placeholder="please input the url link of introduction movie"/>
                        </div>
                        <div className="form-group">
                            <label for="countryImage">Country Image</label>
                            <input type="text" name="countryImage" className="form-control" placeholder="please input the url link of country image"/>
                        </div>
                        <div className="form-group">
                            <label for="countryWebsite">Country Website</label>
                            <input type="text" name="countryWebsite" className="form-control" placeholder="please input the url link of website"/>
                        </div>
                    </div>
                    <div className="jumbotron">
                        <h2>Where</h2>
                        <div className="form-group">
                            <label for="exampleInputEmail">Email address</label>
                            <input type="email" className="form-control"/>
                        </div>
                    </div>
                    <div className="jumbotron">
                        <h2>When</h2>
                        <div className="form-group">
                            <label for="seasonsInput">Seasons</label>
                            <input type="text" name="seasonsInput" className="form-control" placeholder="please input the url link of seasons information"/>
                        </div>
                        <div className="form-group">
                            <label for="weatherInput">Weather</label>
                            <input type="text" name="weatherInput" className="form-control" placeholder="please input the url link of weather information"/>
                        </div>
                        <div className="form-group">
                            <label for="publicHolidayInput">Public Holiday</label>
                            <input type="text" name="publicHolidayInput" className="form-control" placeholder="please input the url link of public holiday information"/>
                        </div>
                    </div>
                    <div className="jumbotron">
                        <h2>Cost</h2>
                        <div className="form-group">
                            <label for="accomodationCostInput">Accmodation Cost</label>
                            <input type="text" name="accomodationCostInput" className="form-control" placeholder="please input information of accomodation cost "/>
                        </div>
                        <div className="form-group">
                            <label for="transportCostInput">Transportation Cost</label>
                            <input type="text" name="transportCostInput" className="form-control" placeholder="please input information of transportation cost"/>
                        </div>
                        <div className="form-group">
                            <label for="mealCostInput">Meal Cost</label>
                            <input type="text" name="mealCostInput" className="form-control" placeholder="please input information of meal cost"/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
            </div>
            
        )
    }
    
}
export default CountryForm