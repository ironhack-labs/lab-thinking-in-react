import React, { Component }from 'react'
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';


class FilterableProductTable extends Component{
    constructor({products}){
        super(products)
        this.state={

            products,
            filteredProducts : []
        }
    }

    filterProduct = (input) =>{

        let filteredProductsCopy = [...this.state.filteredProducts]
        
        filteredProductsCopy = this.state.products.data.filter(elm => elm.name.toLowerCase().includes(input))
       
        this.setState({
            filteredProducts:filteredProductsCopy
        })
    }

    render(){
        return(
            <>
                <h1>IronProduct</h1>
                <SearchBar filterProduct={this.filterProduct}/>
                <ProductTable products= {this.state.products} filtered={this.state.filteredProducts} />
             </>
        )
    }
}

   


export default FilterableProductTable;
