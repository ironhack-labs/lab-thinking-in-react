import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from "./components/Search/Search";
import ProductTable from "./components/ProductTable/ProductTable";
import Data from "./data.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.props=props;
    this.state = {
      products: this.giveMeTheMoney(Data)
    };

    console.log(this.state.products);
  }

 

  giveMeTheMoney(obj) {
    let newObj = {};
    let arr = [];

    obj.data.forEach(element => {
      if (Object.keys(newObj).includes(element.category)) {
        newObj[element.category].unshift({
          price: element.price,
          stocked: element.stocked,
          name: element.name
        });
      } else {
        newObj[element.category] = [
          { price: element.price, stocked: element.stocked, name: element.name }
        ];
      }
    });

    Object.keys(newObj).map(element => {
      arr.push(
        {
         product:{
          category:  [element],
          products: Object.values(newObj)
          
        }
      });
    });


    
    return arr;
  }

  searchBar = (e) => {
    
    console.log(e);
    let data = this.giveMeTheMoney(Data);
    let array =[]  

        data.forEach(product =>{
          
        })




        // data.forEach(product=>{
        //     product.product.products.map(product =>{
        //      array = product.filter(product =>{
        //         return product.name.toLowerCase().includes(e)
        //       })
        //     })
        // })

      
  

   // this.setState({...this.state, products: array})


  }

  render() {
    return (
      <div className="App">
        <table>
          <Search searchBar={this.searchBar} giveMeTheMoney={this.giveMeTheMoney}/>
         
        </table>
        <div>
        {this.state.products.map((product, index) => {
            return <ProductTable key={index} {...product} />;
          })}
        </div>
        
      </div>
    );
  }
}

export default App;
