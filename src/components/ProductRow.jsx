import React from 'react'

const ProductRow = (props) => {
    const data = props.products
    const query = props.querySearch
    const stock = props.isStock

    console.log(stock)

    const filteredData = data.filter(item => {
        return (
            (item.name.toLowerCase()).indexOf(query.toLocaleLowerCase()) > -1
        )
    })

    return (
        <div className="table">
            {
                filteredData.map(el =>
                    <div className={`row ${el.stocked ? '':'no-stocked'} ${!el.stocked && stock ? 'd-none':''}`}>
                        <div className="col-6">{el.name}</div>
                        <div className="col-6">{el.price}</div>
                    </div>
                )
            }
        </div>
    )

}

export default ProductRow