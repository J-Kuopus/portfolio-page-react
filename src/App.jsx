import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import About from './components/About/About';
import ProjectList from './components/ProjectList/ProjectList';
import Contact from './components/Contact/Contact';
import ScrollUp from './components/Scroll/Scroll';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <ScrollUp/>
      <Header />
      <Main />
      <About />
      <ProjectList />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
