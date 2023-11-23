import ProductRow from "../ProductRow/ProductRow"

const ProductTable = ({dataProducts}) =>{
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    dataProducts.map(elm =>{
                        return <ProductRow key={ elm.id } product={ elm }/>
                    })
                }
            </tbody>
        </table>
    )
}

export default ProductTable