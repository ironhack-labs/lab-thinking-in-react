import React, {Component} from 'react';


class SearchBar extends Component {

  constructor(props) {

    super(props)

    this.state = {
      name: '', 
      productOnStock: false,
    }

  }




  handleChange = e => {
    let { name, value } = e.target;

    if (name === "productOnStock" && value === "on") {
      value = true;
    }

    
    this.setState({
      [name]: value
    }, () => {
      // console.log(this.props.searchForProduct)
      this.props.searchForProduct(this.state.name)
    });

  }


  render () {
    // console.log(this.props)

    return (
      <div className="search-bar">
          <div className="search">

            <label for="name">Search: </label>
            <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />

            <label>Only show products on stock: </label>
            <input type="checkbox" name="productOnStock" checked={this.state.productOnStock} onChange={(e) => this.handleChange(e)} />

           
           </div>
      </div>
  )

  }
}




export default SearchBar