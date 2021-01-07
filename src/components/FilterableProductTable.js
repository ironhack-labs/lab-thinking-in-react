import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import ProductTable from '../components/ProductTable';


/*export default class FilterableProductTable extends Component {
    state= {
        products: this.props.products.data,
        query: '',
        //inStockCheck: false, //for the checkbox bonus

    };

searchHandler = (event) => {
    this.setState({
        query: event,
    });
};

//additional checkbox later
render() {

    return(
        <div>

        <h1>IronStore</h1>

        <SearchBar
            query={ this.state.query }
            searchHandler= { this.searchHandler }
        //checkbox
        />

        <ProductTable
            query={ this.state.query }
            searchHandler= { this.searchHandler }
        //checkbox
        />

      </div>
    );

    }

}*/


class FilterableProductTable extends Component {
    state = {
        //products: this.props.data,
        //filteredProducts: this.props.data,
        stocked: false,
        searchValue = '',
    };

    handleSearch = (event) => {
        this.setState({
            searchValue: event.target.value,
        });
        /*console.log(event.target.value);
        //console.log("I am searching...");

        const newFilteredArray = this.state.data.filter((product) => {
            return product.name.toLowerCase().includes(event.target.value.toLowerCase());
        });

        //console.log(this.state.products.data)

        this.setState({
            products: newFilteredArray,
        });
    };*/

        handleStocked = (event) => {
            this.setState({
                stocked: event.target.checked,
            });
        };

        //
        render() {

            let filteredArray;
        

            if (this.state.stocked) {
                filteredArray = this.props.data.filter((product) => {
                    return (
                        product.stocked && 
                        product.name.toLowerCase().includes(this.state.searchValue)
                    );
                });
            } else {
                filteredArray = this.props.data.filter((product) => {
                    return product.name.toLowerCase().includes(this.state.searchValue)
                })
            }

    return(
        //console.log(this.props, "in f product table")
        return (
            <div>
                <SearchBar handleSearch={this.handleSearch} handleStocked={this.handleStocked}/>
                <ProductTable data={this.state.products} />
            </div>
        );
    }
}

//




export default FilterableProductTable

