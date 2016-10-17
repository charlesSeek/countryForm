import React, {Component} from 'react';

class Header extends Component {
    render(){
        return(
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/">Country information Management System</a>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="/">Home</a></li>
                        <li><a href="/new">Add Country</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
    
}
export default Header;

