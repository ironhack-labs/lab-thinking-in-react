import React, { Component } from 'react'
import SearchBar from '../SearchBar/SearchBar.jsx'
import ProductTable from '../ProductTable/ProductTable.jsx'
import ProductRow from '../ProductRow/ProductRow.jsx'


class FilterableProductTable extends React.Component {
  state = {
    questions: [],
    search: "",
  }

  componentDidMount = () => {
    this.setState({questions: this.props.products})
  } 

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };


  render() {
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar 
          questions = {this.state.questions}
          handleChange = {this.handleChange}
           />
        <ProductTable data = {this.props.products} />  
      </div>
    )
  }
}


export default FilterableProductTable