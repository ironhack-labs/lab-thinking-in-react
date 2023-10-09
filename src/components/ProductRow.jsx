function ProductRow ({ product }) {
  const {name, price, inStock} = product;
  const changeColor = inStock ? "grey" : "red";
  
  return (
    <>
      <tr>
      <th style={{ color: changeColor, fontSize: '14px', fontWeight: 'normal' }}>{name}</th>
      <th style={{ color: changeColor, fontSize: '14px', fontWeight: 'normal' }}>{price}</th>
      </tr>

      
    </>
  )
}

export default ProductRow;