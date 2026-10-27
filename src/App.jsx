import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';

function App() {
  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-6">
        <Header />
        <About />
        <Experience />
        <Skills />
      </div>
    </div>
  );
}

export default App;