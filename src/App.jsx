import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <About />
        <Skills />
        <Experience />
      </main>
      <footer className="footer">
        <p>© 2026 CV Project. Створено на React & Vite.</p>
      </footer>
    </div>
  );
}

export default App;