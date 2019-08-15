import React, { Component } from 'react';
import Search from './SearchBar'
import data from '../data.json'
import ProductTable from './ProductTable'



class FilterableProductTable extends Component {
    constructor(){
        super()
        this.state = { 
            storeList : data.data
        }
    }
    searchProduct = (word) => { 
        let resultados = []
        data.data.find(elm => {if (elm.name.includes(word))
        resultados.push(elm)
    })
    this.setState({
        storeList: resultados
    
    })
    }
    render() {
      return (
          <div>
          </div>
          
      );
    }
}
export default FilterableProductTable;