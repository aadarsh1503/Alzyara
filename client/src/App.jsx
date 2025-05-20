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
import Pabblyintegration from './components/Pabblyintegration/Pabblyintegration';
import WooIntegration from './components/woointegration/woointegration';
import Apiintegrations from './components/ApiIntegration/ApiIntegration';
import MobileNavbar from './components/MobileNavbar/MobileNavbar';
import Hero1Section from './components/Hero1Section/Hero1Section';
import ContactSection from './components/ContactSection/ContactSection';
import PrivacySection from './components/PrivacyPolicy/PrivacyPolicy';
import TermsofServic from './components/TermsofServic/TermsofServic';
import { DirectionProvider } from './components/DirectionContext';
import LoginForm from './components/LoginForm/LoginForm';



function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
     <DirectionProvider />
        <MobileNavbar />
          <Navbar />
          <Routes>
            {/* Define route paths for different components */}
            <Route path="/" element={<Hero />} />
            <Route path="/feature1" element={<EmailSection />} />
            <Route path="/marketing" element={<Solutions />} />
            <Route path="/pricing" element={<PricingSection />} />
            <Route path="/tutorials" element={<TutorialPage />} />
            <Route path="/integration" element={<Integrations />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/login" element={<LoginForm />} />

            <Route path="/feature2" element={<MarketingAutomation />} />
            <Route path="/feature3" element={<ContactCRM />} />
            <Route path="/feature4" element={<PopupBuilder />} />
            <Route path="/feature5" element={<LeadWebForm />} />
            <Route path="/feature6" element={<EmailVerification />} />
            <Route path="/solution2" element={<Education />} />
            <Route path="/solution3" element={<SalesTeam />} />  
            <Route path="/solution4" element={<Ecommerce />} />
            <Route path="/integration2" element={<Pabblyintegration />} />
            <Route path="/integration3" element={<WooIntegration />} />
            <Route path="/integration4" element={<Apiintegrations />} />
            <Route path="/contact" element={<ContactSection />} />
            <Route path="/privacy" element={<PrivacySection />} />
            <Route path="/termsofService" element={<TermsofServic />} />
         
     
            {/* Add more routes as needed */}
          </Routes>
          <Footer />
     
      </BrowserRouter>
    </div>
  );
}

export default App;
