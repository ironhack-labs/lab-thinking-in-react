import React, { Component } from 'react';
import ProductTable from './productTable';
import SearchBar from './searchBar'



class FilterableProductTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.products.data,
        }
    }

    search = (filteredData) => this.setState({
        data: filteredData,
    })

    render() {
        console.log(this.state.data)

        return (
            <main>
                <div>
                    <h1 className="my-3">IronStore</h1>
                    <SearchBar products={this.state.data} polizon={(filteredData) => this.search(filteredData)} />

                    <ProductTable products={this.state.data} />


                </div>
            </main>
        )
    }
}



export default FilterableProductTable;