import React,{Component} from 'react';
import Header from './header';
import axios from 'axios';


class Home extends Component {
    componentWillMount(){
        this.state = {
            countries:[]
        }
        
    }
   
    componentDidMount(){
        axios.get('http://localhost:12000/countries')
        .then((response)=>{
            this.setState({countries:response.data});
        })
        .catch(function(error){
            console.log(error);
        })
        
    }
    renderCountriesList(){
        return(
            <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Country</th>
                            <th>Continent</th>
                            <th>Detail</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.countries.map(function(country){
                            return(
                                 <tr key={country.name}>
                                    <td>{country.name}</td>
                                    <td>{country.continent}</td>
                                    <td><a href={"/countries/"+country.name}>Detail</a></td>
                                    <td><a>Update</a></td>
                                    <td><a>Delete</a></td>
                                </tr>
                            )
                        })}
                    </tbody>
            </table>
        )
    }
    render(){
        return(
            <div>
               <Header/>
               <div className="main-page">
                    {this.renderCountriesList()}
               </div>
            </div>
            
        );
    }
    
}
export default Home;