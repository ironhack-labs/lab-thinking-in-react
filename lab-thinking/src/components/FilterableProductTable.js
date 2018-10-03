import React, { Component } from "react";
import products from "../data.json";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

class FilterableProductTable extends Component {
  constructor() {
    super();
    this.state = {
      data: products.data,
      search: '',
      flag : false

    };
  }



  filterSearch = (search, flag) => {
    console.log('jason',products.data);
    this.setState({ data: products.data });
    console.log('data',this.state.data);
    let newData = this.state.data.filter(ele => {
      return ele.name.includes(search);
    });
    if(!flag){
      newData = newData.filter(ele => {
        return ele.stocked;
      });
    }
    console.log(newData);
    this.setState({ data: newData });
  };

  actualizeSearch = (search)=>{
    this.setState({search:search});
    this.filterSearch(this.state.search, this.state.flag);
  }

  actualizeFlag = (flag)=>{
   
    this.setState({flag:flag});
    console.log(this.state.flag);

    this.filterSearch(this.state.search, this.state.flag);
  }



  render() {
    return (
      <div style={{ border: "orange" }}>
        <SearchBar
          newSearch={search => {
            this.actualizeSearch(search);
          }}
          isChecked={flag => {
            this.actualizeFlag(flag);
          }}
        />
        <ProductTable data={this.state.data} />
      </div>
    );
  }
}

export default FilterableProductTable;
