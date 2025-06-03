import Navbar from '../../components/Navbar';

export default function Home() {
  return (
    <>
      <style jsx>{`
        .about-container {
          min-height: 100vh;
        }
        .hero-section {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-content {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1rem;
          text-align: center;
        }
        @media (min-width: 640px) {
          .hero-content {
            padding: 0 1.5rem;
          }
        }
        @media (min-width: 1024px) {
          .hero-content {
            padding: 0 2rem;
          }
        }
        .hero-title {
          font-size: 2.25rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
        }
        @media (min-width: 768px) {
          .hero-title {
            font-size: 3.75rem;
          }
        }
        @media (min-width: 1024px) {
          .hero-title {
            font-size: 4.5rem;
          }
        }
        .hero-subtitle {
          font-size: 1.25rem;
          margin-bottom: 2rem;
          max-width: 512px;
          margin-left: auto;
          margin-right: auto;
        }
        @media (min-width: 768px) {
          .hero-subtitle {
            font-size: 1.5rem;
          }
        }
        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-direction: column;
          align-items: center;
        }
        @media (min-width: 640px) {
          .hero-buttons {
            flex-direction: row;
          }
        }
        .mission-section {
          padding: 5rem 1rem;
          background: #111827;
        }
        .mission-container {
          max-width: 1280px;
          margin: 0 auto;
          text-align: center;
        }
        .mission-title {
          font-size: 1.875rem;
          font-weight: bold;
          margin-bottom: 2rem;
        }
        @media (min-width: 768px) {
          .mission-title {
            font-size: 2.25rem;
          }
        }
        .mission-description {
          font-size: 1.25rem;
          margin-bottom: 3rem;
          max-width: 768px;
          margin-left: auto;
          margin-right: auto;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          margin-top: 3rem;
        }
        @media (min-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .stat-card {
          padding: 1.5rem;
          border-radius: 0.5rem;
          background: #1f2937;
        }
        .stat-number {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }
        .series-section {
          padding: 5rem 1rem;
        }
        .series-container {
          max-width: 1280px;
          margin: 0 auto;
        }
        .series-title {
          font-size: 1.875rem;
          font-weight: bold;
          margin-bottom: 3rem;
          text-align: center;
        }
        @media (min-width: 768px) {
          .series-title {
            font-size: 2.25rem;
          }
        }
        .series-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 768px) {
          .series-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .series-card {
          position: relative;
          overflow: hidden;
          border-radius: 0.5rem;
          cursor: pointer;
        }
        .series-content {
          aspect-ratio: 16/9;
          background: #1f2937;
          position: relative;
          padding: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .series-info h3 {
          font-size: 1.25rem;
          font-weight: bold;
        }
        .series-info p {
          color: #9ca3af;
        }
        .series-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .series-card:hover .series-overlay {
          opacity: 1;
        }
      `}</style>
      
      <Navbar />
      <div className="about-container">
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title text-gradient">
              Morning Wood Studio
            </h1>
            <p className="hero-subtitle">
              Crafting Powerful Stories in Just 10 Seconds
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Watch Our Shorts</button>
              <button className="btn-secondary">Partner With Us</button>
            </div>
          </div>
        </section>

        <section className="mission-section">
          <div className="mission-container">
            <h2 className="mission-title text-gradient">Our Mission</h2>
            <p className="mission-description">
              We believe in the power of micro-storytelling. Each 10-second episode 
              is crafted to deliver maximum impact in minimum time.
            </p>
            
            <div className="stats-grid">
              <div className="stat-card">
                <h3 className="stat-number">500M+</h3>
                <p>Views Across Platforms</p>
              </div>
              <div className="stat-card">
                <h3 className="stat-number">1000+</h3>
                <p>10-Second Episodes</p>
              </div>
              <div className="stat-card">
                <h3 className="stat-number">50+</h3>
                <p>Series Produced</p>
              </div>
            </div>
          </div>
        </section>

        <section className="series-section">
          <div className="series-container">
            <h2 className="series-title text-gradient">
              Featured Series
            </h2>
            <div className="series-grid">
              {[
                { title: "Quick Laughs", desc: "Comedy in seconds" },
                { title: "Mini Stories", desc: "Micro dramas" },
                { title: "Flash Action", desc: "Quick-paced thrills" }
              ].map((series, i) => (
                <div key={i} className="series-card">
                  <div className="series-content">
                    <div className="series-info">
                      <h3>{series.title}</h3>
                      <p>{series.desc}</p>
                    </div>
                  </div>
                  <div className="series-overlay">
                    <button className="btn-primary">Watch Now</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}