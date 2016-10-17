import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import Home from './components/home';
import CountryDetail from './components/countryDetail';

export default (
    <Route path="/" component={App}>
        <IndexRoute component = {Home}/>
        <Route path="/countries/:name" component={CountryDetail}/>
    </Route>

)