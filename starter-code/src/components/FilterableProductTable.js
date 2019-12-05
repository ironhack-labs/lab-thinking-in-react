import React, {Component} from "react"
import data from "../data.json"
import SearchBar from "./SearchBar" 
import ProductTable from "./ProductTable"

class FilterProduct extends Component {
    constructor(){
        super()
        this.state = {
            data: data.data,
            backup: data.data,
        }

    }
    filterProduct = (src) => {
        let filteredCopy = [...this.state.backup]
        let filteredCopy2 = filteredCopy.filter(e => e.name.toUpperCase().includes(src.toUpperCase()))
        console.log(filteredCopy2)
        this.setState({
            data: filteredCopy2
        })
    }

    render () {
        return (
            <>
            <h1>IronStore</h1>
            <SearchBar searchBar={this.filterProduct} />
            <ProductTable data={this.state.data} />
            </>
        )
    }
}
export default FilterProduct