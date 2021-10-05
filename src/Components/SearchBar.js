import { render } from '@testing-library/react';
import React from 'react';



class SearchBar extends React.Component  {

    handleChange = (e) => {
        this.props.setSearchField(e.target.value);
    }

    state = {
        searchField: '' 
    }

    render(){
        return (
            <div>
                <input 
                type="text" 
                name="searchfield" 
                placeholder="Search for product"
                onChange={this.handleChange}
                ></input>
            </div>
        )
    }

}




export default SearchBar



