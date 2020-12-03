import React, { Component } from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'
// import data from './data.json'

// {
//   "data": [
// {"category": "Sporting Goods",  
// "price": "$49.99",    "stocked": true,    "name": "Football",    "id": "295a4dab-74b2-4e60-b3c2-c1346aba7585"},
// ]}

export default class FilterableProductTable extends Component {
    
    state = {
        forSaleGoods: this.props.products.data,
        search: ''
      }

    setSearch = search => {
        console.log('did it change?')
    //   this.filteredGoodsList(search);
        this.setState ( {
            search: search
        })
    }

//this approach would "overwrite" the original state, meaning the user could not go back in her search    
    // filteredGoodsList = props => {
    //     console.log (`workings?`);
    //     const filtered = this.state.props.forSaleGoods.filter(
    //       good => good.name.toLowerCase().includes(this.state.search.toLowerCase())
    //     )
    //     this.setState (
    //         {forSaleGoods:filtered}
    //       );
    //     }
    

//RENDER ISN"T PART OF THE CLASS, but its related to it.
    render() {
    //filtering needs to happen in the render
    
    const filteredGoodsList = this.state.forSaleGoods.filter( good => 
        good.name.toLowerCase().includes(this.state.search.toLowerCase())
    )

         return (
            <div>
                <div>
                    <SearchBar 
                        search= {this.state.search}
                        setSearch= {this.setSearch}
                    />
                </div>

                <div>
                    <ProductTable 
                        goodsList= {filteredGoodsList}
                    />
                </div>
            </div>
        )//end return

    }//end render
} //end class




    // filteredGoodsList = props => {
    //     console.log (`workings?`);
    //     const filtered = this.state.props.forSaleGoods.filter(
    //       good => good.name.toLowerCase().includes(props.search.toLowerCase())
    //     )
    //     this.setState (
    //         {forSaleGoods:filtered}
    //       );
    //     }
    