import ProductRow from "./ProductRow";

const ProductTable = ({allProducts}) => {

    
    return (
        <table>
<thead>
<tr>
    <th>name</th>
    <th>price</th>
</tr>
</thead>
<tbody>

{allProducts.map(singleProduct => {
    return <ProductRow key={singleProduct.id} product={singleProduct}/>

})}

</tbody>
</table>


    );
};

export default ProductTable;
