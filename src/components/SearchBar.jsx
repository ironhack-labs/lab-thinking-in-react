import React from 'react';

class SearchBar extends React.Component {
    render() {
        return(
            <div>
                <h3>Search</h3>
                <input type="text" onChange={(e)=>this.props.search(e.target.value)}/>
                <div>
                    <input type="checkbox" onClick={(e)=>this.props.toggle(e)} />
                    <label>Only show products on stock</label>
                </div>
            </div>
            
        )
    }
}

export default SearchBar;