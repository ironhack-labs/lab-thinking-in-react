import React,{Component} from 'react'
import CategoryRow from './CategoryRow';
import ProductRow from './ProductRow';

class ProductTable extends Component {
  render(){ 
   
    let data = this.props.data

    return (
      <div>
        <h2>Name    Price</h2>
        <CategoryRow category="Sporting Goods"/>
        {data.map((c,i)=><ProductRow key={i} {...c}/>)}
      </div>
    )
  }
}

export default ProductTable