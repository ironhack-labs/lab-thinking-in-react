import { Table } from "antd";

const ProductRow = ({ products }) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <span style={{ color: !record.inStock ? "red" : "black" }}>{text}</span>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => `€${price}`,
    },
  ];

  const dataSource = products.map((product) => ({
    ...product,
    key: product.id,
  }));

  return <Table columns={columns} dataSource={dataSource} pagination={false} />;
};

export default ProductRow;
