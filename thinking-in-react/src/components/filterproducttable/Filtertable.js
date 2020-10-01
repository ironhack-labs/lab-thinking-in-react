import React, { Component } from 'react'
import Search from '../searchbar/Searchbar'
import List from '../producttable/ProductList'
import data from '../data.json'





class Table extends Component {

    constructor() {
        super()
        this.state = {
            productList: []
        }
    }

    componentDidMount = () => {
        this.setState({...this.state, productList: this.props.products.data})
    }

    searcher = valor => {
        let { value } = valor.target
        this.setState(({productList: this.props.products.data.filter((elm) => elm.name.toLowerCase().includes(value.toLowerCase()))}))
    }

    filterCheck = i  => {
        this.setState({productList: data.data.filter((elm) => elm.stocked ===  i.target.checked)})
    }



    render() {
        
        return (
            <>
            <h1 >IRON STORE</h1>
                <Search searcher={valor => this.searcher(valor)} filterCheck={ valor => this.filterCheck(valor)}/>
                <List products={this.state.productList}/>
            </>
    
        )
        }
}

export default Table