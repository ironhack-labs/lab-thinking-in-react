import React, {Component} from 'react';

class SearchBar extends Component {
    handleFilterChange = (e) => {
        this.props.filterTextChange(e.target.value)
    };
    handleStockOnlyChange = (e) => {
        this.props.stockOnlyChange(e.target.checked)
    };

    render(){
        return(
            <div className={'searchbar'}>
                <input className={'search'} onChange={this.handleFilterChange} value={this.props.text} type="text" placeholder="Search..."/>
                <input onChange={this.handleStockOnlyChange} checked={this.props.onlyStock} type="checkbox" name="stock"/>Only show products in stock
            </div>
        );
    }
}

export default SearchBar;