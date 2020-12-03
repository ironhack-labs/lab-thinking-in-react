import React, {Component} from 'react'
import products from './../data.json'

class SearchBar extends Component {

    constructor(){
        super()
        this.state = {
        products: products,
        search: ''

        }
    }

    searchProducts = e => {
        const value = e.target.value
        this.setState({ search: value })

        const searchResult = products.data.filter(elm => elm.name === this.state.search) 
        this.setState({[products]: searchResult })
       
    }

    render() {

        return (
            
            <input value={this.state.search} className="form-control" type="text" placeholder="Search" onChange={this.searchProducts}/>
        )
    }
}

export default SearchBar