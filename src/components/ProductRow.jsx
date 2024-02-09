/* eslint-disable react/prop-types */

function ProductRow({ allProduct }) {
    return (
        <tr>
            <td className={allProduct.stocked ? '' : 'redText'}>
                {allProduct.name}
            </td>
            <td>{allProduct.price}</td>
        </tr>
    )
}

export default ProductRow;
