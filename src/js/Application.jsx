import React from 'react';
import FilterableProductTable from './FilterableProductTable';
import data from '../data.json';

class Application extends React.Component {
    render() {
        return (
            <div className="container">
                <FilterableProductTable products={data.data} />
            </div>
        );
    }
}

export default Application;
