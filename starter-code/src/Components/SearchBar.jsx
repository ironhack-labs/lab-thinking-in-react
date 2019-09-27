import React from 'react';

class SearchBar extends React.Component {

    constructor(props){
        super(props);

    }

    render(){
        return(
            <div>
                <div>
                <h2>Search</h2>
                <input className="input" type="text" placeholder="Search..." onChange={this.props.searchTheItem} name="itemToSearch"/>
                </div>
                <input className="input" type="checkbox"  onChange={this.props.onlyStock}></input>
                <p>Only show products on stock</p>
            </div>
        )
    }
}

export default SearchBar;