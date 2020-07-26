import React, { Component } from 'react'

export default class SearchBar extends Component {

    constructor(props) {
        super(props)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleCheck = this.handleCheck.bind(this)

    }

    handleSearch(event) {
        this.props.functionToFilter(event.target.value) //função filter foi definida no elemento pai(FilteredProductTable), que a envia ao child SearchBar via propos. Agora, usamos a função no child com o parametro necessário => query digitada no campo search
    }

    handleCheck(){
        this.props.stocked()
    }

    render() {
        //console.log("this.props in SearchBar:", this.props.products.data)
        return (
            <div className="search">
                <h3>Search</h3>
                <form className="form">
                    <input type="text" name="search" onChange={this.handleSearch} />
                    <div className="checkDiv">
                        <input type="checkbox" name="check" onChange={this.handleCheck}/>
                        <p>Only show products on stock</p>
                    </div>
                </form>
            </div>
        )
    }
}
