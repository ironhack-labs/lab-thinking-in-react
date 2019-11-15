import React from 'react';
import ProductRow from '../product-row-component/product-row';
import './product-table.css';

class ProductTable extends React.Component {
    initialOperations = () => {
        console.log(this.props.products)
        console.log(this.props.stocked)
        let filterProd;
        if(this.props.stocked) {
            filterProd = this.props.products.filter(pr => pr.stocked === this.props.stocked);
        } else {
            filterProd = [...this.props.products];
        }
        let categoriesArr = [];
        filterProd.forEach(pro => categoriesArr.push(pro.category));
        this.categoriesArrUnique = [...new Set(categoriesArr)];
        this.firstArr = filterProd.filter(pr => pr.category === this.categoriesArrUnique[0]);
        this.secondArr = filterProd.filter(pr => pr.category === this.categoriesArrUnique[1])
    }
    
    displayProduct = (filterProd) => {
        console.log(filterProd)
        return filterProd.map((prod,ind) => {
            return (
                  <ProductRow key={ind} product = {prod} 
                              searchString={this.props.searchString}
                              updateSearchString = {this.props.updateSearchString}
                              
                              />
            )
        })
    }
    render() {
        this.initialOperations();
        return (
           <div className="table-display">
              <table>
                  <thead>
                      <tr>
                          <th>Name</th>
                          <th>Price</th>
                      </tr>
                  </thead>
                  <tbody>
                    <th>{this.categoriesArrUnique[0]}</th>
                        {this.displayProduct(this.firstArr)}
                    <th>{this.categoriesArrUnique[1]}</th>
                        {this.displayProduct(this.secondArr)}
                  </tbody>
              </table>
           </div>
        );
    }
}
export default ProductTable;