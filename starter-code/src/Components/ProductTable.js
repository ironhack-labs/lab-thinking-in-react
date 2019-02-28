import React from "react"
import {Table} from "antd"


let ProductTable = ({products}) => {
    let columns =[
        {
            title:"Name",
            dataIndex:"name",
            key:"name"
        },
        {
            title:"Price",
            dataIndex:"price",
            key:"price"
        },
        {
            title:"Category",
            dataIndex:"category",
            key:"category"
        }
    ]
    return (
        <Table 
            dataSource = {products}
            columns = {columns}
            pagination = {false}
            rowKey = "name"
        />
    )


}


export default ProductTable