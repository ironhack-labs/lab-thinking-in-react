import React, {Component} from 'react'
import data from './data.json'
import SearchBar from './SearchBar.js';
import ProductTable from './ProductTable.js';

class FilterableP extends Component{

    state = {
        data,
        category:[],
        drawC: true,
        search:''
    }

    drawCategory = (catToDraw) =>{
        var arr = this.state.category
        if(arr.indexOf(catToDraw)===-1){
            arr.push(catToDraw)
            return true
        }else{
            return false
        }        
    }

    searchProduct = e =>{
        const text = e.target.value
        const regEx = RegExp(text, 'i')
        const filtered = this.state.data.filter(f => regEx.test(f.name))
        this.setState({ data: filtered, category:[], search:text })
    }

    filterStocked = e =>{
        const check = e.target.checked
        if(check === true){
        const filtered = this.state.data.filter(f => f.stocked === true)
        this.setState({ data: filtered, category:[]})
        }else{
            this.setState({ data:data, category:[]})
        }
    }

    render(){

        const { data } = this.state

        

        return(
            <div>
                <h1>Products in React</h1>
                <SearchBar searchFun={()=>this.searchProduct} 
                inStock={()=>this.filterStocked} />
                <table>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                <tr>
                    {data.map((data, index)=>
                        <ProductTable key={index} 
                        {...data} drawC={this.drawCategory(data.category)} />
                    )}
                </tr>
                </table>
            </div>
        )
    }
}

export default FilterableP  