import React, {Component} from 'react';

class SearchBar extends Component {


  handleSearchChange = (e) => {
      this.props.onChangeSearch({
        [e.target.name] : e.target.value,
      });
  };
  handleStockChange = (e) => {
    this.props.onChangeSearch({
      [e.target.name] : e.target.checked,
    });
  };

  render() {
    const {searchValue, onlyShowStock} = this.props.searchParams;
    return (
      <div>
        <input name={'searchValue'} onChange={this.handleSearchChange} type="text" value={searchValue}/>
        <div>
          <input onChange={this.handleStockChange} name={'onlyShowStock'} type="checkbox" defaultChecked={onlyShowStock} />
          Only show products on stock
        </div>
      </div>
    );
  }
}

export default SearchBar;