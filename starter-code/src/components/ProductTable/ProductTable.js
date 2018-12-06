import React, { Component } from 'react'
import ProductCategoryRow from '../ProductCategoryRow/ProductCategoryRow'
import ProductRow from '../ProductRow/ProductRow'
import './ProductTable.css';



export default class ProductTable extends Component {

  constructor(props) {
    super(props)
    this.props = props
    this.state = {
      products: this.groupBy(this.props.products, "category"),
    }
  }

  groupBy = (data, key) => {
    return data.reduce(function (acumulador, product) {
      (acumulador[product[key]] = acumulador[product[key]] || []).push(product);
      return acumulador;
    }, {});
  };

  // paintData = () =>  {
  //   return Object.keys(this.state.newJson).map(category => {
  //     return this.paintProduct(category) 
  //   })
  // }

  // paintProduct = (category) => {
  //   return this.state.newJson[category].map(product => {
  //     return <p>{product.name}</p>
  //   })
  // }

  componentWillReceiveProps(props){
    let arr =  this.groupBy(props.products, "category")
    this.setState({...this.state, products:arr})
  }

  render() {
    return (
      <div className="table-products">
        <table className="table">
          <tbody>
            {Object.keys(this.state.products).map((category, i) => {
              return (
                <tr key={i}>
                  <tr>
                    <td>
                      <b>Name</b>
                    </td>
                    <td>
                      <b>Price</b>
                    </td>
                  </tr>
                  <ProductCategoryRow category={category} />

                  {this.state.products[category].map((product, i) => {
                    return (
                     <ProductRow key={i} product={product}/>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

