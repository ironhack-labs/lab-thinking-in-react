import React from 'react';
import { Table } from 'antd';

const ProductTable = ({ products }) => {
    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name"
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price"
        },
        {
            title: "Category",
            dataIndex: "category",
            key: "category"
        }
    ]
    return (
        <Table
            dataSource={products}
            columns={columns}
            pagination={true}
        />
    )
}

export default ProductTable