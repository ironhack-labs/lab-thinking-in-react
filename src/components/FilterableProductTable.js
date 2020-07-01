import React, { Component } from 'react';
import data from '../data.json'
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
    state = {
        products: data.data,
        filteredThings: data.data,
        inStock:data.data,
        result: data.data
    }

    filterThingsHandler = (query) => {
        const filtered = this.state.products.filter(singleThing =>
            singleThing.name.toLowerCase().includes(query.toLowerCase())
        );
    
        this.setState({ result: filtered });
    };

    inStockHandler = (theyIn) => {
        let query= document.querySelector("input[type=text]").value;
        //console.log('query',query)

        const filtered = this.state.products.filter(singleThing =>
            singleThing.name.toLowerCase().includes(query.toLowerCase())
        );

        const stock = this.state.result.filter(singleThing =>
            singleThing.stocked == theyIn
        );
        if(theyIn == true){
            this.setState({ result: stock });
        }else {
            
            if(query.length>0){
                this.setState({ result:filtered })
            }
            else{
                this.setState({ result:data.data })
            }
            
        }
        
    }

    render() {
        return (
            <div>
                <SearchBar stockThings={this.inStockHandler} filterThings={this.filterThingsHandler}/>
                <ProductTable result={this.state.result} />
            </div>
        )
    }
}

export default FilterableProductTable;