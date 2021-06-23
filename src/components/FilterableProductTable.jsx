import React, { Component } from 'react';
import ProductTable from './ProductTable';




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
                {data.map(item => {
                    return(
                        
                        <div>{item.name}</div>
                    )
                })}
                <ProductTable/>
            </div>
        )
    }

}



