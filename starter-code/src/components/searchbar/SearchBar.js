import React, { Component }from 'react';
import "./SearchBar.css"


class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchBar: "",
            inStock: false
        }
}
    handleChange = e => {
     const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
         this.setState({
           [e.target.name]: value,
         });
    }
    handleSearch = e => {
        this.handleChange(e)
        this.props.filteredSearch(e.target.value);
    }
    handleCheck = e => {
        this.handleChange(e)
        this.props.filteredCheck(e.target.checked)
    }
    
    render() {
        return (
          <div className="row search-row">
            <form>
              <div className="form-group">
                <input
                  type="text"
                  name="searchBar"
                  value={this.state.searchBar}
                  onChange={this.handleSearch}
                  className="search-bar"
                  placeholder="Search product"
                />
                <div className="form-check">
                  <input
                    type="checkbox"
                    value={this.state.inStock}
                    onChange={this.handleCheck}
                    name="inStock"
                    className="form-check-input"
                  />
                </div>
              </div>
            </form>
          </div>
        );
    }
 
 }
 

export default SearchBar;
