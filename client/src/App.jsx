import { useState } from 'react';

import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';

import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import Router components

import Footer from './components/Footer/Footer';
import EmailSection from './components/EmailSection/EmailSection';
import MarketingAgencies from './components/MarketingAgencies/MarketingAgencies';
import Solutions from './components/Solutions/Solutions';
import PricingSection from './components/PricingSection/PricingSection';
import TutorialPage from './components/Resources/Resources';
import Integrations from './components/Integrations/Integrations';
import SignUpForm from './components/SignUpForm/SignUpForm';


function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
     
        
          <Navbar />
          <Routes>
            {/* Define route paths for different components */}
            <Route path="/" element={<Hero />} />\
            <Route path="/email" element={<EmailSection />} />
            <Route path="/marketing" element={<Solutions />} />
            <Route path="/pricing" element={<PricingSection />} />
            <Route path="/tutorials" element={<TutorialPage />} />
            <Route path="/integration" element={<Integrations />} />
            <Route path="/signup" element={<SignUpForm />} />
     
            {/* Add more routes as needed */}
          </Routes>
          <Footer />
     
      </BrowserRouter>
    </div>
  );
}

export default App;
