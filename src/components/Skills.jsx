function Skills() {
  const skills = ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Git/GitHub'];

  return (
    <section className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 hover:shadow-lg transition-shadow">
      <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-indigo-500 pb-1 inline-block">
        Навички
      </h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-indigo-50 text-indigo-700 font-medium text-sm rounded-full border border-indigo-100 hover:bg-indigo-600 hover:text-white transition-colors cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;