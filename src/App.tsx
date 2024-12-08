import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import { ImageSection } from "./components/Image";
import { Testimonials } from "./components/Testimonials";

import "./App.css";

function HomePage() {
  return (
    <>
      <Hero />
      <ImageSection />
      <About />
      <Testimonials />
    </>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;