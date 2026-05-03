import ContactForm from './components/Hero.jsx';
import ProductFilters from './components/ProductSection.jsx';
import ProfileCard from './components/FeaturesSection.jsx';
import ReviewForm from './components/TestimonialsSection.jsx';
import CartItems from './components/Footer.jsx';
import './index.css';

export default function App() {
  return (
    <div>
      <header className="page-header">
        <h1>Week 4 — MUI Component Exercises</h1>
        <p>Install MUI and replace each set of HTML elements with the MUI equivalents listed in the comments.</p>
      </header>
      <ContactForm />
      <ProductFilters />
      <ProfileCard />
      <ReviewForm />
      {/* Bonus: <CartItems /> */}
    </div>
  );
}
