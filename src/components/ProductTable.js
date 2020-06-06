import React from "react";
import ProductRow  from './ProductRow';

    
class ProductTable extends React.Component {


    state = this.props.data
    
        

    render() {

    //    if (this.state.data[0].stocked){
    //        console.log(this.state.data[0].name, "is in Stock")
    //    }
    //         console.log(this.state.data[0].stocked)
       
    return (
       

        <div>
        
        <p>Name ---- Price</p>            
        
       {this.state.data.filter((p) => p.name.includes(this.props.currentSearchTerm)).map((m) => <ProductRow name={m.name} key={m.name} price={m.price} style = {m.style} data={this.state.data}/>)}
       
      </div>        
        );
      };
    }

export default ProductTable;