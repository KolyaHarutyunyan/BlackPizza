import React, { Component } from 'react';
import '../CheckOut.css';

class CheckoutItem extends Component {

    render() {
        return (
            <tr>
            <td>
                <span>{this.props.nameOfPizza.name}</span>
            </td>
            <td>
                <span>{this.props.nameOfPizza.cost}</span>
            </td>
            </tr>
        )
    }
}

export default CheckoutItem;