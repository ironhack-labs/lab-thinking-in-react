import React from "react";
import CategoryDisplay from "./CategoryDisplay/CategoryDisplay";
import { Columns } from 'react-bulma-components/full';
import {connect} from "react-redux";
import data from '../../data.json';

import "./SearchResult.css";

class SearchResult extends React.Component{


  /**
   * Returns an object {category: [products]} that match the queries
   */
  getSearchResults(){

    let filteredProducts = data["data"];

    // 1. filter on search input
    filteredProducts = filteredProducts.filter(product => {
      return product.name.toLowerCase().includes(this.props.searchInput.toLowerCase())
    });

    // 2. re-filter if want to show only on stock
    if(this.props.showOnlyOnStock){
      filteredProducts = filteredProducts.filter(product => product.stocked)
    }

    // 3. transform to object
    let out = {};

    filteredProducts.forEach(product => {
      if(!(product.category in out)){
        out[product.category] = [product]
      } else {
        out[product.category].push(product);
      }
    });

    return out

  }


  render(){
    // console.log(this.props.searchInput, ' - ', this.props.showOnlyOnStock);

    const filteredProducts = this.getSearchResults();


    const categoryDisplays = [];
    for (let category in filteredProducts){
      categoryDisplays.push(
        <CategoryDisplay key={category} category={category} products={filteredProducts[category]}/>
      )
    }

    return (
      <div className={"SearchResult"}>
        <Columns breakpoint="mobile">
          <Columns.Column size={"one-quarter"}>Name</Columns.Column>
          <Columns.Column size={"one-quarter"}>Price</Columns.Column>
        </Columns>
        <hr/>
        {categoryDisplays}
      </div>

    )
  }
}

const mapStateToProps = state => state;
export default connect(mapStateToProps)(SearchResult);