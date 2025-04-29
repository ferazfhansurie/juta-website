import { Button } from "./ui/button";
import { AnimatedChatBubble } from "./AnimatedChatBubble";
import { pixelEvent } from '../utils/pixel';
import { useEffect, useRef } from 'react';

export const Hero = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (buttonRef.current) {
        const button = buttonRef.current;
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        button.style.setProperty('--x', `${x}px`);
        button.style.setProperty('--y', `${y}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

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
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold mb-4 md:mb-6">
          <span className="text-primary dark:text-white font-extrabold">
            Build Custom{' '}
            <span className="bg-gradient-to-r from-blue-300 to-blue-700 text-transparent bg-clip-text">
              AI
            </span>{' '}
            Agents
          </span>
        </h1>
        <h2 className="text-xl md:text-xl lg:text-2xl xl:text-3xl font-normal text-primary dark:text-white mb-4 md:mb-6">
          <span className="text-primary dark:text-white font-normal">
          with{' '}
            <span className="bg-green-500 text-transparent font-extrabold bg-clip-text">
            WhatsApp
            </span>{' '}
            Shared Team Inbox
          </span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8">
          One Platform for All Your Team Members & Conversations
        </p>
        <div className="flex justify-center mb-8">
          <Button 
            ref={buttonRef}
            size="lg" 
            className="w-full sm:w-auto px-6 py-2 md:px-8 md:py-3 text-base md:text-lg relative overflow-hidden glow-button" 
            onClick={scrollToPricing}
          >
            Start 
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