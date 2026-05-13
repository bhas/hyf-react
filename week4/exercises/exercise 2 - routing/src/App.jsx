import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Team from './pages/Team.jsx';
import Mission from './pages/Mission.jsx';
import './index.css';

function NotFound() {
  return (
    <main className="page">
      <h1 className="page__title">404 — Page not found</h1>
      <p className="page__body">The page you're looking for doesn't exist.</p>
    </main>
  );
}

export default function App() {
  return (
    <div className="app">
      {/* We keep the Navbar outside of the Routes component because we want it to be visible on all pages, regardless of the current route. */}
      <Navbar />
      {/* The Routes component is where we define all the routes for our application. So the component will render here. */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="team" element={<Team />} />
          <Route path="mission" element={<Mission />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
