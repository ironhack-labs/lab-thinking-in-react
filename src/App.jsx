import { useState } from "react";
import "./App.css";
import ProductPage from "./components/ProductsPage";

function App() {

  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme? "App dark-theme" : "App"}>
      <button id="theme-btn" onClick={()=>setDarkTheme(!darkTheme)}>🌙</button>
      <ProductPage/>
    </div>
  );
}

export default App;
