import React, { Component } from "react";

class SearchBar extends Component {

    state = {
        search : ""
    }

    handleChange = e => {
        this.props.filterProductSearch(e.target.value)
    }

    render(){
        const search = this.props.products
        return(
            <div className="search-bar">
                <input className="form-control"  type="text" placeholder="Search" aria-label="Search"  style={{width: "400px"}}/>
                    <br/>
                    {/* <div>
                        <input type="checkbox" name="search" value={search} onChange={e => this.handleChange(e)}/> Only show products on stock: <br/>
                    </div> */}
            </div>
        )
    }
}

export default SearchBar;