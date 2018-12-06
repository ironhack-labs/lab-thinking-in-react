import React, { Component } from 'react';
import ProductCategoryRow from '../ProductCategoryRow/ProductCategoryRow';
import ProductRow from '../ProductRow/ProductRow'

export default class ProductTable extends Component {
    constructor() {
        super()
        this.state = {
            data: null
        }
    }

    componentDidMount() {
        this.setState({ ...this.state, data: this.props.jsonData })
    }

    render() {
        if (this.state.data) {
            return (
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.values(this.props.jsonData).map((item,index) => {
                                return (
                                    <tr>
                                        <ProductCategoryRow category={item[0].category} />
                                        <ProductRow  categoryData={item} />
                                    </tr>

                                )
                            })}

                        </tbody>
                    </table>

                </div>
            )
        } else {
            return (
                <div>
                    <h3>Cargando</h3>
                </div>
            )
        }
    }
}
