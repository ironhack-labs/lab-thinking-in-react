import React, { Component } from "react";
import "./Style.css";


class SearchBar extends Component {


  render() {

    return(

      <form>
        <label>
          <input className="sizing" value={this.props.name} onChange={event => this.props.updateSearch(event)} type="text" name="name" placeholder="Type the name of the product" />
        </label>
        <label>
          <input value={this.props.stock} onChange={event => this.props.inStock(event)} type="checkbox" name="stock" />
          Only show products in stock
        </label>
      </form>

    )
  }
}

export default SearchBar;