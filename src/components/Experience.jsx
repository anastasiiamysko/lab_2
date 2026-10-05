function Experience() {
  return (
    <section className="card">
      <h2>Досвід та Проєкти</h2>
      <div className="timeline-item">
        <h3>Лабораторні роботи з Веброзробки</h3>
        <span className="date">2026 — Дотепер</span>
        <p>Верстка сучасних вебсторінок за допомогою HTML/CSS, робота з компонентним підходом у React, контроль версій через Git.</p>
      </div>
      <div className="timeline-item">
        <h3>Розробка CV-застосунку на React</h3>
        <span className="date">2026</span>
        <p>Створення інтерактивного онлайн-резюме із використанням інструменту збірки Vite, створення окремих компонентів та їх стилізація.</p>
      </div>
    </section>
  );
}

export default Experience;