import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import Skills from './Components/Skills/Skills';
import About from './Components/About/About';
import Project from './Components/Project/Project';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Particle from './Components/Particle/Particle';

function App() {
  return (
    <div className="App">
      <Particle/>

      <Navbar/>
      <Intro/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>

    </div>
    
  );
}

export default App;
