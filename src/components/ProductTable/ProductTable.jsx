import ProductRow from "../ProductRow/ProductRow"


const ProductTable = ({ products }) => {

    return (
        <>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                <tr>
                    {
                        products.map(elm => {
                            return (
                                <ProductRow product={elm} />
                            )
                        })
                    }

                </tr>
            </table>


        </>


    )
}

export default ProductTable