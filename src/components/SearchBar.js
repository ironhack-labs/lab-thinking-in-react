import React, { Component } from 'react'

export default class SearchBar extends Component {

    constructor(props){
        super(props)
        this.handleSearch = this.handleSearch.bind(this)
    }

    handleSearch(event) {
        console.log(event.target.value)
        this.props.functionToFilter(event.target.value) //função filter foi definida no elemento pai(FilteredProductTable), que a envia ao child SearchBar via propos. Agora, usamos a função no child com o parametro necessário => query digitada no campo search
    }

    render() {
        console.log("this.props in SearchBar:", this.props.products.data)
        return (
            <div className="search">
                <h3>Search</h3>
                <form>
                    <input type="text" name="search" onChange={this.handleSearch} />

                </form>
            </div>
        )
    }
}
