import React, { Component } from 'react'
import ProductRow from "./ProductRow";

class ProductTable extends React.Component {
    constructor(props){
        super(props);
    }

    renderTable = () => {
        var categories = this.getCategories();

        return (
            <div className="productTable">
                <div className="products"><span>Name Price</span></div>
                {categories.map((categor) => (
                    <div>
                        <div className="products">
                            <div><span>{categor}</span></div>
                        </div>
                        <div>
                            {this.props.productArray.filter(product => product.category===categor).map((product,index_product) => (
                                <div>
                                    <ProductRow
                                        name={product.name}
                                        price={product.price}
                                        stocked={product.stocked}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    getCategories() {
        var categoryList = [];
        this.props.productArray.forEach(product => {
            if(!categoryList.includes(product.category)) categoryList.push(product.category)
        });
        return categoryList;
    }

    render() {
        return(
            this.renderTable()
        )
    }
}

export default ProductTable;