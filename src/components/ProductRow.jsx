
const ProductRow = ({product}) => {
    const productStyle =  product.inStock ? 'black' : 'red'
    

    return (
<tr>
    <td style={{color:productStyle}}>{product.name}</td>
    <td>{product.price}</td>
</tr>


    );
};
export default ProductRow;
