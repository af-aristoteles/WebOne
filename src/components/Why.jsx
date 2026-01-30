import './Why.css';

const reasons = [
  {
    icon: 'fa-leaf',
    title: 'Biji Pilihan Premium',
    description: 'Kami hanya menggunakan biji kopi arabika premium dari perkebunan terbaik di seluruh dunia.'
  },
  {
    icon: 'fa-fire',
    title: 'Sangrai Sempurna',
    description: 'Setiap batch disangrai dengan teknologi modern dan keahlian roaster berpengalaman.'
  },
  {
    icon: 'fa-heart',
    title: 'Rasa Autentik',
    description: 'Cita rasa kompleks dengan sentuhan unik yang membuat Anda ketagihan setiap tegukan.'
  },
  {
    icon: 'fa-truck',
    title: 'Pengiriman Cepat',
    description: 'Dikirim langsung dari roastery kami dengan kesegaran terjamin ke tangan Anda.'
  }
];

export default function Why() {
  return (
    <section className="why" id="why">
      <div className="container">
        <h2 className="section-title fade-in">Mengapa Memilih Midnight Fuel?</h2>
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="reason-icon">
                <i className={`fas ${reason.icon}`}></i>
              </div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
