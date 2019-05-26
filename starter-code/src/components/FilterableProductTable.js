import React, { Component } from 'react';
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

class Filterable extends Component {
  state = {
    products : this.props.products
  }
  handleSearch = (query) =>{
    this.setState({
      products : this.props.products.filter(e=>e.name.toLowerCase().includes(query.toLowerCase()))
    })
  }
  showStock = (boolean) => {
    if(boolean){
      this.setState({products : this.props.products.filter(e=> e.stocked===boolean)})    
    } else {
      this.setState({products : this.props.products })
    }
  }
  render() {    
    // console.log(this.state.products)
    return (
      <div className="section">
        <div className='container'>
          <h1 class="title">IrontStore</h1>
          <SearchBar search={this.handleSearch} stock={this.showStock} />
          <ProductTable products = {this.state.products}/>
        </div>
      </div>
    );
  }
}

export default Filterable