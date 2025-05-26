
import ProductList from "../components/ProductList";
import ProductForm from "../components/ProductForm";

function Home() {
  return (
    <div className="home-container">
      <div className="form-container">
        <ProductForm />
      </div>
      <div className="list-container">
        <ProductList />
      </div>
    </div>
  );
}

export default Home;