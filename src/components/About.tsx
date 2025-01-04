import { useNavigate } from 'react-router-dom';
import pilot from "../assets/juta-team.png";

import logo2 from "../assets/logo2.png";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export const About = () => {
  const navigate = useNavigate();

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    } else {
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
      id="about"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="bg-gradient-to-r from-blue-300 to-blue-700 text-transparent bg-clip-text">
          Why Choose
        </span>{" "}
        Juta Teknologi
      </h2>
      <Card className=" shadow-black/10 dark:shadow-white/10">
        <CardContent className="p-6">
          <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12">
            <div className="flex flex-col items-center">
              <img
                src={logo2}
                alt="Juta Teknologi Logo"
                className="w-100 h-auto mt-4 mb-8"
              />
              <div className="relative group mb-4">
                <img
                  src={pilot}
                  alt="Support Team"
                  className="w-[500px] object-contain rounded-lg transition-all duration-300 group-hover:scale-105 z-10 relative"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-700 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div className="pb-6">
                <h3 className="text-2xl font-semibold mb-4">From Humble Beginnings to AI Pioneers</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Picture this: Two brothers in Subang, Malaysia, fueled by nothing but dreams and a whole lot of coffee, decided to turn the tech world upside down. That's us! 👋 We started as a scrappy software house, and now? We're the AI automation wizards serving over 16 happy clients in first 3 months of operation (and counting)!
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Our mission? To automate everything that moves (and even some things that don't). We're here to prove that Malaysian ingenuity can compete with the best in the world. And boy, are we having fun doing it!
                </p>
                <h3 className="text-2xl font-semibold mb-4">Our Secret Weapon: Dedicated Support Team</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  But here's where it gets really good. We've assembled a support team so dedicated, they make superheros look lazy. These folks are the real MVPs, ensuring your AI solutions run smoother than a teh tarik on a hot day.
                </p>
                <ul className="space-y-2 text-lg mb-6">
                  <li>✅ 24/7 Availability (Yes, even during Raya!)</li>
                  <li>✅ Rapid Response (Faster than you can say "nasi lemak")</li>
                  <li>✅ Expert Assistance (PhDs in AI and customer satisfaction)</li>
                  <li>✅ Proactive Monitoring (We spot issues before they become "isu")</li>
                </ul>
                <p className="text-xl py-6 text-muted-foreground mt-6">
                  Our experts are always ready to lend a helping hand. After all, in the Juta Teknologi family, no one gets left behind!
                </p>
                <Button 
                  size="lg" 
                  className="w-full text-xl py-6 bg-primary transform hover:scale-105 transition-all duration-300 shadow-lg"
                  onClick={scrollToPricing}
                >
                  Hit the MAGIC Button
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Reseller Description Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4">Become a Reseller</h3>
        <p className="text-lg text-muted-foreground mb-6">
          Join our growing network of resellers and bring cutting-edge AI solutions to your clients. With our comprehensive support and innovative products, you'll be equipped to succeed in the fast-paced tech world.
        </p>
        <Button 
          size="lg" 
          className="w-full text-xl py-6 bg-primary transform hover:scale-105 transition-all duration-300 shadow-lg"
          onClick={() => navigate('/reseller')}
        >
          Click here to make cash grow on trees
        </Button>
      </div>
    </section>
  );
};
