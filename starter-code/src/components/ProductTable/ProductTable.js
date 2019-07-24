import React , {Component} from 'react';
import ProductRow from '../ProductRow/ProductRow';
import './producttable.css';

class ProductTable extends Component {

  constructor(props){
    super(props)
    this.state = 
              {
                allProducts: this.props.dataarray,
                allProductsFiltered: this.props.dataarray,
               
              }
  }

  showProducts = ()=>{
    return(
      this.state.allProductsFiltered
      .filter( (producty)=>{ 
        return producty.name.toUpperCase().includes(this.props.mysearchterm.toUpperCase())
      })
      .map((productx, theindex)=>{
        return (<ProductRow key={theindex} productx={productx}/>)
      })

    )
  }

  render(){
    
    return(
      <div className="greenborder">

      <div>PRODUCT TABLE</div>
      <div><span> Name</span>&nbsp;&nbsp;&nbsp;&nbsp; <span> Price</span></div>
        {this.showProducts()}
      </div>
    )
  }
}

export default ProductTable;