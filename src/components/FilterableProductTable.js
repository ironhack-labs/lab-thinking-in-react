import React from 'react'
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';


class FilterableProductTable extends React.Component {
    state = {
    products: this.props.products,
    copyProducts: this.props.products
}
filterProducts(event){
    const value = event.target.value.toLowerCase()
    const filteredProducts = this.state.products.filter((product)=>{
      return product.name.toLowerCase().includes(value)
    })
    console.log(filteredProducts)
    this.setState({...this.state, copyProducts: filteredProducts})
  }

    render(){
        return(
            <div className='FilterableProductTable'>
                <h1>IronStore</h1>
                <SearchBar filterProducts={(event)=>this.filterProducts(event)} />
                <ProductTable products={this.state.copyProducts}/>

            </div>
        )
    }
}

export default FilterableProductTable