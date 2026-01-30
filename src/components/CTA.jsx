import './CTA.css';

export default function CTA() {
  const handleWhatsApp = () => {
    const message = "Halo! Saya ingin mencoba semua produk Midnight Fuel";
    const phoneNumber = "082335756519";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`);
  };

  return (
    <section className="cta" id="contact">
      <div className="container">
        <div className="cta-content fade-in">
          <h2>Siap Merasakan Kelezatan Midnight Fuel?</h2>
          <p>Jangan lewatkan kesempatan untuk menikmati kopi premium berkualitas tinggi dengan harga terjangkau.</p>
          <button className="btn btn-secondary" onClick={handleWhatsApp}>
            <i className="fas fa-comments"></i>
            Hubungi Kami Sekarang
          </button>
        </div>
      </div>
    </section>
  );
}
