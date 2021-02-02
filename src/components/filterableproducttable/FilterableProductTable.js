import React, { Component } from 'react'
import SearchBar from '../searchbar/SearchBar'
import ProductTable from '../producttable/ProductTable'
import productData from '../../data.json'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class FilterableProductTable extends Component {
    constructor(props){
        super(props)
        this.state={
            products: this.props.products,
            isStockOnly: false
        }
    }

    filterProducts=(searchObj)=>{

        if(searchObj['inStockOnly']){
            console.log(`filter for instock only: ${searchObj['inStockOnly']}`)
            const allProducts = [...this.state.products]
            const searchMatch = allProducts.filter(el => {return Boolean(el.stocked)})
            this.setState({products:searchMatch})
        }else if(searchObj['searchVal']){
                const allProducts = [...this.state.products]
                //loop through array, if search value is in name then bring it back.
                const searchMatch = allProducts.filter(el => (el.name.toLowerCase().indexOf(searchObj['searchVal'].toLowerCase()) !== -1))
                this.setState({products:searchMatch})

        }else{
            this.setState({products:this.props.products})
        }
    }

    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col>
                        <SearchBar updateSearch={this.filterProducts}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ProductTable products={this.state.products} />
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}
