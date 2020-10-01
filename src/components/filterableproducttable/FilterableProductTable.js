import React, { Component } from 'react'

import ProductTable from '../producttable/ProductTable'
import SearchBar from '../searchbar/SearchBar'


class Filterable extends Component {


    constructor() {

        super()
        this.state = {
            dbdata: []
        }

    }


    componentDidMount() {
        this.setState({

            dbdata: this.props.data.data

        })

    }




    searchBar = (searchValue) => {

        const expresion = new RegExp(searchValue, 'i')


        const search = this.props.data.data.filter(elm => elm.name.match(expresion))
        console.log(search)


        this.setState({ dbdata: search })
    }

    render() {

        return (
            <>
                <SearchBar searchBar={this.searchBar} />
                <ProductTable searchBar={this.searchBar} products={this.state.dbdata} />
            </>
        )
    }
}

export default Filterable