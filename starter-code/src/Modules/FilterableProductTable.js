import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import originalData from "../data.json";

class FilterableProductTable extends Component {
  state = {
    initialData: originalData.data,
    searchState: false,
    queryWord: "",
    arrayOfReturned: [],
    onlyStock: false
  };

  onChange = e => {
    let searchedWord = e.target.value.toLowerCase();
    if (searchedWord && !this.state.onlyStock) {
      let answerArray = this.state.initialData.filter(item =>
        item.name.toLowerCase().includes(searchedWord)
      );
      this.setState({
        arrayOfReturned: answerArray,
        searchState: true,
        queryWord: searchedWord
      });
    } else if (searchedWord && this.state.onlyStock) {
      let answerArray = this.state.initialData.filter(item => {
        return item.name.toLowerCase().includes(searchedWord) && item.stocked;
      });
      this.setState({
        arrayOfReturned: answerArray,
        searchState: true,
        queryWord: searchedWord
      });
    } else {
      this.setState({ searchState: false });
    }
  };

  onChangeBox = e => {
    if (!this.state.searchState) {
      this.setState({ onlyStock: !this.state.onlyStock });
    } else if (this.state.searchState && !this.state.onlyStock) {
      let answerArray = this.state.initialData.filter(item => {
        return (
          item.name.toLowerCase().includes(this.state.queryWord) && item.stocked
        );
      });
      this.setState({
        arrayOfReturned: answerArray,
        searchState: true,
        onlyStock: true
      });
    } else {
      let answerArray = this.state.initialData.filter(item => {
        return item.name.toLowerCase().includes(this.state.queryWord);
      });
      this.setState({
        arrayOfReturned: answerArray,
        searchState: true,
        onlyStock: false
      });
    }
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar
          onChangeHandler={this.onChange}
          onChangeBox={this.onChangeBox}
        />
        <ProductTable
          originalData={
            this.state.searchState
              ? this.state.arrayOfReturned
              : this.state.initialData
          }
        />
      </div>
    );
  }
}

export default FilterableProductTable;
