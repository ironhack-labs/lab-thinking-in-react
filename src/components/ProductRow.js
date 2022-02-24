function ProductRow({ theProducts }) {




    return (
        <tbody>

            {theProducts.map((elm, ind) => {
                return (

                    <tr key={ind}>

                        {elm.inStock ? <td> {elm.name} </td> : <td style={{ color: 'red' }}> {elm.name} </td>}

                        {/* if ({elm.inStock === false}){
                            <td style={{ color: 'red' }}> {elm.name} </td>
                        } else {
                            <td> {elm.name} </td>
                        } */}
                        <td > {elm.price}</td>
                    </tr>
                )
            })
            }
        </tbody >

    )
}

export default ProductRow