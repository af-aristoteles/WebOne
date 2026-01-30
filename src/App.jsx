import Header from './components/Header';
import Hero from './components/Hero';
import Why from './components/Why';
import ProductList from './components/ProductList';
import CTA from './components/CTA';
import SocialProof from './components/SocialProof';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Why />
      <ProductList />
      <SocialProof />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
