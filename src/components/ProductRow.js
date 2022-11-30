function ProductRow(props) {
    return  (<tr key={props.product.id} className={props.product.inStock ? null : "red"}>
        <td><p>{props.product.name}</p></td>
        <td><p>{props.product.price}</p></td>
    </tr>)
};

export default ProductRow;