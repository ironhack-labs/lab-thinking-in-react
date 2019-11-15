import React from 'react';
import './search-bar.css';

class SearchBar extends React.Component {
    changeString = (e) => {
        console.log(e.target.value)
     this.props.updateSearchString(e.target.value);
    }
    changeChecked = (e) => {
         console.log(e.target.checked);
         this.props.updateCheckedValue(e.target.checked);
    }
    render() {
      return (
          <div className="search-bar">
              <input type="text"
                     className="search-input"
                     name="searchString"
                     value={this.props.searchString}
                     onChange={this.changeString}
                     placeholder="search" />
              <div className="check-input">
                <input type="checkbox"
                      name="stocked"
                      checked={this.props.stocked}
                      onChange={this.changeChecked}
                     
                       /> <p>Only show products on stock</p>
              </div>
              
          </div>
      )
    }
}
export default SearchBar;