import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: this.props.products.data,
            searchResults:this.props.products.data,
            onlyShowTheStock: false,
            searchWord:''
        }
    }

    searchHandler=(input)=> {
        // console.log(this.state.onlyShowTheStock)
        const results=this.state.products.filter(p=>p.name.toLowerCase().includes(input.toLowerCase()));
        const finalResults = this.state.onlyShowTheStock ? results.filter(p=>p.stocked) : results;
        
        this.setState({
            searchWord:input,
            searchResults:finalResults
        })
    }

    clickHandler=(e) => {
        // const results = e.target.checked ? this.state.searchResults.filter(p=>p.stocked) : this.state.searchResults;

        //use the callback function ()=>
        this.setState({onlyShowTheStock:e.target.checked},()=>this.searchHandler(this.state.searchWord))
    }

    render() {
        
        return (
            <div>
                <h1>IronStore</h1>
                <SearchBar search={this.searchHandler} toggle={this.clickHandler} />

                <ProductTable results={this.state.searchResults} />
                

            </div>
        )
    }
}

export default FilterableProductTable;