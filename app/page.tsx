import { Metadata } from 'next'
import Navbar from '../components/Navbar';

export const metadata: Metadata = {
  title: 'Morning Wood - Film Production',
  description: 'Welcome to Morning Wood - Premium Film Production Studio',
}

export default async function Home() {
  return (
    <>
      <style jsx>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.8) 100%);
        }
        .hero-content {
          position: relative;
          z-index: 10;
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
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 2rem;
          background: linear-gradient(45deg, #fbbf24, #ef4444);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: fade-in 1s ease-in;
        }
        @media (min-width: 768px) {
          .hero-title {
            font-size: 4.5rem;
          }
        }
        @media (min-width: 1024px) {
          .hero-title {
            font-size: 6rem;
          }
        }
        .hero-subtitle {
          font-size: 1.25rem;
          margin-bottom: 3rem;
          max-width: 896px;
          margin-left: auto;
          margin-right: auto;
          color: #e5e7eb;
          line-height: 1.6;
        }
        @media (min-width: 768px) {
          .hero-subtitle {
            font-size: 1.875rem;
          }
        }
        .hero-buttons {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          justify-content: center;
          align-items: center;
        }
        @media (min-width: 640px) {
          .hero-buttons {
            flex-direction: row;
          }
        }
        .btn-primary {
          background: linear-gradient(45deg, #fbbf24, #ef4444);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 0.5rem;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.3s ease;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        .btn-primary:hover {
          transform: scale(1.05);
        }
        .btn-secondary {
          background: transparent;
          color: white;
          border: 2px solid #fbbf24;
          padding: 1rem 2rem;
          border-radius: 0.5rem;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.3s ease;
        }
        .btn-secondary:hover {
          transform: scale(1.05);
          background: rgba(251, 191, 36, 0.1);
        }
        .floating-element {
          position: absolute;
          border-radius: 50%;
          filter: blur(40px);
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .floating-element-1 {
          top: 5rem;
          left: 2.5rem;
          width: 5rem;
          height: 5rem;
          background: rgba(251, 191, 36, 0.2);
        }
        .floating-element-2 {
          bottom: 5rem;
          right: 2.5rem;
          width: 8rem;
          height: 8rem;
          background: rgba(239, 68, 68, 0.2);
          animation-delay: 2s;
        }
        .floating-element-3 {
          top: 50%;
          left: 25%;
          width: 4rem;
          height: 4rem;
          background: rgba(59, 130, 246, 0.2);
          animation-delay: 1s;
        }
        .section {
          padding: 6rem 1rem;
        }
        .section-dark {
          background: linear-gradient(to bottom, #000000, #111827);
        }
        .section-darker {
          background: linear-gradient(to bottom, #111827, #000000);
        }
        .section-accent {
          background: linear-gradient(to right, rgba(251, 191, 36, 0.1), rgba(239, 68, 68, 0.1));
        }
        .container {
          max-width: 1280px;
          margin: 0 auto;
        }
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        .section-title {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
          background: linear-gradient(45deg, #fbbf24, #ef4444);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        @media (min-width: 768px) {
          .section-title {
            font-size: 3.75rem;
          }
        }
        .section-subtitle {
          font-size: 1.25rem;
          color: #d1d5db;
          max-width: 512px;
          margin: 0 auto;
        }
        .grid {
          display: grid;
          gap: 2rem;
        }
        .grid-1 {
          grid-template-columns: 1fr;
        }
        @media (min-width: 768px) {
          .grid-md-2 {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .grid-lg-3 {
            grid-template-columns: repeat(3, 1fr);
          }
          .grid-lg-4 {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        .project-card {
          position: relative;
          overflow: hidden;
          border-radius: 1rem;
          background: #1f2937;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          transition: transform 0.5s ease;
        }
        .project-card:hover {
          transform: scale(1.05);
        }
        .project-image {
          aspect-ratio: 16/10;
          background: linear-gradient(135deg, rgba(251, 191, 36, 0.2), rgba(239, 68, 68, 0.2));
          position: relative;
          overflow: hidden;
        }
        .project-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%, transparent 100%);
        }
        .project-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 1.5rem;
          color: white;
        }
        .project-title {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        .project-description {
          color: #d1d5db;
          margin-bottom: 1rem;
        }
        .project-hover {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .project-card:hover .project-hover {
          opacity: 1;
        }
        .service-card {
          text-align: center;
          padding: 2rem;
          border-radius: 1rem;
          background: rgba(31, 41, 55, 0.5);
          backdrop-filter: blur(4px);
          border: 1px solid #374151;
          transition: all 0.3s ease;
        }
        .service-card:hover {
          border-color: rgba(251, 191, 36, 0.5);
          transform: translateY(-0.5rem);
        }
        .service-icon {
          font-size: 3.75rem;
          margin-bottom: 1.5rem;
          transition: transform 0.3s ease;
        }
        .service-card:hover .service-icon {
          transform: scale(1.1);
        }
        .service-title {
          font-size: 1.25rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color: white;
          transition: color 0.3s ease;
        }
        .service-card:hover .service-title {
          color: #fbbf24;
        }
        .service-description {
          color: #9ca3af;
          transition: color 0.3s ease;
        }
        .service-card:hover .service-description {
          color: #d1d5db;
        }
        .cta-section {
          max-width: 896px;
          margin: 0 auto;
          text-align: center;
        }
        .cta-title {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 2rem;
          background: linear-gradient(45deg, #fbbf24, #ef4444);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        @media (min-width: 768px) {
          .cta-title {
            font-size: 3.75rem;
          }
        }
        .cta-subtitle {
          font-size: 1.25rem;
          color: #d1d5db;
          margin-bottom: 3rem;
          line-height: 1.6;
        }
        .cta-buttons {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          justify-content: center;
        }
        @media (min-width: 640px) {
          .cta-buttons {
            flex-direction: row;
          }
        }
        .footer {
          padding: 3rem 1rem;
          background: #000000;
          border-top: 1px solid #374151;
        }
        .footer-content {
          max-width: 1280px;
          margin: 0 auto;
          text-align: center;
        }
        .footer-title {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          background: linear-gradient(45deg, #fbbf24, #ef4444);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .footer-subtitle {
          color: #9ca3af;
          margin-bottom: 1.5rem;
        }
        .footer-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
          color: #9ca3af;
        }
        .footer-link {
          color: inherit;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .footer-link:hover {
          color: #fbbf24;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            Morning Wood
          </h1>
          <p className="hero-subtitle">
            Skibidi Dop Dop Dop Yes Yes, Skibidi Dop Dop Yee Yee
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">
              View Our Projects
            </button>
            <button className="btn-secondary">
              Get In Touch
            </button>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="floating-element floating-element-1"></div>
        <div className="floating-element floating-element-2"></div>
        <div className="floating-element floating-element-3"></div>
      </section>

      {/* Featured Projects Section */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Featured Productions
            </h2>
            <p className="section-subtitle">
              Discover our latest cinematic masterpieces that push the boundaries of storytelling
            </p>
          </div>
          
          <div className="grid grid-1 grid-md-2 grid-lg-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="project-card">
                <div className="project-image">
                  <div className="project-overlay"></div>
                  <div className="project-content">
                    <h3 className="project-title">Project {item}</h3>
                    <p className="project-description">An incredible cinematic journey that will leave you speechless</p>
                  </div>
                </div>
                <div className="project-hover">
                  <button className="btn-primary" style={{marginBottom: '1rem'}}>Watch Trailer</button>
                  <button style={{color: '#fbbf24', background: 'none', border: 'none', cursor: 'pointer', transition: 'color 0.3s ease'}}>Learn More →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section section-darker">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Our Services
            </h2>
            <p className="section-subtitle">
              From concept to screen, we deliver exceptional film production services
            </p>
          </div>
          
          <div className="grid grid-1 grid-md-2 grid-lg-4">
            {[
              { title: "Film Production", icon: "🎬" },
              { title: "Post Production", icon: "✂️" },
              { title: "Cinematography", icon: "📹" },
              { title: "Sound Design", icon: "🎵" }
            ].map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3 className="service-title">
                  {service.title}
                </h3>
                <p className="service-description">
                  Professional {service.title.toLowerCase()} services that exceed expectations
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section section-accent">
        <div className="cta-section">
          <h2 className="cta-title">
            Ready to Create Something Amazing?
          </h2>
          <p className="cta-subtitle">
            Let's bring your vision to life with our world-class film production services
          </p>
          <div className="cta-buttons">
            <button className="btn-primary">
              Start Your Project
            </button>
            <button className="btn-secondary">
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-title">Morning Wood</div>
          <p className="footer-subtitle">Premium Film Production Studio</p>
          <div className="footer-links">
            <a href="#" className="footer-link">Privacy</a>
            <a href="#" className="footer-link">Terms</a>
            <a href="#" className="footer-link">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}