import React, { Component } from 'react';

import './FilterableProductTable.css';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';


class FilterableProductTable extends Component {
    constructor(props){
        super(props);
      
        this.state ={
            filterName: this.props.products.data,
            checkBoxState: false

        };
      }
    filterStocked(bool){
        const {value}
    }        

    updateSearch(event){
        const {value} = event.target;
        let newArray =[];
        if(value===""){
        newArray= this.props.products.data
        }else{
        newArray =  this.props.products.data.filter( (el)=> {
                return el.name.toLowerCase().indexOf(value.toLowerCase()) > -1;
            })
              
        
        }
        this.setState({
          filterName: newArray,
        })
      }


  render() {
    return (
        <section className="FilterableProductTable">
            <h2>Yellow</h2>
            <SearchBar 
            nameSearch={event=> this.updateSearch(event)}
            stateCheckBox={bool=>this.filterStocked(bool)}/>
            <ProductTable dataArray={this.state.filterName}
             />
        </section>
        );
    }
  }
export default FilterableProductTable;