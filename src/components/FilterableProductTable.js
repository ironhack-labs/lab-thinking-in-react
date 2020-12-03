import React, { Component } from "react"
import data from './data.json'
import SearchBar from './search/SearchBar'
import ProductTable from './product/ProductTable'

class FilterableProductTable extends Component {

    constructor() {
        super()
        this.state = {
            data: []    
        }
    }

    componentDidMount = () => {
    this.setState({data: data.data})
    }

    handleChange = (e) => {
        const { value } = e.target
        let newData = data.data.filter(elm => elm.name.toLowerCase().includes(value.toLowerCase()))
        this.setState({data: newData})
    }

    render () {
        return (
            <div>
                <h1>IronStore</h1>
                <SearchBar handleChange={this.handleChange} />
                <ProductTable data={this.state.data}/>
            </div>
        ) 
    }
}

export default FilterableProductTable