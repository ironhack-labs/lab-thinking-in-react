import ProductRow from "./ProductRow";

function ProductTable (props) {
const products = props.products;
return (
<ProductRow products = {products}/>
)


}




export default ProductTable; 