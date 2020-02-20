import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: props.products
    };
  }

    handleFilter = e => {
        let filtArticles = this.props.products.filter(article => 
        article.name.toUpperCase().includes(e.target.value.toUpperCase()));
        this.setState({articles: filtArticles});
    }

    handleCheckbox = () => {
        if (this.state.articles === this.props.products) {
            this.setState({
                articles: this.props.products.filter(a => a.stocked)
            })
        } else {
            this.setState({
                articles:this.props.products
            })
        }
    }



  render() {
    return (
      <div>
        <Searchbar clbk={this.handleFilter} clbk2={this.handleCheckbox}/>
        <ProductTable articles={this.state.articles} />
      </div>
    );
  }
}
