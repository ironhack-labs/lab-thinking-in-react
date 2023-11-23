import './ProductRow.css'
const ProductRow = ({ products }) => {
    return (

        <div className="product-row">

            <div className="name col-6 ">
                {
                    products.map(e => {
                        return (
                            <p className={!e.inStock ? 'red' : ''}>{e.name}</p>
                        )
                    })
                }
            </div>
            {/* <div className="price col-6">
                {
                    products.map(e => {
                        return (
                            <p className={!e.inStock ? 'red' : ''}>{e.price}</p>
                        )
                    })
                }
            </div> */}
        </div>


    )
}
export default ProductRow