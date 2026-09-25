const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: '💻',
      skills: ['React.js', 'React Router', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'TypeScript', 'Responsive Design']
    },
    {
      title: 'Styling & Design',
      icon: '🎨',
      skills: ['CSS Modules', 'Tailwind CSS', 'Sass/SCSS', 'Figma', 'UI/UX Design Systems', 'Animations']
    },
    {
      title: 'Developer Tools',
      icon: '🛠️',
      skills: ['Vite', 'Git & GitHub', 'npm / yarn', 'VS Code', 'Chrome DevTools', 'CI/CD']
    },
    {
      title: 'Backend & APIs',
      icon: '⚡',
      skills: ['Node.js', 'Express', 'RESTful APIs', 'JSON', 'Fetch / Axios', 'Async/Await']
    }
  ]

  return (
    <div className="page skills-page">
      <div className="page-header">
        <h1 className="page-title">Technical Skills</h1>
        <p className="page-subtitle">
          An overview of technologies, frameworks, and tools used across our modern web development workflow.
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category) => (
          <div key={category.title} className="skills-category">
            <h3>
              <span>{category.icon}</span> {category.title}
            </h3>
            <div className="skills-list">
              {category.skills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills