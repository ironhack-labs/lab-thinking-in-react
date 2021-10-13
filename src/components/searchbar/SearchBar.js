import React, { Component } from 'react'

export default class SearchBar extends Component {
    state = {
        searchContent: '',
        checked: false,
    }

    searchOnChangeHandler = event => {
        // console.log(event.target);

        const { name, value } = event.target;
        const { products } = this.props;
        // console.log(name, value);

    //     // [name] in square brackets is to create a dynamic key name in the object
        this.setState(
            {
            [name]: value
            }, 
        () => {
            if (this.state.searchContent.length === 0){
                this.props.onChangeSearchHandler(products)
            } else {
                const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(this.state.searchContent.toLowerCase()));
                // console.log(filteredProducts)
                this.props.onChangeSearchHandler(filteredProducts);
            }
        })
    }

    checkBoxHandler = event => {
        // console.log(event.target);
        const { products } = this.props;
        const { name, value } = event.target;
        // console.log(products);

    //     // [name] in square brackets is to create a dynamic key name in the object
        this.setState(
            {
            [name]: value
            }, 
        () => {
            if (this.state.checked === false){
                this.state.checked = true;
                const inStockProducts = products.filter((product) => product.stocked === true);
                console.log(inStockProducts)
                this.props.inStockHandler(inStockProducts);
            } else {
                this.state.checked = false;
                this.props.inStockHandler(products);

            }
        })
        // console.log(name, value)
    }

    



    render() {
        // setInterval(() => console.log(this.state.checked), 5000) 
        return (
            <div>
                <h5>Search</h5>
                <input 
                name = "searchContent" 
                value={this.state.searchContent}
                onChange={this.searchOnChangeHandler}
                placeholder="Search for a product"
                />
                <br/>
                <input
                name = "checkBox"
                type = "checkbox"
                value={this.state.checked}
                onChange={this.checkBoxHandler}
                />
                <label>Show only products in stock</label>
                <br/>
                    
                    
                
            </div>
        )
    }
}
