function ProductRow({name, price, inStock}) {
    return(  
        <div className="tableRow">
<tr>
<div style= {{color: inStock === false ? "red" : "black" }}><td>{name}</td></div>
<td>{price}</td>
</tr>
</div>
    )
}
export default ProductRow;