import { Link } from 'react-router-dom'
import heroImg from '../assets/hero.png'

const Home = () => {
  return (
    <div className="page home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>
            Welcome to <span className="hero-highlight">MyReactApp</span>
          </h1>
          <p className="hero-description">
            A simple and elegant multi-page single page application (SPA) built with React and React Router.
          </p>
          <div className="hero-actions">
            <Link to="/about" className="btn btn-primary">
              Learn More
            </Link>
            <Link to="/skills" className="btn btn-secondary">
              View Skills
            </Link>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img src={heroImg} alt="Hero" className="hero-image" />
        </div>
      </section>

      <section className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">🚀</div>
          <h3>Fast Navigation</h3>
          <p>Client-side routing powered by React Router enables seamless transitions between views without refreshing the page.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🧩</div>
          <h3>Modular Architecture</h3>
          <p>Clean separation of reusable components like Navbar and Footer alongside dedicated page views.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">📱</div>
          <h3>Responsive Design</h3>
          <p>Fully adaptable layout crafted with modern CSS variables, flexbox, and grid systems.</p>
        </div>
      </section>
    </div>
  )
}

export default Home