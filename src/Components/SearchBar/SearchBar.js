import React, {Component} from 'react';
import './SearchBar.css';

class SearchBar extends Component{
    state ={
        productSearch:''
    }
    onSearch = async evt=>{
        this.setState({
            productSearch:evt.target.value
        })
        this.props.findProduct(evt.target.value)
    }

    onCheckBox = evt =>{
        console.log(this.state.productSearch)
        this.props.showProductsOnStock(this.state.productSearch)
    }
    
    render(){
        return (
            <div>
            <h3>Search</h3>
              <input  name='search-input' type="search" placeholder='Search Product' onChange={this.onSearch}/>
              <div>
                <label>Only show products on stock </label>
                <input  name="checkbox-stock" type="checkbox" onChange={this.onCheckBox} />
              </div>
            </div>
          );
    }
}





export default SearchBar;
