import React, { Component } from 'react'

export default class SearchBar extends Component {
    state = {
        searchContent: '',
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


    render() {
        return (
            <div>
                <input 
                name = "searchContent" 
                value={this.state.searchContent}
                onChange={this.searchOnChangeHandler}
                />
                    
                
            </div>
        )
    }
}
