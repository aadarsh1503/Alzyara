import { useState } from 'react';

import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import { DirectionProvider } from './components/DirectionContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import Router components
import LanguageSwitcher from './components/LanguageSwticher/LanguageSwitcher';
import Footer from './components/Footer/Footer';
import EmailSection from './components/EmailSection/EmailSection';
import MarketingAgencies from './components/MarketingAgencies/MarketingAgencies';
import Solutions from './components/Solutions/Solutions';
import PricingSection from './components/PricingSection/PricingSection';
import TutorialPage from './components/Resources/Resources';


function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <DirectionProvider>
          <LanguageSwitcher />
          <Navbar />
          <Routes>
            {/* Define route paths for different components */}
            <Route path="/" element={<Hero />} />\
            <Route path="/email" element={<EmailSection />} />
            <Route path="/marketing" element={<Solutions />} />
            <Route path="/pricing" element={<PricingSection />} />
            <Route path="/tutorials" element={<TutorialPage />} />
     
            {/* Add more routes as needed */}
          </Routes>
          <Footer />
        </DirectionProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
