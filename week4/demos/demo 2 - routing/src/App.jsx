import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Movies from './pages/Movies.jsx';
import NowShowing from './pages/NowShowing.jsx';
import ComingSoon from './pages/ComingSoon.jsx';
import Tickets from './pages/Tickets.jsx';
import './index.css';

export default function App() {
  const [ticketCount, setTicketCount] = useState(0);

  function addTicket() {
    setTicketCount(prev => prev + 1);
  }

  return (
    <div className="app">
      <Navbar cartCount={ticketCount} />
      <Home onAddTicket={addTicket} />
      <Movies />
      <NowShowing onAddTicket={addTicket} />
      <ComingSoon />
      <Tickets />
    </div>
  );
}
