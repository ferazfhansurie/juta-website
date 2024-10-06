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
        <h2 className="text-4xl md:text-4xl font-bold mb-4 text-primary dark:text-white">
          Better Conversations. Higher Engagement. Lower Costs.
          <br />
          Faster Responses. Higher Satisfaction. More Business Growth.
        </h2>
      </div>
      <div className="relative h-96 overflow-hidden">
        <div className="absolute w-[100%] h-full animate-scroll-right">
          <div className="flex h-full">
            {[...images, ...images].map((img, index) => (
              <div key={index} className="flex-shrink-0 w-full md:w-1/3 h-full">
                <img 
                  src={img} 
                  className="w-full h-full object-contain" 
                  alt={`Image ${(index % images.length) + 1}`} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};