import { Route, Routes } from "react-router-dom"
import ProductPage from "../pages/ProductPage/ProductPage"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<ProductPage />} />
        </Routes>
    )
}

export default AppRoutes