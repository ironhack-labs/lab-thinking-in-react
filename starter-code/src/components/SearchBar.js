import React, {Component} from 'react';
import ShowData from './ShowData';


class SearchBar extends Component {

  state = {
    inputValue : "",
    showOnlyInStock : false,
    product : [],
  }

  handleChange = (e) =>{
    this.setState({
      inputValue : e.target.value,
    })
  }

  checkStock = (e) =>{
    this.setState({
      showOnlyInStock : !this.state.showOnlyInStock,
    })
  }

  filterProducts = () => {
    const {data} = this.props;
    return data.filter((product) => {
      const lc = product.name.toLowerCase();
      const filter = this.state.inputValue.toLowerCase();
      return lc.includes(filter);
    })
  }

  render(){
    const {data} = this.props;
    const {showOnlyInStock, product, inputValue} = this.state;
    const productsInStock = [];


    if(showOnlyInStock){
      {data.map((product, index)=>{
         if(product.stocked){
           return productsInStock.push(product)
         }
      })
      }
    }

    return(
      <div>
        <h2>Search</h2>
        
        <p> <input type="text" onChange={this.handleChange} value={inputValue} /> </p>
        <input type="checkbox" name="showOnlyInStock" id="showOnlyInStock" onClick={this.checkStock} /> Show only products on stock

        {inputValue.length>0 && this.filterProducts().map((product) => {
          if(productsInStock.length>0){

            if(productsInStock.includes(product)){
              return <h4>{product.name} - {product.price}</h4>
            } 
          } else{
              return <h4>{product.name} - {product.price}</h4>
            }
        })
        }

      </div>

    )
  }
}

export default SearchBar