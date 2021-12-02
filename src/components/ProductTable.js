import React from 'react'
import ProductRow from './ProductRow';




function ProductTable(props) {




//map de productROW ---- props.products
    return (
        <div className="ProductTable"> 
            <>
                <h2>Listado deProducts</h2>

                {
                    props.products.map(elm => <ProductRow key={elm.name} product={elm} {...elm} />)
                }
               
            </>
        </div>
      );
}

export default ProductTable