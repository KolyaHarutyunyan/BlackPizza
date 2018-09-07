import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../CheckOut.css';

class CheckoutHeader extends Component {
    render() {
        return (
            <div className="checkoutHeader">
                <div className="customerInfo">
                    <p>{this.props.reduxState.cart.customer.name}</p>
                    <p>{this.props.reduxState.cart.customer.street_address}</p>
                    <p>{this.props.reduxState.cart.customer.city}</p>
                    <p>{this.props.reduxState.cart.customer.zip}</p>
                </div>
                <div className="customerInfo pickOrDeliv">
                    <p>{this.props.reduxState.cart.type}</p>
                </div>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(CheckoutHeader);