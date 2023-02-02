import './ProductRow.css'

const ProductRow = ({category,price,name,id,inStock, ...props}) => {
    return(
        <tr>
            <td Style={inStock?'':'color:red;'}>{name}</td>
            <td>{price}</td>
        </tr>
    );
};

export default ProductRow;