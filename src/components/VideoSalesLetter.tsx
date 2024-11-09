import React, { useState } from 'react';
import { Card, CardContent } from "./ui/card";
import { Play,} from 'lucide-react';

export const VideoSalesLetter: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const video = document.getElementById('vsl-video') as HTMLVideoElement;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="container py-12 sm:py-16">
       <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            Watch How to start{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Your Free Trial
            </span>
          </h2>
      <Card className="w-full max-w-4xl mx-auto">
        <CardContent className="p-6">
         
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <video
              id="vsl-video"
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src="/qrvid.mp4"
              playsInline
              muted
              controls
              preload="auto"
            />
            
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div 
                  className="bg-primary/80 text-primary-foreground rounded-full p-4 cursor-pointer hover:bg-primary transition-colors pointer-events-auto"
                  onClick={togglePlay}
                >
                  <Play size={48} />
                </div>
              </div>
            )}
          </div>
          
         
        </CardContent>
      </Card>
    </section>
  );
};