import React from 'react';
import ProductRow  from './ProductRow';
import ProductTable  from './ProductTable';
import SearchBar from './SearchBar';
import data from '../data.json';
import { Component } from 'react';
import { render } from '@testing-library/react';
import UIkit from 'uikit';


class FilterableProductTable extends Component{
    state={
        data:[
            {
                category:"",
                price:"",
                stocked:Boolean,
                name:"",
                id:"",

            }

        ]
    }

    componentDidMount(){
       let{data} =this.state 
       data = this.props.products
       console.log(this.props.products)
       this.setState({data})
    }
    

    render(){
        const {data}= this.state 
        console.log(data)
        return(
            
                <div>

    <div>
        <form className="uk-search uk-search-default">
        <span uk-search-icon></span>
        <input className="uk-search-input" type="search" placeholder=""/>
    </form>
    </div>
    <table className="uk-table uk-table-hover uk-table-divider">
        <thead>
            <tr>
                <th>Name</th>
                
                <th>Price</th>
            </tr>
        </thead>
        
        <tbody>
           {data.map(item => {
               return(
                   
                   
                       <div> {item.name} </div>
                   
               )
           })}
            
        </tbody>
    </table>

            </div>
            )
    
    }

}

export default FilterableProductTable;



