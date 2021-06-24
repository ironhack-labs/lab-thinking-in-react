import React, { Component } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';




export default class FilterableProductTable extends Component{
    state={
        data: [
            {
                category:String,
                price:String,
                stocked:Boolean,
                name:String,
                id:String
            }
        ]
    }

        componentDidMount(){//carga el componente de datos, jalando el props con los productos
            let{data} = this.state
            data = this.props.products
            
            this.setState({data})
        }
        

    render(){
        const {data} = this.state
        return(
            
            <div>
                <h1>IronStore</h1>
                <SearchBar/>
                <ProductTable/>
                {data.map(item => {
                    return(
                        
                        <div className="rowElements">
                            <span className="rowItems">{item.name}</span>
                            <span className="rowItems">{item.price}</span>
                            </div>
                        
                    )
                })}
               
            </div>
        )
    }

}



