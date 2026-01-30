import './SocialProof.css';

const testimonials = [
  {
    name: 'Budi Santoso',
    role: 'Coffee Enthusiast',
    image: '👨‍💼',
    text: 'Midnight Fuel benar-benar mengubah cara saya menikmati kopi. Rasanya konsisten dan premium!'
  },
  {
    name: 'Siti Nurhaliza',
    role: 'Barista',
    image: '👩‍💼',
    text: 'Sebagai barista, saya sangat selektif dengan pilihan kopi. Midnight Fuel adalah pilihan terbaik saya.'
  },
  {
    name: 'Ahmad Hidayat',
    role: 'Pemilik Kafe',
    image: '👨‍💼',
    text: 'Pelanggan saya selalu bertanya tentang kopi apa yang saya gunakan. Sekarang saya bisa menjawab dengan bangga!'
  }
];

export default function SocialProof() {
  return (
    <section className="social-proof" id="testimonial">
      <div className="container">
        <h2 className="section-title fade-in">Apa Kata Mereka</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.image}</div>
                <div>
                  <p className="author-name">{testimonial.name}</p>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
