import './App.css'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'

function App() {
  return (
    <div className="cv-container">
      <Header />
      <About />
      <Skills />
      <Experience />
    </div>
  )
}

export default App