import React, { Component } from 'react'
import SearchBar from '../components/SearchBar'
import ProductTable from '../components/ProductTable'


export default class FilterableProductTable extends Component {
    state = {
      products : this.props.products,
      inputfield: '',
      inStockChecked: false
    }

    handleCallback = (childData) =>{
        this.setState({
            inputfield: childData
        })
    }

    handleCallbackCheck = (childData) => {
        this.setState({
            inStockChecked: childData
        })
    }

    render() {
        return (
            <div>
                <h1 style={{fontSize:"40px"}}>IronStore</h1>
                <SearchBar parentCallback={this.handleCallback} products={this.props.products} parentCallbackCheck={this.handleCallbackCheck}/>
                <ProductTable products={[...this.state.products].filter(item => {if(this.state.inStockChecked === true) {return item.name.toLowerCase().includes(this.state.inputfield.toLowerCase()) && item.stocked === true} else {return item.name.toLowerCase().includes(this.state.inputfield.toLowerCase())}})}/>
            </div>
        )
    }
}
