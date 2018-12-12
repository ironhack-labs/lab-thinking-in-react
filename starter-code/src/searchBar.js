import React, { Component } from 'react';



class SearchBar extends Component{





handleChangeForInput(e){
    
    this.props.search(e)

    
}




render(){
    
    return (
        // Search Bar
        <div className="search-bar">                                                             
            <input  name="searchWord"    type="text"   placeholder = "Search..."      onChange = {(e) => this.handleChangeForInput(e)} />
            <input type="checkbox"/>
            <label> Only show products in Stock</label>
        </div>

    )
}

}







export default SearchBar;