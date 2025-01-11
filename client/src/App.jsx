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
import MarketingAutomation from './components/MarketingAutomation/MarketingAutomation';
import ContactCRM from './components/ContactCRM/ContactCRM';
import PopupBuilder from './components/PopupBuilder/PopupBuilder';
import LeadWebForm from './components/LeadWebForm/LeadWebForm';
import EmailVerification from './components/EmailVerification/EmailVerification';
import Education from './components/Education/Education';
import SalesTeam from './components/SalesTeam/SalesTeam';
import Ecommerce from './components/Ecommerce/Ecommerce';


function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
     
        
          <Navbar />
          <Routes>
            {/* Define route paths for different components */}
            <Route path="/" element={<Hero />} />\
            <Route path="/feature1" element={<EmailSection />} />
            <Route path="/marketing" element={<Solutions />} />
            <Route path="/pricing" element={<PricingSection />} />
            <Route path="/tutorials" element={<TutorialPage />} />
            <Route path="/integration" element={<Integrations />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/feature2" element={<MarketingAutomation />} />
            <Route path="/feature3" element={<ContactCRM />} />
            <Route path="/feature4" element={<PopupBuilder />} />
            <Route path="/feature5" element={<LeadWebForm />} />
            <Route path="/feature6" element={<EmailVerification />} />
            <Route path="/solution2" element={<Education />} />
            <Route path="/solution3" element={<SalesTeam />} />
            <Route path="/solution4" element={<Ecommerce />} />
     
            {/* Add more routes as needed */}
          </Routes>
          <Footer />
     
      </BrowserRouter>
    </div>
  );
}

export default App;
