import React from "react"
import { Table } from "antd"

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
    }
  ]
  return (
    <Table
      dataSource={products}
      columns={columns}
      pagination={false}
      rowKey="name"
    />
  )
}

export default ProductTable
