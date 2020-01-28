import React, { Component } from 'react'
import SearchBar from '../components/SearchBar'
import ProductTable from '../components/ProductTable'

export default class FilterableProductTable extends Component {
constructor(props){
    super(props);
    this.state={
        products: [...props.products.data],
        searchString : '',
        checkBoxChecked: false,
    }
}

    handleInputChange=(searchValue)=>{
        this.setState({
            searchString : searchValue
        })
 
    }
    
    changeChecked=()=>{
        this.setState({
            checkBoxChecked : !this.state.checkBoxChecked
        })
    }


    render() {
        

          return (
            <div className="ironStore">
                <h1>IronStore</h1>
            {/* 
            - Searchbar: hier wird der searchString durchgereicht an die Searchbar und auch die Methode handleInputChange 
            - Der initiale searchString ist '' und wird bis zur Searchbar durchgereicht
            - states können von unten nach oben gereicht werden
            - props nur von oben nach unten
            
            */}
               <SearchBar searchString={this.state.searchString} onChangeInput={this.handleInputChange} onChangeCheckBox={this.changeChecked} />


            {/* 
             - Hier übergeben wir die kompletten Produkte als Prop in products und auch den searchString als Prop
            */}
               <ProductTable products={this.state.products} searchString={this.state.searchString} checkBox={this.state.checkBoxChecked} />
            </div>
        )
    }
}
