import React from 'react';
import "./SearchBar.css";
import listOfProducts from "../data.json"

class SearchBar extends React.Component {

    handleInputSearch = (event) => {
        event.preventDefault();
        this.props.setInputField(event.target.value)
    }

    handleInputCheckbox = (event) => {
        event.preventDefault()
        this.props.isThereStock(event.target.value)
        
        // console.log(event.target.value)
    }

    render() {
        return (
            <form className="SearchBar">
                <label>
                    Search
                    <input type = "text" name= "searchInputField"  placeholder="Search..." onChange = {this.handleInputSearch}/>
                </label>

                <label for="onlyProductsStock">
                    Only show products on stock
                    <input type = "checkbox" id="isThereStock" name="isThereStock" onChange = {this.handleInputCheckbox} />
                </label>
    
            </form>
        )
        
    }
   
}


export default SearchBar;