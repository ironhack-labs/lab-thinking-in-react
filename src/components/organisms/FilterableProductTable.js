import React from 'react';

// importing styles
import 'bulma/css/bulma.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';

// importing sub components
import ProductTable from '../molecules/ProductTable';

class FilterableProductTable extends React.Component {

    render() {

        return (
            <div className="mb-3">
                <ProductTable products={this.props.products} />
            </div>
        )
    }
}

export default FilterableProductTable;