import React, { Component } from "react";

class SearchBar extends Component {
    

    handleChange = (e) => {
      
        this.props.searchValue(e.target.value)
       
    }
    handleChangecheck = (e) =>{
      this.props.checkValue(e.target.checked)
    }

  render() {
    return (
      <section className="section is-paddingless">
      <div className="container">
        <input className="input is-rounded" type="text" placeholder="Search" onChange={this.handleChange}/>
        <label className="checkbox" style={{margin: '10px'}}>
          <input type="checkbox" onChange={this.handleChangecheck}/>
            Only show products on stock
        </label>
      </div>
      </section>
    );
  }
}

export default SearchBar;
