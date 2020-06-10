import React from 'react';

// importing data
import productDataObject from '../../data.json'

// importing styles
import 'bulma/css/bulma.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';

// importing sub components
import ProductTable from '../molecules/ProductTable';
import SearchBar from '../molecules/SearchBar';
import CheckBoxStock from '../molecules/CheckBoxStock';

class FilterableProductTable extends React.Component {

    // called right before removed from DOM
    // i.e. set intervall is cleared

    // these methods are called by react, not by us
    componentWillUnmount() {
        // some action
        //console.log('Component WILL UNMOUNT')
        //clearInterval(this.timer)
    }

    // once after the first render
    componentDidMount() {
        //this.timer = setInterval(() => {console.log('hi from the interval')}, 1000);
        // axios requests
        // this.setState({ dataFromTheDatabase })
        //alert('Now component is ready')
        //console.log('Component DID MOUNT')
    }

    // every time the props change
    componentDidUpdate() {
        // often used with css updates
        //alert('Hi, I am updated')
        //console.log('Component DID UPDATE')
    }

    state = {
        dataArr: productDataObject.data,
        searchTerm: "",
        inStock: false,
        showProducts: true
    }

    searchHandler = (searchTerm) => {
        this.setState({
            searchTerm: searchTerm
        })
    }

    // class property ( ES 7 )
    stockHandler = (inputStocked) => {
        //console.log("inputStocked: " + inputStocked)
        this.setState({
            inStock: inputStocked
        })
    }


    /*     // former way of property setting
        constructor(props) {
            super(props)
            this.stockHandler2.bind(this)
        }
    
        // normal method
        stockHandler2 () {
            //console.log("inputStocked: " + inputStocked)
            this // does not point to current class but button element instead
        } */




    showProductsHandler = () => {
        this.setState({
            showProducts: !this.state.showProducts
        })
    }

    render() {

        //console.log('Component is rendered.')
        console.log('inputStocked: ' + this.state.inStock)

        let filteredProducts = this.state.dataArr.filter((product) => product.name.toLowerCase().includes(this.state.searchTerm))

        // TODO: filter for true or false -> put stockProducts into <ProductTable>
        let stockProducts = this.state.dataArr.filter((product) => product.stocked == this.state.inStock && product.name.toLowerCase().includes(this.state.searchTerm))
        console.log('Stock products:' + stockProducts)

        return (
            <div className="mb-3">
                <SearchBar onSearchCallback={this.searchHandler} currentSearchTerm={this.state.searchTerm}></SearchBar>
                <CheckBoxStock onStockCallback={this.stockHandler} ></CheckBoxStock>
                <button onClick={this.showProductsHandler}>Toggle products</button>
                {this.state.showProducts ? this.state.inStock ? <ProductTable products={stockProducts}  /> : <ProductTable products={filteredProducts}  />:""}
            </div>
        )
    }
}

export default FilterableProductTable;