import React from "react";
import SearhBar from "./SearchBar";
import ProductTable from "./ProductTable";
import data from "../data.json";


export default class FilterableProductTable extends React.Component{

    state={
        paco:data.data,
        cosas:this.props.allProducts
    }

    search(e) {
        // console.log(e.target.value);
        let currentList = [];
        let newList = [];

        currentList = this.state.paco;
      
        newList = currentList.filter(product => {
            const lc = product.name.toLowerCase();
            const filter = e.target.value.toLowerCase();
            return lc.includes(filter);
        })
        
    console.log(newList)
        this.setState({
          cosas: newList
        });
    }

    
    render(){

        // console.log("estamos en tabla")
        // console.log(this.props)
        return(

        <div className="Filtered">
            <div class="search-bar">
                <SearhBar searchProducts={(e)=> {this.search(e)}}></SearhBar>
            </div>
            <div>
                <ProductTable  newList={this.state.cosas}></ProductTable>  
           </div>
           
        </div>
        )
    }
}