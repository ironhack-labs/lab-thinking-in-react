import React, { Component } from 'react';
import data from './data.json'
import ProductRow from './ProductRow'
import Search from './Search';

class ProductList extends Component {
    constructor(props) {
        super(props)
        this.state = {
        products: data.data,


        }
    }

    searchFunction = (searchTerm)=>{
        let theList = [...this.state.products];
        theList = theList.filter((eachName)=>{
          return eachName.name.toUpperCase().includes(searchTerm.toUpperCase())
        })
    
        this.setState({product: theList});
      }



    showProduct = (productList) => {
  const rStyle = {
      color: 'red',
      border:  '1px solid turquoise'
  }
  const bStyle = {
      color: 'black',
      border: '1px solid turquoise'
  }
      return productList.map((eachProduct, index)=>{
      return     (<ProductRow 
          key={index}
          name={eachProduct.name} 
          price={eachProduct.price} 
          category={eachProduct.category}
          style={eachProduct.stocked ? bStyle : rStyle}
          />
        )
      })
    }




    sortProducts = (sortBy, option2) => {
        if (!option2){

            console.log(option2);
            const sortedList = this.state.products.filter((oneProduct)=>{
                return oneProduct.category.toLowerCase().includes(sortBy.toLowerCase())
            })
            return this.showProduct(sortedList)
        }else{

            console.log(sortBy);
            const sortedList = this.state.products.filter((oneProduct)=>{
                return oneProduct.category.toLowerCase().includes(sortBy.toLowerCase()) 
            })
            return this.showProduct(sortedList)
            
        }
    }



    render() {

        return (

        <div className="first-class">

 <table> 
 <Search handleSearch={this.searchFunction} />
<thead>
  <tr>
    <th>Name</th>
    <th>Price</th>
  </tr>
</thead>
<tr><th>Electronics</th></tr>
{this.sortProducts('electronics')}

<tr><th>Sporting Goods</th></tr>
{this.sortProducts('Sporting Goods')}
           


            
               
</table> 


        </div>
        );
      }
}


export default ProductList;