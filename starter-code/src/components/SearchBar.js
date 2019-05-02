import React from "react";
import "./SearchBar.css";
import ProductTable from "./ProductTable";

class SearchBar extends React.Component {
  state = {
    name: undefined,
    isStock: false
  };
  changeFormData(e, key) {
    const newState = { ...this.state };

    newState[key] = e.target.value;

    this.setState(newState);
  }

  setChecked() {
     
      this.setState({
        ...this.state,
        isStock : true
      })    
      
    }
  render() {
    console.log(this.props.products)
    console.log(this.state.isStock)
    return (
      <div className="searchForm">
        <form className="product-form">
          <label>Search: </label>
          <input
            type="text"
            name="name"
            placeholder="filter by product name"
           
            onChange={e => this.changeFormData(e, "name")}
          />
          <label>
            <input type="checkbox" onClick={() => this.setChecked()} />
            Only show products on stock
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;