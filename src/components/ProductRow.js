function FoodBox(props) {
    const { product } = props;
  
    return (
      <tr>
<td><p>Calories: {product.name}</p></td>
<td><p>Calories: {product.price}</p></td>
      </tr>
    );
  }
  
  export default FoodBox;
  