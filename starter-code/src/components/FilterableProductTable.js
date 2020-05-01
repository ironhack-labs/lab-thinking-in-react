import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component{

    constructor(props) {
        super(props);

        this.state = {
            products: props.products,
            searchState: "",
            toogleStock: false,
        }

        this.searchForm = this.searchForm.bind(this);
        this.checkedStock = this.checkedStock.bind(this);
    }

    searchForm (search) {
        console.log(search);

        this.setState({
          searchState: search.toLowerCase(),
        })
    }

    checkedStock(checkbox) {
        
        console.log(checkbox);

        this.setState({
            toogleStock: checkbox,
        })
    }

    render() {

        const { products, searchState, toogleStock } = this.state;
        console.log("PRODUCTS FILTER", products.data[0].name);
        
        return(
            <div>
                <SearchBar searchForm={this.searchForm} checkedStock={this.checkedStock}/>
                

                    <table>
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>PRICE</th>
                        </tr>
                    </thead>
                        <tbody>
                        {
                            products.data.filter(item => toogleStock ? 
                            item.name.toLowerCase().includes(searchState) && item.stocked 
                            : item.name.toLowerCase().includes(searchState))
                            .map((products, idx) => 
                                 <ProductTable key={idx} name={products.name} price={products.price} stocked={products.stocked}/>
  
                            )
                        }
                        </tbody>
                    
                    </table>
                
            </div>
        );
    }
}

export default FilterableProductTable; 