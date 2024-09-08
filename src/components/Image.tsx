import React from 'react';
import image1 from '../assets/1.png';
import image2 from '../assets/2.png';
import image3 from '../assets/3.png';
import image4 from '../assets/4.png';
import image5 from '../assets/5.png';

const images = [image1, image2, image3, image4, image5];

export const ImageSection: React.FC = () => {
  return (
    <section className="overflow-hidden py-12">
      <div className="container text-center mb-12">
      <p className="text-xl md:text-2xl text-muted-foreground">
          Juta AI System
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary dark:text-white">
          Better Conversations. Higher Engagement. Lower Costs.
          <br />
          Faster Responses. Higher Satisfaction. More Business Growth.
        </h2>
      
      </div>
      <div className="animate-scroll-right whitespace-nowrap">
        {images.map((img, index) => (
          <img 
            key={index}
            src={img} 
            className="inline-block h-64 " 
            alt={`Image ${index + 1}`} 
          />
        ))}
        {/* Duplicate images for seamless loop */}
        {images.map((img, index) => (
          <img 
            key={`dup-${index}`}
            src={img} 
            className="inline-block h-64" 
            alt={`Image ${index + 1}`} 
          />
        ))}
      </div>
    </section>
  );
};