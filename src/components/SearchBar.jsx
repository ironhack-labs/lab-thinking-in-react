import { Input, Checkbox, Flex } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const SearchBar = ({ search, setSearch, check, setCheck }) => {
  return (
    <Flex vertical gap="middle">
      <Input
        name="search"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="Search a product"
        prefix={<SearchOutlined />}
        allowClear
      />

      <Checkbox
        type="checkbox"
        checked={check}
        onChange={(e) => {
          setCheck(e.target.checked);
        }}
      >
        Only Show products in Stock
      </Checkbox>
    </Flex>
  );
};
export default SearchBar;
