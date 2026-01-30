import { useState, useEffect } from 'react';
import { getCoffeeProducts } from '../services/contentful';
import './ProductList.css';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getCoffeeProducts();
      setProducts(data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  const handleOrderClick = (productName) => {
    const message = `Saya ingin memesan ${productName} dari Midnight Fuel`;
    const phoneNumber = "082335756519";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`);
  };

  if (loading) {
    return (
      <section className="products" id="products">
        <div className="container">
          <h2 className="section-title">Loading...</h2>
        </div>
      </section>
    );
  }

  return (
    <section className="products" id="products">
      <div className="container">
        <h2 className="section-title fade-in">Koleksi Premium Kami</h2>
        <div className="products-grid">
          {products.map((product, index) => (
            <div key={product.id} className="product-card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="product-image">
                {product.image && <img src={product.image} alt={product.name} />}
                {!product.image && (
                  <div className="no-image">
                    <i className="fas fa-coffee"></i>
                  </div>
                )}
                {product.isStocked && <div className="in-stock">Stok Tersedia</div>}
              </div>
              <div className="product-content">
                <h3>{product.name}</h3>
                <div className="product-meta">
                  <span className="roast-level">
                    <i className="fas fa-fire"></i> {product.roastLevel}
                  </span>
                  <span className="taste-profile">
                    <i className="fas fa-heart"></i> {product.tasteProfile}
                  </span>
                </div>
                <p className="product-description">{product.description}</p>
                <div className="product-footer">
                  <span className="price">Rp {product.price?.toLocaleString('id-ID')}</span>
                  <button 
                    className="btn btn-primary btn-small"
                    onClick={() => handleOrderClick(product.name)}
                  >
                    <i className="fas fa-shopping-cart"></i> Pesan
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
