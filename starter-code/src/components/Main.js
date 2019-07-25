import React, { Component } from "react";
import ProductTable from "./ProductTable";
import Search from "./SearchBar";
import "../App.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.products,
      searchterms: "",
      filtredProductList: this.props.products
    };
  }

  dataFromChildren = searchterm => {
    // console.log("=-=---=", searchterm, "**********", theValue);
    let clone = [...this.state.products];
    let filteredList = clone.filter(eachProduct => {
      console.log("each }{}{}{}{}{}{}{}{}{}{}{}}}{}{}{}{}{}{{}{}", eachProduct);
      return eachProduct.name.toUpperCase().includes(searchterm.toUpperCase());
    });
    console.log("the filtered list >>>>>> ", filteredList);

    this.setState({ filtredProductList: filteredList });
  };

  render() {
    // console.log("=-=--------------test------=", this.props);

    return (
      <div className="main">
        <h1>Iron Store</h1>
        <Search
          products={this.state.products}
          dataFromChildren={this.dataFromChildren}
        />
        <ProductTable products2={this.state.filtredProductList} />
      </div>
    );
  }
}

export default Main;
