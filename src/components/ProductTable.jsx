import ProductRow from "./ProductRow";

function ProductTable(props){

    return (
        <div>
            <ProductRow productchild={props.products}></ProductRow>
        </div>
           
    )
}

export default ProductTable;

