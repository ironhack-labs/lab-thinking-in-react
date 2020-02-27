import React from 'react';


export default class SearchBar extends React.Component {

    inStock(e){
        this.props.stocked(e);
    }

    render(){
        return(
            <div>
                <label htmlFor="search">Search</label>

                <input type="text" onChange={e => this.props.searchProduct(e)}/>
                <input type="checkbox" onChange={e => this.inStock(e)}/>Only show products in stock.
            </div>
        )
    }
}



