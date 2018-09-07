import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import CheckoutTable from './CheckoutTable/CheckoutTable.js';
import CheckoutHeader from './CheckoutHeader/CheckoutHeader.js';
import CheckoutButton from './CheckoutButton/CheckoutButton.js';
import './CheckOut.css';

class CheckoutPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
        }
    }

    handleChange = (event) => {
    }

    render() {
        return (
           
                <div className="checkoutContainer">
                    <CheckoutHeader />
                    <CheckoutTable />
                    <CheckoutButton history={this.props.history}/>
                </div>
            
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(CheckoutPage);