import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Product from './components/Product';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
   <>
   <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
     </Routes>
     <Footer/>
   </>
  );
}

export default App;
