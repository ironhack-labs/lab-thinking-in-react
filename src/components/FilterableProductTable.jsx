import React, { Component } from 'react'

import ProductTable from './ProductTable';
import  SearchBar from './SearchBar.jsx';


class FilterableProductTable extends Component {
   
    state = {
        products: this.props.products,
        value: "",
    }


    handleSearch =(valueSearch) => {
        let arrToPrint= [...this.state.products];

        if( this.state.products.filter(({name})=> new RegExp(valueSearch,"gi").test(name)) ) {
            this.setState({
           products: arrToPrint = arrToPrint.filter(({name})=> new RegExp(valueSearch,"gi").test(name)),
           value: valueSearch,
       })
         
           
        } else {
            this.setState({
           products: arrToPrint = [...this.state.products],
           value: valueSearch,
       })
        }

       this.setState({
           products: arrToPrint,
           value: valueSearch,
       })
      
    }

    render() {
      
        return (
            <div>
                <h1>IronStore</h1>
                {/* <div className="monBOule"> toto {this.props.data.price}</div> */}
                {/* {arrProduct} */}




                <SearchBar valueInput={this.state.value} handleSearch={this.handleSearch}  products={this.state.products}/>
                <ProductTable products={this.state.products} />
            </div>
        )
    }
}


export default  FilterableProductTable;