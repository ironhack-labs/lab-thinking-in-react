import "./App.css";
import ProductsPage from './components/ProductsPage';

function App() {
  return <div className="App">
  <section className="container">
  <div className="infos">
  <img className="back" src="https://res-console.cloudinary.com/dqycgj4fq/thumbnails/v1/image/upload/v1652815339/c3BvcnQucGhvdG9feWIzNGto/preview" alt="sport cover"></img>
    <ProductsPage />
    </div>
    </section>
  </div>;
}
export default App;