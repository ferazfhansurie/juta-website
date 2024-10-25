import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About } from "./components/About";
import { Cta } from "./components/Cta";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
import { SponsorsComponent } from "./components/Sponsors";
import CursorDot from './components/CursorDot'
import { StepByStepGuide } from "./components/Guide";
import { Comparison } from "./components/Comparison"
import { ChatbotWidget } from "./components/ChatbotWidget";
import { CaseStudies } from "./components/CaseStudy";
import { Testimonials } from "./components/Testimonials";
import { ImageSection } from "./components/Image";
import "./App.css";

import { TokenCalculator } from './components/TokenCalculator';

function HomePage() {
  return (
    <>
      <Hero />
      <ImageSection />
      <Testimonials />
      <Pricing />
      <TokenCalculator />
      <SponsorsComponent />
      <About />
      <StepByStepGuide />
      <Comparison />
      <FAQ />
      <Cta />
    </>
  );
}

function App() {
  return (
    <Router>
      <CursorDot />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-studies" element={<CaseStudies />} />
      </Routes>
      <Footer />
      <ScrollToTop />
      <ChatbotWidget />
    </Router>
  );
}

export default App;