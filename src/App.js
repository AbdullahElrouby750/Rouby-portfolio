import './App.css';
import SectionRefContextProvider from './store/sectionRefContext';

import NavBar from './componants/NavBar';

import Home from './sections/Home';
import About from './sections/About';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

import Footer from './componants/Footer';


function App() {
  return (

    <SectionRefContextProvider>
      <NavBar/>
      <Home />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </SectionRefContextProvider>
  );
}

export default App;
