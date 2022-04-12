export default function ProductRow(props){
    
    const {price, inStock, name} = props.product;

    return (
        <tr className={inStock && "red"}>
            <td>{name}</td>
            <td>{price}</td>
        </tr>
    )
}