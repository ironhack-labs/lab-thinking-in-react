import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchBar: "",
            inStock: false,
        }
    }

updateSearch = (e) =>{
    let searchUpdate = this.state.searchBar;
    searchUpdate = e.target.value;
    this.setState({
      searchBar: searchUpdate,
    }, () => {
        this.props.filterFunction(this.state.searchBar, this.state.inStock)
    })
  }

  updateStock = (e) => {
      this.setState({
          inStock: !this.state.inStock
      }, () => {
        this.props.filterFunction(this.state.searchBar, this.state.inStock)
    })
  }




render(){
    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="active-cyan-3 active-cyan-4 mb-4">
                    <input className="form-control" type="text" value={this.state.searchBar} name="searchBar" onChange = {this.updateSearch} placeholder="Search for a product"/>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="custom-control custom-checkbox">
                    <input className="custom-control-input"  type="checkbox" name="inStock" id="inStock" value={this.state.inStock} onChange = {this.updateStock}/> 
                    <label className="custom-control-label" htmlFor="inStock">Only show items in stock</label>
                    <p>(Red items are out of stock)</p>
                 </div>
            </div>
        </div>
        //   
    )
}
}
