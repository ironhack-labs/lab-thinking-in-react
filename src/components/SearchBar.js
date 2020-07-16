import React, { Component } from 'react';

export default class SearchBar extends Component {
    state = {
        name:'',
        productsInStock:''
    };
    changeHandler = (e) => {
        const query = e.target.value;
        this.setState({name: query});
        this.props.filterProducts(query);
    }
    checkedChangeHandler = (e) => {
        const productsInStock = e.target.checked;
        this.setState({productsInStock:productsInStock});
        this.props.stockProducts(productsInStock);
    };
    render() {
        return (
            <div>
                <input type="text" placeholder="search" name="name" value={this.state.name} onChange={this.changeHandler}/>
                <input id='checkIt' value={this.state.inStock} type="checkbox" onChange={this.checkedChangeHandler}/>
                <label htmlFor='checkIt'>Only products in stock</label>
            </div>
        )
    }
   
}

