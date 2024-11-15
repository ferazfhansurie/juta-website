import { Button } from "./ui/button";
import { AnimatedChatBubble } from "./AnimatedChatBubble";
import { pixelEvent } from '../utils/pixel';

export const Hero = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
      pixelEvent('InitiateCheckout', {
        content_name: 'Free Trial Button - Hero Section'
      });
    }
  };

  return (
    <section className="container flex flex-col items-center justify-between py-16 md:py-24 lg:py-40">
      <div className="text-center max-w-2xl mx-auto z-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6">
          <span className="text-primary dark:text-white font-extrabold">
            Manage{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Automated
            </span>{' '}
            WhatsApp Conversations
          </span>
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-normal text-primary dark:text-white mb-4 md:mb-6">
          with Shared Team Inbox
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8">
          Team Collaboration. One Platform for All Your WhatsApp Conversations
        </p>
        <div className="flex justify-center mb-8">
          <Button 
            size="lg" 
            className="w-full sm:w-auto px-6 py-2 md:px-8 md:py-3 text-base md:text-lg" 
            onClick={scrollToPricing}
          >
            Start Free Trial
          </Button>
        </div>
      </div>
      
      <div className="w-full mt-8 md:mt-0 md:absolute md:left-4 md:top-1/3 md:-translate-y-1/2 md:w-64">
        <AnimatedChatBubble />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};