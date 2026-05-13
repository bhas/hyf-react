import { NavLink, Outlet } from 'react-router-dom';

function subNavClass({ isActive }) {
  // isActive is a boolean from NavLink that tells us if the link is active.
  // we use it to conditionally apply the 'active' class to the link, which will style it differently when it's active.
  return isActive ? 'about__sublink active' : 'about__sublink';
}

export default function About() {
  return (
    <main className="page">
      <h1 className="page__title">About Us</h1>
      <p className="page__body">
        We are a small team of developers passionate about building great web experiences with React.
      </p>
      <ul className="about__list">
        <li>Founded in 2024</li>
        <li>Fully remote team</li>
        <li>Open source contributors</li>
        <li>Lovers of clean, simple code</li>
      </ul>

      <nav className="about__subnav">
        <NavLink to="/about/team" className={subNavClass}>
          Our Team
        </NavLink>
        <NavLink to="/about/mission" className={subNavClass}>
          Our Mission
        </NavLink>
      </nav>

      {/* The Outlet is where the nested routes will be rendered. 
      So when we navigate to /about/team, the Team component will be rendered here, and when we navigate to /about/mission, the Mission component will be rendered here. */}
      <Outlet />
    </main>
  );
}
