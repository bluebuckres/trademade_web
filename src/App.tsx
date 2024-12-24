import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Login } from './components/Login';
import { SignUp } from './components/SignUp';
import { Footer } from './components/Footer';
import { CustomizeAutomation } from './components/CustomizeAutomation';
import { HowToUse } from './components/HowToUse';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Terms } from './components/Terms';
import { RefundPolicy } from './components/RefundPolicy';
import { PrivacyPolicy } from './components/PrivacyPolicy';

// Layout component with Navbar and Footer
const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-white flex flex-col">
    <Navbar />
    <main className="flex-grow pt-16 sm:pt-20">
      <div className="w-full">
        {children}
      </div>
    </main>
    <Footer />
  </div>
);

const HomePage = () => (
  <Layout>
    <Hero />
    <Features />
  </Layout>
);

const CustomizePage = () => (
  <Layout>
    <CustomizeAutomation />
  </Layout>
);

const HowToUsePage = () => (
  <Layout>
    <HowToUse />
  </Layout>
);

const PricingPage = () => (
  <Layout>
    <Pricing />
  </Layout>
);

const ContactPage = () => (
  <Layout>
    <Contact />
  </Layout>
);

const TermsPage = () => (
  <Layout>
    <Terms />
  </Layout>
);

const RefundPolicyPage = () => (
  <Layout>
    <RefundPolicy />
  </Layout>
);

const PrivacyPolicyPage = () => (
  <Layout>
    <PrivacyPolicy />
  </Layout>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/customize" element={<CustomizePage />} />
        <Route path="/how-to-use" element={<HowToUsePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/refund-policy" element={<RefundPolicyPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/login" element={<Layout><Login /></Layout>} />
        <Route path="/signup" element={<Layout><SignUp /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;