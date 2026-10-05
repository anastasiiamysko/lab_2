function Skills() {
  const skillsList = [
    'HTML5 & CSS3',
    'JavaScript (ES6+)',
    'React.js',
    'Git & GitHub',
    'Vite',
    'Адаптивна верстка',
    'VS Code'
  ];

  return (
    <section className="card">
      <h2>Навички</h2>
      <div className="skills-tags">
        {skillsList.map((skill, index) => (
          <span key={index} className="tag">{skill}</span>
        ))}
      </div>
    </section>
  );
}

export default Skills;