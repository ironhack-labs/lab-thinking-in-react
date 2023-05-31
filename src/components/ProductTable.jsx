import ProductRow from './ProductRow';

function ProductTable({ products }) {
    return (
        <div className="product-table">
             <ProductRow products={products}/>

        </div>
    
    );
  }
  
  export default ProductTable;