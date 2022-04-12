export default function ProductRow(props){
    
    const {price, inStock, name} = props.product;

    return (
        <tr className={inStock ? "black" : "red"}>
            <td>{name}</td>
            <td>{price}</td>
        </tr>
    )
}