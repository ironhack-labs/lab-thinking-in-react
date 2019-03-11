import React, {Component} from 'react';
import SearchBar from './SearchBar'

export default class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: this.props.products.data,
      search: "",
      checkBox: false
    };
  }

  onSearch = search => {
    this.setState({ search });
  }

  onCheck = (event) => {
    const productStock = this.state.products
     .filter(product => product.stocked === true)
    if(!this.state.checkBox){
      this.setState({
        checkBox: true,
        products: productStock
      })
    } else {
      this.setState({
        checkBox: false,
        products: this.props.products.data
      })
    }
  }
  
  render (){
    
    const productStock = this.state.products
     .filter(product => product.name.toLowerCase().includes(this.state.search.toLowerCase()))
     .map((product,index) => {
       return (
   
         <tr key={index}>
           <td className={(!product.stocked) ?  'red' : ''}>{product.name}</td>
           <td>{product.price}</td>
         </tr>
       )
     })
     return(
      <div className="container">
      <h1>IronStore</h1>
      <SearchBar onSearch={this.onSearch} onCheck={this.onCheck}/>
        <table className="table">
          <thead>
            <tr className="bg-success text-white">
              <th scope="col">Name</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
          {productStock}
          </tbody>
        </table>
    </div>

     )
  }
}
