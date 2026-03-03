import { useState } from "react";
import jsonData from "../data.json";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import { Layout, Typography } from "antd";

const { Content } = Layout;
const { Title } = Typography;

const ProductsPage = () => {
  const [products, setProducts] = useState(jsonData);
  const [search, setSearch] = useState("");
  const [check, setCheck] = useState(false);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStock = !check || product.inStock;

    return matchesSearch && matchesStock;
  });

  return (
    <Layout>
      <Content style={{ padding: "40px 80px" }}>
        <Title level={2}>IronStore</Title>

        <div style={{ marginBottom: 24 }}>
          <SearchBar
            search={search}
            setSearch={setSearch}
            check={check}
            setCheck={setCheck}
          />
        </div>

        <ProductTable products={filteredProducts} />
      </Content>
    </Layout>
  );
};
export default ProductsPage;
