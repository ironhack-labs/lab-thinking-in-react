import { Route, Routes } from 'react-router-dom'
import ProductsPage from '../ProductsPage/ProductPage'

const AppRoutes = () => {
    return (


        <Routes>
            <Route path="/" element={<ProductsPage />} />
        </Routes>
    )
}

export default AppRoutes