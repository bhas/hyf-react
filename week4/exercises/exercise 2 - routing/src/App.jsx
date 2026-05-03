import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import './index.css';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <About />
      <Contact />
    </div>
  );
}
