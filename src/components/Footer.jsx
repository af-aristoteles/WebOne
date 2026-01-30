import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Midnight Fuel</h4>
            <p>Kopi premium dengan cita rasa autentik untuk pecinta kopi sejati.</p>
          </div>
          <div className="footer-section">
            <h4>Hubungi Kami</h4>
            <p>WhatsApp: <a href="https://wa.me/082335756519">082335756519</a></p>
            <p>Email: hello@midnightfuel.id</p>
          </div>
          <div className="footer-section">
            <h4>Ikuti Kami</h4>
            <div className="social-links">
              <a href="#" title="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" title="Facebook"><i className="fab fa-facebook"></i></a>
              <a href="#" title="TikTok"><i className="fab fa-tiktok"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Midnight Fuel. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
