import React, { Component } from 'react';
import ProductRow from './ProductRow';
import '../App.css';

class ProductTable extends Component {

// if we write things here then we NEED to use "this." to access them inside the return
    
    render() {
// if we write things here then we DO NOT NEED to use "this." to access them inside the return
       

    // information from FilterableProductTable.jsx, we take the value of the input from FilterableProductTable
        // let productArray = this.props.product.filter((prod) => prod.name.toLowerCase()
        //     .includes(this.props.searchValue.toLowerCase()));


    // Si "checkValue : true" alors on checke la box, il filtre donc les éléments en rupture de stock
    // Si "checkValue : false" alors on déchecke la box, on affiche donc tout
        let productArray;

        if (this.props.checkValue) {
            productArray = this.props.product.filter((prod) => ( (prod.name.toLowerCase().includes(this.props.searchValue.toLowerCase())) && (prod.stocked)) );
        } else {
            productArray = this.props.product.filter((prod) => prod.name.toLowerCase().includes(this.props.searchValue.toLowerCase()));
        }

        return (
            <table>
                <thead className="thead">
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Info from the level before */}
                    {productArray.map((element, index) => {             
                        return <ProductRow stock={element.stocked} name={element.name} price={element.price} key={index}/>
                    })}
                </tbody>
            </table>
        )
    }
}

export default ProductTable

