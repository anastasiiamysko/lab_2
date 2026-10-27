function Experience() {
  return (
    <section className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 hover:shadow-lg transition-shadow">
      <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-indigo-500 pb-1 inline-block">
        Досвід та Проєкти
      </h2>
      <div className="space-y-4">
        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
          <h3 className="text-lg font-semibold text-indigo-600">Навчальні вебпроєкти</h3>
          <p className="text-xs text-slate-400 font-medium my-1">НУ "ЛП" • 2024 - 2026</p>
          <p className="text-slate-600 text-sm">
            Розробка адаптивних версток, створення SPA-додатків на React та інтеграція стилів Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;