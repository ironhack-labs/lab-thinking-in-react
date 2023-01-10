import ProductRow from "./ProductRow";

const ProductsTable = () => {
    return (
<table id="Product-table">
    <tr id="name-price">
    <td id="Table-name"><h3>Name</h3></td>
    <td id="Table-price"><h3>Price</h3></td>
    </tr>
    <ProductRow/>
        </table>
    )
}


export default ProductsTable;