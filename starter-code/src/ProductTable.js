import React, { Component } from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

class ProductTable extends Component {


    sportingGoods = () => {
        return this.props.items.map((product, index)=>{
            if(product.category === "Sporting Goods"){
                if(this.props.checked && product.stocked || !this.props.checked){
                    return <ProductRow key={index} {...product}/>
                }
            }

        })
    }
    
    electronics = () => {

        return this.props.items.map((product, index)=>{
            if(product.category === "Electronics"){
                if(this.props.checked && product.stocked || !this.props.checked){
                    return <ProductRow key={index} {...product}/>
                }
            }

        })
    }
    render() {
        let sportingGoodsExists=false;
        let electronicsExists=false;
        this.props.items.map((product)=>{
            if(product.category === "Sporting Goods"){
                sportingGoodsExists = true
            }
            if(product.category === "Electronics"){
                electronicsExists = true
            }
        })

      return (
         <table>
             <tr>
                <th>Name</th>
                <th>Price</th> 
            </tr>
            <tr>
                <th>
                    { sportingGoodsExists ? <ProductCategoryRow  name={"Sporting Goods"} /> : '' }
                </th>
            </tr>
            <tr>
                {
                    this.sportingGoods()
                }

            </tr>
            <tr>
                <th>{ electronicsExists ? <ProductCategoryRow  name={"Electronics"} /> : '' }</th>
            </tr>
            <tr>
                {   
                this.electronics()
                }
            </tr>
            
        </table>
      );
    }
  }
  
  export default ProductTable;