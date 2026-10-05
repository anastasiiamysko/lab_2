import heroImg from '../assets/hero.png';

function Header() {
  return (
    <header className="header-card">
      <img src={heroImg} alt="Аватар" className="avatar" />
      <div className="header-info">
        <h1>Мисько Анастасія</h1>
        <p className="subtitle">Frontend Developer / Student</p>
        <div className="contacts">
          <span>📍 Львів, Україна</span>
          
          <a href="mailto:anastasiia.mysko.kb.2025@lpnu.ua" className="contact-link">
            ✉️ anastasiia.mysko.kb.2025@lpnu.ua
          </a>

          <a 
            href="https://github.com/anastasiiamysko" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-link"
          >
            🔗 github.com/anastasiiamysko
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;