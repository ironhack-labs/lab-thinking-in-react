
import SearchBar from '../../components/SearchBar/SearchBar';
import ProductRow from '../../components/ProductRow/ProductRow';
import jsonData from './../../data.json';

function ProductsPage() {

    const [products, setProduct] = useState({ ...jsonData })
    const [productsBackup, setProductBackup] = useState({ ...jsonData })

    // const notStock= 



    return (
        <div>
            <h1>IronStore</h1>
            <SearchBar />
            <ProductRow />
        </div>
    )
}

export default ProductsPage