import React from 'react';
import './SearchBar';

class SearchBar extends React.Component {

    state= {
        allProducts: this.props.products,
        name:'',
        showOnlyInStock: false,
    }

    handleChange = event => {
        let { type, name, value, checked } = event.target;

        if(type==="checkbox") {
            value=checked;
        }

        this.setState({ [name]: value }, () => {
            this.props.filterProducts(this.state);
        });
    }


    render() {
    return(
        <div>
        <div>
            <label htmlFor="name">Search</label>
            <input type="text" placeholder="Search for a product" name="name" id="name" value={this.state.name} onChange={this.handleChange} />
        </div>
        <div>
            <input type="checkbox" name="showOnlyInStock" id="showOnlyInStock" checked={this.state.showOnlyInStock} onChange={this.handleChange} />
            <label htmlFor="showOnlyInStock">Show only products in Stock</label>
        </div>
        </div>
    );
    }
}

export default SearchBar;