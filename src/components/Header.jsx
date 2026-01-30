import { useState } from 'react';
import './Header.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  window.addEventListener('scroll', () => {
    setIsScrolled(window.scrollY > 50);
  });

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <i className="fas fa-fire"></i>
            <span>Midnight Fuel</span>
          </div>
          <nav className="nav">
            <a href="#why">Mengapa Kami</a>
            <a href="#products">Produk</a>
            <a href="#testimonial">Testimoni</a>
            <a href="#contact">Kontak</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
