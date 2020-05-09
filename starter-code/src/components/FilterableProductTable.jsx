import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
    state = {
        searchInput: "",
        boxChecked: false,
    };

    // It receives an argument "event", and when the event is going to happen,
    // then it is going to launch the function, and the onChange is the event,
    // and the function receiving the "event" as an argument executes something :
    // the searchHandler captures what is written in the search (input),
    // and the state remembers it (we push it inside the state with setState)
    // and we want to find the value that matches this input
    searchHandler = (event) => {
        this.setState({ searchInput: event.target.value })
    }
    // then we need a new key with the information from this function to give to
    // the <ProductTable> : <ProductTable product={this.props.products} searchValue={new state}/>

    checkHandler = (event) => {
        this.setState({ boxChecked: event.target.checked }) // true or false
    }

    render() {
        return (
            <div>
                {/* this is how we call a function that has been defined afterwards (in the child): 
                we use the name of the function inside SearchBar (ici searchHandler) */}
                <SearchBar
                    searchHandler={this.searchHandler}
                    checkHandler={this.checkHandler}
                />
                <ProductTable
                    product={this.props.products}
                    searchValue={this.state.searchInput}
                    checkValue={this.state.boxChecked}
                />

            </div>
        )
    }
}

export default FilterableProductTable
