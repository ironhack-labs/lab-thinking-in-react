function ProductRow({name, price, inStock}) {
    return(  
        <div className="tableRow">
<tr>
<td style= {{color: inStock === false ? "red" : "black" }}>{name}</td>
<td>{price}</td>
</tr>
</div>
    )
}
export default ProductRow;