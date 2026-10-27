import heroImg from '../assets/hero.png';

function Header() {
  return (
    <header className="bg-slate-900 text-white p-6 rounded-2xl shadow-xl flex flex-col md:flex-row items-center gap-6 border border-slate-800">
      <img 
        src={heroImg} 
        alt="Аватар" 
        className="w-28 h-28 rounded-full object-cover border-4 border-indigo-500 shadow-md hover:scale-105 transition-transform duration-300" 
      />
      <div className="text-center md:text-left space-y-2">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-indigo-400">
          Mysko Anastasiia
        </h1>
        <p className="text-lg text-slate-300 font-medium">
          Frontend Developer / Student
        </p>
        <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-slate-400 pt-2">
          <span className="flex items-center gap-1">📍 Lviv, Ukraine</span>
          <a 
            href="mailto:anastasiia.mysko.kb.2025@lpnu.ua" 
            className="hover:text-indigo-400 transition-colors underline decoration-indigo-500/50"
          >
            📧 anastasiia.mysko.kb.2025@lpnu.ua
          </a>
          <a 
            href="https://github.com/anastasiiamysko" 
            target="_blank" 
            rel="noreferrer"
            className="hover:text-indigo-400 transition-colors underline decoration-indigo-500/50"
          >
            🔗 GitHub
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;