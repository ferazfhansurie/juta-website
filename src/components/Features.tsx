import React, { useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";
import logo from "../assets/logo.png"; // Import the logo image

interface Feature {
  title: string;
  description: string;
  icon?: React.ReactNode; // Optional icon prop
}

const features: Feature[] = [
  {
    title: "AI Prompt Builder",
    description: "Automated building agent process by talking to an AI",
  },
  {
    title: "QR WhatsApp Connection",
    description: "Connect your WhatsApp number with QR code scanning",
  },
  {
    title: "User Management",
    description: "Add and manage all your team members",
  },
  {
    title: "Contact Management",
    description: "Store and manage all your customer contacts",
  },
  {
    title: "Unlimited Blast Messages",
    description: "Send bulk messages to multiple contacts",
  },
  {
    title: "Automated Booking",
    description: "Set up automated appointment booking",
  },
  {
    title: "Automated Follow Ups",
    description: "Set up automated message follow up sequences",
  },
  {
    title: "Automated Tagging",
    description: "Set up automated tags",
  },
  {
    title: "Automated Assign Users",
    description: "Set up automated assign users",
  },
  {
    title: "AI Text Responses",
    description: "Automated text response based on your business",
  },
  {
    title: "AI Image Responses",
  description: "Automated image response",
},
{
  title: "AI Video Responses",
  description: "Automated video response",
},
{
  title: "AI Document Responses",
  description: "Automated document response",
},
{
  title: "Custom Integrations",
    description: "Connect with your favorite tools and platforms",
  },
  {
    title: "Mobile App Access",
    description: "Use the platform from your phone",
  },
  {
    title: "Desktop Access",
    description: "Use the platform from your computer",
  },
];

const FeatureCard: React.FC<{ feature: Feature; index: number }> = ({ feature, index }) => (
  <div className="relative flex items-center w-full py-4">
    <div className={`w-full grid grid-cols-[80px_1fr] lg:grid-cols-[1fr_2fr_2fr_1fr] gap-4 lg:gap-20 relative ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
      <div className={`lg:col-span-2 ${index % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-3'} col-start-2`}>
        <Card className="relative z-10 bg-background dark:bg-[#121212] p-6 h-auto inline-block min-w-[200px] lg:min-w-[300px]">
          <CardHeader className="p-0">
            <CardTitle className="text-2xl mb-2 whitespace-normal">{feature.title}</CardTitle>
            <CardDescription className="text-lg whitespace-normal">{feature.description}</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  </div>
);

export const Features: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollIndicator = document.querySelector('.scroll-indicator') as HTMLElement;
      const featuresSection = document.querySelector('#features');
      const timelineLine = document.querySelector('.timeline-line') as HTMLElement;
      const timelineProgress = document.querySelector('#timeline-progress') as HTMLElement;
      
      if (scrollIndicator && featuresSection && timelineLine && timelineProgress) {
        const sectionRect = featuresSection.getBoundingClientRect();
        const timelineRect = timelineLine.getBoundingClientRect();
        
        // Check if features section is in view
        if (sectionRect.top <= window.innerHeight && sectionRect.bottom >= 0) {
          scrollIndicator.style.opacity = '1';
          
          // Calculate position relative to the timeline
          const timelineStart = timelineRect.top;
          const timelineEnd = timelineRect.bottom;
          const viewportMiddle = window.innerHeight / 2;
          
          // Calculate the scroll position
          let scrollPosition = (viewportMiddle - timelineStart);
          let maxScroll = timelineEnd - timelineStart - viewportMiddle;
          
          // Adjust maxScroll to account for the logo height
          const logoHeight = scrollIndicator.offsetHeight;
          maxScroll = timelineEnd - timelineStart - logoHeight;
          
          // Clamp the scroll position
          scrollPosition = Math.max(0, Math.min(scrollPosition, maxScroll));
          
          // Update indicator position
          scrollIndicator.style.transform = `translate(-50%, ${scrollPosition}px)`;
          scrollIndicator.style.position = 'fixed';
          scrollIndicator.style.top = `${timelineStart}px`;
          
          // Update timeline progress
          const progress = (scrollPosition / maxScroll) * 100;
          timelineProgress.style.height = `${progress}%`;
        } else {
          scrollIndicator.style.opacity = '0';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Our{' '}
        <span className="bg-gradient-to-r from-blue-300 to-blue-700 text-transparent bg-clip-text">
          Features
        </span>
      </h2>
      <p className="text-xl text-center text-muted-foreground mb-16">
        Powerful tools to streamline your business communication
      </p>
      
      <div className="relative">
        {/* Timeline line with gradient overlay */}
        <div className="timeline-line absolute left-[40px] lg:left-1/2 top-0 w-[2px] h-full bg-muted-foreground/20">
          <div 
            className="absolute left-0 top-0 w-full bg-gradient-to-b from-blue-300 via-indigo-500 to-blue-700 transition-all duration-200"
            style={{
              height: '0%',
              width: '100%'
            }}
            id="timeline-progress"
          />
        </div>
        
        {/* Scrolling indicator with Logo - adjusted for mobile */}
        <div className="scroll-indicator opacity-0 transition-opacity duration-200 fixed left-[40px] lg:left-1/2 z-20 pointer-events-none -translate-x-1/2">
          <img 
            src={logo} 
            alt="Logo" 
            className="w-40 h-40 lg:w-40 lg:h-40 object-contain"
          />
        </div>  

        {/* Features */}
        <div className="relative space-y-0">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
