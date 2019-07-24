import React, { Component } from 'react';
import '../App.css';
import SearchBar from './searchbar/SearchBar'
import ProductTable from './producttable/ProductTable'
import ModalForm from './modalForm/ModalForm'
class MotherComponent extends Component {
    clearForm = React.createRef;
    state = {
      allProducts : this.props.products.data,
      searchQuery: '',
      isChecked: false,
      modal: false,
      newproduct: {
        name: '',
        price: '',
        category: '',
        checked: false
      }
    }
    // displayArr = () =>{
    //   let clone = [...this.props.products.data]
    //   let result = clone.filter((e)=>{
    //     return e.name.toUpperCase().includes(this.state.searchQuery.toUpperCase())
    //   })
    //   this.setState({
    //     allProducts: result
    //   })
    //   console.log(this.state.allProducts,this.state.searchQuery);
    // }
    addProduct = (ev) =>{
      ev.preventDefault();
      let obj ={
        name: this.state.newproduct.name,
        price: this.state.newproduct.price,
        category: this.state.newproduct.category,
        stocked: this.state.newproduct.checked
      }
      let clone = this.state.allProducts;
      clone.push(obj);
      this.setState({
        allProducts:clone,
        newproduct: {
          name: '',
          price: '',
          category: '',
          checked: false
        }
      })
    }
    filterSearch = (e) =>{
      let clone = [...this.props.products.data]
      let result = clone.filter((each)=>{
        return each.name.toUpperCase().includes(e.target.value.toUpperCase())
      })
      if(this.state.isChecked){
        clone = result;
         result = clone.filter((each)=>{
          return each.stocked == true
        })
      }
      this.setState({
        allProducts: result,
        searchQuery: e.target.value
      });
    }
    checked = () =>{
      if(!this.state.isChecked){
      let clone = [...this.state.allProducts]
      let result = clone.filter((each)=>{
        return each.stocked == true
      })
      this.setState({
        allProducts: result,
        isChecked: true
      });
      }else{
        let clone = [...this.props.products.data]
        let result = clone.filter((each)=>{
          return each.name.toUpperCase().includes(this.state.searchQuery.toUpperCase())
        })
        this.setState({
          allProducts: result,
          isChecked: false
        });      
      }
    }
    triggerModal = () =>{
      let curr = this.state.modal;
      if(curr){
        curr = false;
      }else{
        curr = true;
      }
      this.setState({
        modal: curr
      })
    }
    changeText = (e) =>{
      if(e.target.name == 'name'){
      this.setState({
        newproduct: {
          name: e.target.value,
          price: this.state.newproduct.price,
          category: this.state.newproduct.category,
          checked: this.state.newproduct.checked
        }
      })
      }else if(e.target.name === 'price'){
        this.setState({
          newproduct: {
            name: this.state.newproduct.name,
            price: e.target.value,
            category: this.state.newproduct.category,
            checked: this.state.newproduct.checked
          }
        })
      }else{
        this.setState({
          newproduct: {
            name: this.state.newproduct.name,
            price: this.state.newproduct.price,
            category: e.target.value,
            checked: this.state.newproduct.checked
          }
        })
      }
      
    }
    changeCheck = (e) =>{
      if(this.state.newproduct.checked === true){
        this.setState({
          newproduct: {
            name: this.state.newproduct.name,
            price: this.state.newproduct.price,
            category: this.state.newproduct.category,
            checked: false
          }
        })
      }else{
        this.setState({
          newproduct: {
            name: this.state.newproduct.name,
            price: this.state.newproduct.price,
            category: this.state.newproduct.category,
            checked: true
          }
        })
      }
    }
    sortCategory = (e) =>{
      e.preventDefault();
      let clone = this.state.allProducts;
      clone.sort((a,b)=>{
        if(a.category > b.category){
          return 1;
        }
        if(a.category < b.category){
          return -1;
        }
        return 0;
      })
      this.setState({allProducts:clone})
    }
    
  render() {
    return (
      <div className="App">
        <h1>IronStore</h1>
        <SearchBar sortCat={this.sortCategory} checkFun={this.checked} filter={this.filterSearch} products={this.state.allProducts}/>
        <ProductTable  products={this.state.allProducts}/>
        <button  onClick={this.triggerModal}>Add Item</button>
        {
          this.state.modal && <ModalForm changeText={this.changeText} changeCheck={this.changeCheck} newProduct={this.state.newproduct} addProduct={this.addProduct}/>
        }
       </div>
    );
  }
}

export default MotherComponent;
