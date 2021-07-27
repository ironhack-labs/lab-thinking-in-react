import React,{ Component } from "react";
import ProductTable from "./ProductTable";


class FilterableProductTable extends Component {

    state = {
        product:[...this.props.products.data],
        searchProduct:[],
        searchOn:false,
    }

    handleSearch = (event)=> {
        let {value} = event.target 
        if(value){
            this.setState({
                searchOn:true
            })
            let copyArr = [...this.state.product]
            if(copyArr.find(element =>element.name.toLowerCase().includes(value.toLowerCase()))){
                let itens = copyArr.filter(element => element.name.toLowerCase().includes(value.toLowerCase()))
                this.setState({
                    searchProduct:itens
                })
            }
            
        }else{
            this.setState({
                searchOn:false
            })
        }
        
    
    }

    render(){
        return(
        <div id="table">
        <h1>IronStore</h1>
        <form><input className="search-bar" type="text"name="search" placeholder="Search bar" onChange={this.handleSearch}></input></form>
        {this.state.searchOn ?<ProductTable products={this.state.searchProduct}/>:<ProductTable products={this.state.product}/>}       
        </div>
        
        
        
        )
    }
}

export default FilterableProductTable