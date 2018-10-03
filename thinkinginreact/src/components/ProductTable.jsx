import React, {Component} from 'react'
import products from '../data.json'
import ProductRow from './ProductRow';
import SearchBar from './SearchBar'

class ProductTable extends Component {
    state = {
        products:products.data,
        search:''
    }

    onChange = (e) =>{
        this.setState({search:e.target.value})
        console.log (this.state.search)

    }
    
   render () {
       const {products,search} = this.state
       const filtered = products.filter(p=>p.name.includes(search))
       return (
           <div>
               <SearchBar 
                onChange={this.onChange}
                
               />
               <ProductRow info={products}

                 filt ={filtered.map(p=>p.name)}
               
               />

               
               
           </div>
       )
   }
}


export default ProductTable