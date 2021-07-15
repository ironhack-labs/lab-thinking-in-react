import { Component } from "react"
import React from 'react'
import Fila from "./ProductRow"


class Table extends Component {
    constructor(props) {
        super()
        this.state = {
            product: props.products
        }
        
    }
   

    render() {
        console.log(this.state.product)
        return (
            <>
                <h2>Tabla</h2>
                {this.state.product.map((elm) => <Fila  {...elm} />)}

            </>
        )
    }

}

export default Table