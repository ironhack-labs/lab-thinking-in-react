
import React from 'react';
import Search from './Search';
import ProductTable from './ProductTable'




class FilterableTable extends React.Component {

    state = {
        query: '',
        checked: false
    }

    setQuery = queryParam => {
        this.setState({
            query: queryParam
        })
    }

    setStock = event => {
        this.setState({
            checked: event
        })
    }

    render() {

        return (
            <>
                <h1>IronStore</h1>
                <Search query={this.state.query}

                    setQueryProp={this.setQuery}
                    setQueryStock={this.setStock}
                />
                <ProductTable products={this.props.products}
                    query={this.state.query}
                    stock={this.state.checked} />

            </>
        );
    }
}
export default FilterableTable;


