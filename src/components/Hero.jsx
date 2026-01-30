import './Hero.css';

export default function Hero() {
  const handleWhatsApp = () => {
    const message = "Halo! Saya tertarik dengan produk Midnight Fuel";
    const phoneNumber = "082335756519";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`);
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content fade-in">
          <div className="hero-text">
            <h1>Midnight Fuel</h1>
            <p className="subtitle">Rasakan Kopi Premium Dengan Cita Rasa Yang Tak Terlupakan</p>
            <p className="description">
              Setiap biji kopi dipilih dengan cermat dan disangrai dengan sempurna untuk menghadirkan pengalaman kopi terbaik di setiap tegukan Anda.
            </p>
            <button className="btn btn-primary" onClick={handleWhatsApp}>
              <i className="fas fa-comments"></i>
              Pesan Sekarang via WhatsApp
            </button>
          </div>
          <div className="hero-image fade-in">
            <div className="hero-image">
            <img style={{width: "80%"}} src="https://ik.imagekit.io/11ladp3yp/image_363b3062.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
