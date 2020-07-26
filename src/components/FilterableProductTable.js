import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

export default class FilterableProductTable extends Component {

    constructor(props){
        super(props)
        this.state = {//estado para que a table renderize novamente, cada vez que o usuário faz mudanças no input search.
            filter: '', 
            checked: false
        }
        this.filter = this.filter.bind(this)
        this.stocked = this.stocked.bind(this)

    }

    filter(query){ //esta função receberá os dados da searchBar. Enviar esta função ao componente que a necessita por props => functionToFilter={this.props.filter}. Também enviamos a função a productTable con o novo estado. 
        console.log("query to filter: ", query)
        this.setState({
            filter: query
        })
    }

    stocked() {
        this.setState({
            ...this.state,
            checked: !this.state.checked
        })
    }

    
    render() {
        //console.log("props FilteredTable: ", this.props.products)
        return (
            <div>
                <div className="table">
                    <h1>IronStore</h1>
                    <SearchBar products={this.props.products} functionToFilter={this.filter} stocked={this.stocked}/>
                    <div>
                        <ProductTable products={this.props.products} filter={this.state.filter} stocked={this.stocked} stockedState={this.state.stocked}/>
                    </div>
                </div>
            </div>
        )
    }
}
