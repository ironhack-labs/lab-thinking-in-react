import './ProductRow.css'

const ProductRow = ({ product }) => {

    const { name, price, id, inStock } = product

    return (
        <section className='ProductRow'>
            <div className='d-flex justify-content-around'>
                <p className={!inStock && 'text-danger'}>{name}</p>
                <p>{price}</p>
            </div>
            <hr />
        </section>
    )
}

export default ProductRow