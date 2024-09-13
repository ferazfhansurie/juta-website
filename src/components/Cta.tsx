import { Button } from "./ui/button";
import { useNavigate } from 'react-router-dom';

export const Cta = () => {
  const navigate = useNavigate();

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If the pricing section is not on the current page, navigate to the home page and then scroll
      navigate('/', { replace: true });
      setTimeout(() => {
        const pricingSection = document.getElementById('pricing');
        if (pricingSection) {
          pricingSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <section
      id="cta"
      className="bg-muted/50 py-16 my-24 sm:my-32"
    >
      <div className="container text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 max-w-2xl mx-auto">
          Ready to Revolutionize Your
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            {" "}
            WhatsApp Business{" "}
          </span>
          Experience?
        </h2>
        
        <Button 
          size="lg" 
          className="w-full sm:w-auto text-xl py-6 px-8 text-2xl"
          onClick={scrollToPricing}
        >
          Get Started Now
        </Button>
      </div>
    </section>
  );
};