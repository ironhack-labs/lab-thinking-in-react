import React from 'react';
import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow';
import { data } from './data.json';

export default class ProductTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filtered: this.props.filtered,
            categories: [...new Set(data.map(item => item.category))],
            items: []
        }
    }

    componentDidUpdate() {
        // this.setState({filtered: this.props.filtered})
    }

    orderItems() {
        const _items = [];
        this.state.categories.map(e => {
            _items.push(<ProductCategoryRow category={e}></ProductCategoryRow>)
            this.props.filtered.map(p => {
                if (p.category === e) _items.push(<ProductRow name={p.name} price={p.price}></ProductRow>)
            });
        });
        this.setState({ items: _items })
    };

    render() {
        console.log(this.props.filtered)
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.items}
                </tbody>
            </table>
        )
    };
};