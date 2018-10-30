import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './data.json';

class ProductBox extends Component {
  constructor(props) {
    super(props)
  }
  handleStyle(stocked) {
    if (!stocked) {
      return 'red';
    }
  }
  render() {
    return (
      <div>
        <p style={{ color: this.handleStyle(this.props.stocked) }}>{this.props.name} {this.props.price} {this.props.stocked}</p>
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { Products, listProducts: Products.data, searchedList: Products.data, categories: [], searchValue: "", displayTitle: true, checked: false }
    // categories: this.state.listProducts.filter({ this.onlyUnique })
  }

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  toggleTitle() {
    this.setState({ displayTitle: !this.state.displayTitle })
  }


  handleChange(event) {
    const valuetosearch = event.target.value

    const getSearchList = (valuetosearch) => {
      let newarray = []
      if (valuetosearch === "") {
        newarray = this.state.listProducts
      } else {
        newarray = this.state.listProducts.filter(product => product.name.toLowerCase().includes(valuetosearch.toLowerCase()))
      }
      this.setState({ searchedList: newarray })
    }

    this.setState({ searchValue: valuetosearch }, () => {
      getSearchList(valuetosearch)
    })
  }
  
  handleCheckBox(event) {
    this.setState({ checked: !this.state.checked })
    let newarray = []
    if (event.target.checked === true) {

      newarray = this.state.listProducts.filter(product => product.stocked === true)
    } else {
      newarray = this.state.listProducts
    }
    this.setState({ searchedList: newarray })
  }

  handleAllChanges(event) {
    let { name, value } = event.target;
    // console.log({ name, value })
    let valuechecked=this.state.checked
    let valuetosearch=this.state.searchValue
    if (name==="checked"){
      valuechecked= !this.state.checked
      // console.log("valuechecked", valuechecked)
    }else if(name==="searchValue"){
      valuetosearch=event.target.value
      // console.log("valuetosearch", valuetosearch)
    } else{
      console.log("what it is?", event.target.value)
    }
    
    const mycallbackfunction = (valuetosearch,valuechecked) => {
      let newarray = []
      if (valuetosearch === "" & valuechecked === false) {
        // console.log("condition 1")
        newarray = this.state.listProducts
      } else if (valuetosearch != "" & valuechecked === true) {
        // console.log("condition 2")
        newarray = this.state.listProducts.filter(product => product.name.toLowerCase().includes(valuetosearch.toLowerCase()))
        newarray = newarray.filter(product => product.stocked === true)
      } else if (valuetosearch === "" & valuechecked === true) {
        // console.log("condition 3")
        newarray = this.state.listProducts.filter(product => product.stocked === true)
      } else if (valuetosearch != "" & valuechecked === false) {
        // console.log("condition 4")
        newarray = this.state.listProducts.filter(product => product.name.toLowerCase().includes(valuetosearch.toLowerCase()))
      }else{
        
        console.log("Je n'ai pas pensé à ça",valuetosearch)
      }
      this.setState({ searchedList: newarray })
    }
    this.setState({ searchValue: valuetosearch, checked: valuechecked }, () => {
      mycallbackfunction(valuetosearch,valuechecked)
    })
  
  }

  render() {

    var arraytemp = this.state.listProducts.map(product => product.category)
    var arrayCategories = arraytemp.filter(this.onlyUnique)
    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        </p>
        <div className="FilterableProductTable">

          <div className="searchBar">
            <input type="test" name="searchValue" value={this.state.searchValue} onChange={(e) => this.handleAllChanges(e)} /><br />
            <input type="checkbox" id="instack" name="checked" value={this.state.checked} onChange={(e) => this.handleAllChanges(e)}
            />
            <label htmlFor="horns">Only show products in stock</label>
          </div>
          {/* <div className="FilterableProductTable">

            {
              arrayCategories.map(category => {
                return (
                  <div key={category}>
                    <h2> {category}</h2>
                    <div>

                      {
                        this.state.listProducts.filter(productfilter => productfilter.category === category).map(product => {
                          return (
                            <ProductBox key={product.name} name={product.name} price={product.price} stocked={product.stocked} ></ProductBox>
                          )
                        })

                      }
                    </div>

                  </div>
                )
              })
            }
          </div> */}
          <div>
          {
              arrayCategories.map(category => {
                return (
                  <div key={category}>
                    <h2> {category}</h2>
            {
              // this.state.listProducts.filter(this.searchFilter.bind(this)).map(product => {
              // this.state.listProducts.filter(this.searchFilter.bind(this)).map(product => {
              this.state.searchedList.filter(productfilter => productfilter.category === category).map(product => {
                return (

                  <div>
                    {/* <h2> {product.category}</h2> */}
                    <ProductBox key={product.name} name={product.name} price={product.price} stocked={product.stocked} ></ProductBox>

                  </div>
                )
              })
            }
            </div>
                )
              })
            }
          </div>


        </div>
      </div>
    );
  }
}

export default App;
