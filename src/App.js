import './App.css';
import ProductsPage from './components/ProductsPage';
import { useContext } from "react"
import { ThemeContext } from "./context/ThemeContext";

function App() {

  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div className="App" style={{ backgroundColor: isDarkMode ? "#283848" : "white" }}>
      <ProductsPage />
      <button onClick={toggleDarkMode} className="btn">Change the color</button>
    </div>
  );
}

export default App;
