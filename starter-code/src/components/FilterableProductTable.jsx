import React, { Component } from 'react'
import data from '../data.json'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

export default class FilterableProductTable extends Component {

    state = {
        itemData: data,
        previousList: ""
    }

    filterHandler = (target) => {
        if(target.name === "text") {
            let filterList = data.filter(input => {
                return input.name.toUpperCase().startsWith(target.value.toUpperCase())
            })
            if(target.value === "") {
                this.setState({itemData: data})
            } else this.setState({itemData: filterList, previousList: filterList})
            
        }

        if(target.name === "checkbox"){
            let stockList = this.state.itemData.filter(item => {
                return item.stocked
            })
            

            if(target.checked){
                this.setState({itemData: stockList})
            } else this.setState({itemData: this.state.previousList})
        }

    }


    render() {
        return (
            <div>
                <h1>IronStore</h1>

                <SearchBar filterItem={this.filterHandler} />

                <ProductTable products={this.state.itemData} />

            </div>
        )
    }
}
