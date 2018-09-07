import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../CheckOut.css';

class CheckoutHeader extends Component {
    render() {
        return (
            <div className="checkoutHeader">
                <div className="customerInfo">
                    <p>{this.props.reduxState.cart.customer.name}Buzz</p>
                    <p>{this.props.reduxState.cart.customer.street_address}Andy</p>
                    <p>{this.props.reduxState.cart.customer.city}Pixar</p>
                    <p>{this.props.reduxState.cart.customer.zip}55555</p>
                </div>
                <div className="customerInfo pickOrDeliv">
                    <p>{this.props.reduxState.cart.type}Pick Up</p>
                </div>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(CheckoutHeader);