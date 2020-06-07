import React from 'react';
import ProductRow from './ProductRow';
import 'bulma/css/bulma.css';

function ProductTable(props) {

        let filteredFoods

        !props.showStocked ? filteredFoods = props.products.filter((p) => p.name.toLowerCase().includes(props.searchTerm.toLowerCase()) ) : filteredFoods = props.products.filter((p) => p.name.toLowerCase().includes(props.searchTerm.toLowerCase()) && p.stocked === true )

        return(
            <div className="column">
            {filteredFoods.map((p) => <ProductRow name={p.name} price={p.price} stocked={p.stocked} category={p.category} key={Math.random()}></ProductRow> )}  
            </div>
        )
}

export default ProductTable;