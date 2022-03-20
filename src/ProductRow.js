
function ProductRow(props) {

    return (
            <tr>
                <td style = {props.inStock === true ? {color: 'black'} : {color: 'red'}}>
                {props.name}
                </td>
                <td>{props.price}</td>
            </tr>

    );
};

export default ProductRow;