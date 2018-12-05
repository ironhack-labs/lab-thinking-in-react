import React, { Component } from 'react';



class SearchBar extends Component {
  render() {
    return (
      
    <div className="blueBox">  {/* blue box */}
        <form className="searchBox"> 
            <input className="searchInput" type="text" value="Search..." className="searchInput" />
               <br/> 
                <input type="checkbox" value="" className="searchCheckBox"/>
                    <label className="checkBoxLabel">Only show products in stock</label>
        </form>
    </div>



   
    );
  }
}





export default SearchBar;