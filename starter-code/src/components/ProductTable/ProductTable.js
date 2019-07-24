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

  showProducts = (catex)=>{
    let cat = "Electronics";
    return(
      
      this.state.allProductsFiltered
      .filter( (productz)=>{
        return productz.category === catex;
      })
      .filter( (producty)=>{ 
        return producty.name.toUpperCase().includes(this.props.mysearchterm.toUpperCase())
      })
      .map((productx, theindex)=>{
        return (<ProductRow key={theindex} productx={productx}/>)
      })

    )

  }

  showProductsWithCategory = ()=>{
    
    let arrjjsx = [];
    for (let i=0; i<this.props.categories.length; i++){
      let catTitle = <div key={i}>Category: {this.props.categories[i]} </div>;
      arrjjsx.push(catTitle);
      arrjjsx.push(<div key={i+1000}><span> Name</span>&nbsp;&nbsp;&nbsp;&nbsp; <span> Price</span></div>);
      let categoryx = this.props.categories[i];
      arrjjsx.push( this.showProducts( categoryx ));
    }
    return (arrjjsx)
  }


  render(){
    
    return(
      <div className="greenborder">

      <div>PRODUCT TABLE</div>
     
      {this.showProductsWithCategory()}
       
      </div>
    )
  }
}

export default ProductTable;