import React, {Component} from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    render() {return(
        <div className='container is-max-desktop'>
            <label name='search'>Search <br></br>
            <input className='input' type='text' value={this.props.data} onChange={this.props.filter} />
            </label>

            <label className='checkbox custom-checkbox'>
                <input type='checkbox' onChange={this.props.onlyStocked} />
                Only show products on stock
            </label>
        </div>
    )}
}

export default SearchBar;