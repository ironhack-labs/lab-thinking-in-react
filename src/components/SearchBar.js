import React from 'react';
import "./SearchBar.css";

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            productName : "",
        }
    }

    render() {
        return (
            <form className="SearchBar">
                <label>
                    Search
                    <input type = "text" name= "productName" value= {this.state.productName}/>
                </label>

                <label for="onlyProductsStock">
                    Only show products on stock
                    <input type = "checkbox" id="onlyProductsStock" name="onlyProductsStock" />
                </label>

    
                
    
            </form>
        )
        
    }
   
}


export default SearchBar;