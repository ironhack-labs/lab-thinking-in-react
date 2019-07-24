import React, { Component } from 'react';
import './Main.css';
import SearchBar from '../SearchBar/SearchBar';
import ProductTable from '../ProductTable/ProductTable';


class Main extends Component {
constructor(props){
    super(props)
}

Searching = (term) =>{
    this.props.newSearch(term)
}


    render() {
        return (
            <div>
                
<SearchBar change={this.Searching} />
<ProductTable data = {this.props.Theproducts}  />

            </div>

        );
    }
}

export default Main;

