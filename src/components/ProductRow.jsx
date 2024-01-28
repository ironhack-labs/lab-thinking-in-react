
function ProductRow ({name, price, inStock})  {
  const colorred = inStock ? "" : "text-danger"
    return (
       
            <tr> 
                <td className={`col-5 ${colorred}`}>{name}</td>
                <td className="col-1">{price}</td>
            </tr>
        
    );
}

export default ProductRow;