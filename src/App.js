import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Product from './components/Product';
import {Routes, Route} from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';

function App() {
  return (
   <>
   <Header />
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Product />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
     </Routes>
     <Footer/>
   </>
  );
}

export default App;
