
import ProductList from './Products/productList'
import Navigation from './NavBar/navigation'
import ProductsAPI from './../data.json'


 import React, {Component} from 'react'
 
 class App extends Component {
   constructor (){
     super ()
     this.state = {
       products: ProductsAPI.data
     }
   }
 
   render () {
     return (
       <>
         <ProductList  products = {this.state.products} />
       </>
     )
   }
 }
 
 export default App
