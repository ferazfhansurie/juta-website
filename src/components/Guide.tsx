import React from 'react';
import { Card, CardContent } from "./ui/card";

const steps = [
  {
    number: 1,
    description: "Enter your information and click register to register yourself.",
    image: "https://assets.cdn.filesafe.space/LckX7xmrOUBw8j9G2nUr/media/66b04631ccffaf48e59d672a.jpeg"
  },
  {
    number: 2,
    description: "Go to your WhatsApp and go to linked devices > Link device. Then scan the QR code.",
    image: "https://assets.cdn.filesafe.space/LckX7xmrOUBw8j9G2nUr/media/66b46abf312935b4a57be856.png"
  },
  {
    number: 3,
    description: "Go to the assistant page and begin building your personal AI chatbot. In this step, you can personally add details to your chatbot. You can add descriptions and information to the chatbot.",
    image: "https://assets.cdn.filesafe.space/LckX7xmrOUBw8j9G2nUr/media/66b0490d8f484e38cc6e80ce.jpeg"
  },
  {
    number: 4,
    description: "In the contact page, you can sync your data from WhatsApp by clicking the \"Sync database\" button.",
    image: "https://assets.cdn.filesafe.space/LckX7xmrOUBw8j9G2nUr/media/66b0463cccffaf683a9d672c.jpeg"
  }
];

export const StepByStepGuide: React.FC = () => {
  return (
    <section id="guide" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        <span className="bg-gradient-to-r from-blue-300 to-blue-700 text-transparent bg-clip-text">
          Step By Step
        </span>{' '}
        Guide
      </h2>
      <p className="text-xl text-center text-muted-foreground mb-8">
        A guide on how you can begin!
      </p>
      
      <div className="space-y-12">
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <img
                src={step.image}
                alt={`Step ${step.number}`}
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="w-full md:w-1/2">
              <Card className="border-2 border-primary">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">
                    Step {step.number}:
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};