import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.css';

class Header extends Component {

    render(){
        return(
            <header className="App-header">
                <h1 className="App-title">Black Goat Pizza</h1>
                <img className="goatLogo" src="images/pizza_goat.png"/>
            </header>

        );
    }

}




const mapReduxStateToProps = (reduxState) => ({
    reduxState
});
export default connect(mapReduxStateToProps)(Header);