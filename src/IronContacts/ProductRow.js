import React, { Component } from 'react';
import '../App.css'

class ProductRow extends Component {




    render() {
        return (
            <>
                <div className = "itens-list">
                    <div>
                        {this.props.name}
                    </div>
                    <div>
                        {this.props.price}
                    </div>
                </div>
            </>

        )
    }
}

export default ProductRow