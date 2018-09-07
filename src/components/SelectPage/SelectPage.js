import React, { Component } from 'react';
import PizzaList from './PizzaList/PizzaList.js';
import { connect } from 'react-redux';
import './SelectPage.css';



class SelectPage extends Component {
    handleNext = (event) => {
        this.props.history.push('/customer');
    }
   

    render() {
        return(
            <div className="selectPageContainer">
                <h1>TOTAL: {this.props.reduxStore.cart.order_total}</h1>
                <PizzaList />
                <button className="nextBtn" onClick={this.handleNext}>Next</button>
            </div>
        );
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
})
export default connect(mapReduxStoreToProps)(SelectPage);