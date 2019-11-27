import React, { Component } from 'react'
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {

    state = {
        currentList: []
    }

    componentDidMount() {
        console.log("mounted")
        console.log(this.props)
        this.setState({ currentList: this.props.products }, () => {
            console.log(this.state.currentList);
        })
    }
    // .setState est ASYNC ,
    // donc pour voir les résultats dans la console
    //il faut écrire le console.log dans la callback function ,() => {}

    render() {
        return (
            <div>
                <h1>IronStore</h1>
                <React.Fragment>
                    <SearchBar />
                    <hr />
                    <ProductTable products={this.state.currentList} />
                </React.Fragment>
            </div>
        )
    }
}
