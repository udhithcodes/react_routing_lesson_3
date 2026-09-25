const About = () => {
  return (
    <div className="page about-page">
      <div className="page-header">
        <h1 className="page-title">About Us</h1>
        <p className="page-subtitle">
          Discover our journey, core mission, and how we build scalable web applications.
        </p>
      </div>

      <div className="about-container">
        <div className="about-card">
          <h3>Our Mission</h3>
          <p>
            We aim to create fast, reliable, and user-centric web applications using modern JavaScript libraries and frameworks. Understanding routing is a fundamental building block for single-page applications.
          </p>
        </div>

        <div className="about-card">
          <h3>Key Milestones</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div>
                <strong>Phase 1: Component Fundamentals</strong>
                <p>Mastering JSX, functional components, props, and unidirectional data flow.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div>
                <strong>Phase 2: State & Lifecycle</strong>
                <p>Handling interactivity and reactivity with React Hooks like useState and useEffect.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div>
                <strong>Phase 3: Client-Side Routing</strong>
                <p>Implementing seamless multi-page user experiences using React Router DOM.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About