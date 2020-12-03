import React, { Component } from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'


export default class FilterableProductTable extends Component {
    
    state = {
        forSaleGoods: this.props.products.data,
        search: '',
        onlyInStock: false,
      }

    setSearch = search => {
        // console.log('did it change?')
        this.setState ( {
            search: search
        })
    }
    state = {
        forSaleGoods: this.props.products.data,
        search: '',
        onlyInStock: false,
      }


    setShowOnlyInStock = event => {
        console.log(`State was at: ${this.state.onlyInStock}`)
        
        this.setState ( {
            onlyInStock: !this.state.onlyInStock,
        })

        console.log(`event is '${event}', state is now '${this.state.onlyInStock}'`)
    }

//RENDER ISN"T PART OF THE CLASS, but its related to it.
    render() {
    //filtering needs to happen in the render
    
    const filteredGoodsList = this.state.forSaleGoods.filter( good => {
        if (this.state.stockIn) {
         return good.stocked === true && 
         good.name.toLowerCase().includes(this.state.search.toLowerCase()) ;
        
        } else {
            return good.name.toLowerCase().includes(this.state.search.toLowerCase());
        }
    })

         return (
            <div>
                <div>
                    <SearchBar 
                        search= {this.state.search}
                        setSearch= {this.setSearch}
                        onlyInStock = {this.state.onlyInStock}
                        setShowOnlyInStock = {this.setShowOnlyInStock}
                    />
                </div>
                
                <div>
                    <p class='emailUs'>Is the product you want <span class="stockedNo">out of stock</span>?
                     Contact us here <a href="mailto:webmaster@example.com">webmaster@example.com</a> </p>
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

//this approach would "overwrite" the original state, meaning the user could not go back in her search    


 // // console.log(`event is '${event}'`)

        // const goodsInStock = this.state.forSaleGoods.filter(good => {
        //     if (event) {
        //         console.log('checked')
        //     } else {
        //         console.log(`not checked`)
        //     }
        // })

         // setStockIn = event => {

    //     const goodsInStock = this.state.forSaleGoods.filter(good => {
    //         if (this.state.stockIn === false) {
    //             console.log('wait false')
    //         }
    //     })
    //     // console.log(this.state.forSaleGoods)

    //     // .filter(good => {
    //     //     if (event.target.value === true ) {
    //     //         return good.stocked === "true"
    //     //     } else {
    //     //         return good
    //     //     }
    //     // })
    //     // console.log(this.state.forSaleGoods)

        
    //     this.setState({
    //         // stockIn: event.target.checked,
    //         forSaleGoods: goodsInStock
    //     })
    // }
    