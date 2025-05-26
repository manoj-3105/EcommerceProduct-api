import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './components/ProductDetails';
import './App.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
