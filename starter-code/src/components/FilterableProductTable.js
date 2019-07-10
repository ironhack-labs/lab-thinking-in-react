import React, { Component } from 'react'

import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import CheckBox from './CheckBox'

export default class FilterableProductTable extends Component {
    constructor(props){
        super(props)
        this.state= {
            checked: false,
            searchedText: '',
        }

    }


    HandleSearch =(productName) =>{
        //let filtered= this.filterProduct(productName)
        //this.setState({value: filtered}, () => console.log(this.state))
        this.setState({searchedText: productName})
    }

    HandleCheckbox =(thisChecked) => {
        this.setState({checked: thisChecked}, () => console.log("this.state.checked ", this.state.checked))
    }

    filterText = (searchedText, data ) => {
        const newItem=searchedText.toLowerCase()
        return (data.filter(item =>{
            const lc=item.name.toLowerCase()
            return lc.includes(newItem)})
        )
    }

    filterStock = (data) => { 
        return data.filter(item => item.stocked ? item : console.log("coucou"))
    }

    filterMe = () => {
        if(this.state.checked && this.state.searchedText!=="") {
            return this.filterText(this.state.searchedText, this.filterStock(this.props.products))
        }
        else if(this.state.checked) return this.filterStock(this.props.products)
        
        else if(this.state.searchedText!=="") return this.filterText(this.state.searchedText,this.props.products)
        
        else return this.props.products 
    }

    render() {
        return (
            <div className="columns"> 
                <CheckBox  HandleCheckbox={this.HandleCheckbox}/>
                <SearchBar filterProduct={this.HandleSearch}/>
                <ProductTable products={this.filterMe()}/>                 
            </div> 
        )
    }
}
