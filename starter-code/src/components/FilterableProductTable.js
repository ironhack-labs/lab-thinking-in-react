import React from "react"
import Searchbar from "./Searchbar"
import ProductTable from "./ProductTable"

class FilterableProductTable extends React.Component {

  state = {
    products: this.props.data,
    checkbox: false,
  }

 // SEARCH  
  searchHandler = (event) => {
    
    let filter = [...this.props.data].filter(e => e.name.toLowerCase().startsWith(event.target.value.toLowerCase()))
    let filter2 = [...this.props.data].filter(e => e.stocked === true).filter(e => e.name.toLowerCase().startsWith(event.target.value.toLowerCase()))
    let whatToFilter

    this.state.checkbox ? whatToFilter = filter2 : whatToFilter = filter

    this.setState({
      products: whatToFilter
    })
  }

// CHECKED ?
  checkboxHandler = () => {

    let whatToFilter

    this.state.checkbox ? whatToFilter = [...this.props.data] : whatToFilter = [...this.props.data].filter(e => e.stocked === true)

  this.setState({
    checkbox: !this.state.checkbox,
    products: whatToFilter
  })
}


  render() {  

    return (<div >
      <h1>IronStore</h1>
      <Searchbar searchHandler={this.searchHandler} checkboxHandler={this.checkboxHandler}/>
      <ProductTable products={this.state.products}/>
    </div>)
  }
}

export default FilterableProductTable


// Question: the status of the checkbox affects all components on the page - how do you handle this? 
// Would you check the status of the checkbox in each method
// Or is there an option to somehow set the state of this.state.products based on the status of the checkbox globally?
// e.g. if (this.state.checkbox === true) {this.setState(products: [onlyTheOne's in stock] else {products: [all products]})}