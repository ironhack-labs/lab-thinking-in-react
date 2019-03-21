import React, { Component } from 'react'

class SearchBar extends Component {
    constructor(props){
        super(props) 
        this.state= {products: props.products}
    }
 
    handleSearch = e => {
        let {name, value} = e.target
        this.setState ({[name]: value}, () =>{
            let result = this.state.products.data.filter(product => {
                let nameLower = product.name.toLowerCase()
                let mySearch = this.state.search.toLowerCase()
                return nameLower.includes(mySearch)  
            })
                this.props.updateState({data:result})
        })
    }


  render() {
    //   console.log(this.props)
    return (
      <div>
        <input type="text" name="search" value={this.state.search} onChange={(e)=> this.handleSearch(e)} ></input>
       <p><label><input type="checkbox" id="checkbox" value="myCheckbox"></input> Only show products in stock</label></p>
      </div>
    )
  }
}

export default SearchBar 