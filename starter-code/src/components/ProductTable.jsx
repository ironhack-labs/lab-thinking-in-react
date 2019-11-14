import React, { Component } from 'react'
import ProductRow from './ProductRow'

export default class ProductTable extends Component {

    displayProducts = () => {
        let uniqueKey = 0;
        let categories = {};
        let returnArray = [];
        let theProducts = this.props.products;
        // Seperates the products by categories into the categories object
        for (let product in theProducts){
            if(categories[theProducts[product].category]){
                categories[theProducts[product].category].push(theProducts[product]);
            } else {
                categories[theProducts[product].category] = [theProducts[product]];
            }
        }
        // Adds the table rows into the returnArray
        for (let category in categories){
            returnArray.push(
                <tr key={uniqueKey++}>
                    <td className="category">{category}</td>
                    <td></td>
                </tr>
            );
            for (let eachProduct in categories[category]){
                returnArray.push(
                    <ProductRow key={uniqueKey++} product={categories[category][eachProduct] } />
                )
            }
        }
        return returnArray
    }

    render() {
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.displayProducts()}
                    </tbody>
                </table>
            </div>
        )
    }
}
