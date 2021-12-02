import React, { Component } from 'react'

export default class ProductTable extends Component {
    constructor(props) {
        super(props)

        this.state = {
            storeGoods: props.allProducts.data
        }
    }

    filterProducts = () => {
        let filteredItem = [...this.props.allProducts.data]
        filteredItem = filteredItem.filter((elm) => 
        elm.name.toUpperCase().includes(this.props.searchProduct.toUpperCase()))

        if (this.props.checkFunction === true) {
            filteredItem = filteredItem.filter((elm) => elm.stocked === true)
        } 
        this.setState({storeGoods : filteredItem})
    }
    
    // includes = (filter) => {
    //     return function(product) {
    //         return product.name.toUpperCase.includes(filter.toUpperCase)
    //     }
    // }

    componentDidUpdate = (prevProps, prevState) => {
        (prevProps.searchProduct !== this.props.searchProduct || prevProps.checkFunction !== this.props.checkFunction) && this.filterProducts() 
    }

    render() {

        return (
            <div>
                <div>
                    <p>Name</p> <p>Price</p>
                </div>
                <div>
                    { this.state.storeGoods.map((elm) => {
                        return (
                            <div> 
                                <p>{elm.name}</p>
                                <p>{elm.price}</p>
                            </div>
                        )

                    }
                        
                    )}
                </div>
            </div>
        )
    }
}
