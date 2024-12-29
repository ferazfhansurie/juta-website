import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Check, X } from 'lucide-react';

const features = [
  { name: "Personalised AI Chatbot", other: "RM 1297 / Month", our: true },
  { name: "Personalised Workflows", other: "RM 199 / Month", our: true },
  { name: "Custom Integrations", other: "RM 49 / Integration", our: true },
  { name: "Online Calendars", other: "RM 49 / Month", our: true },
  { name: "Desktop Access", other: "RM 49 / Month", our: true },
  { name: "Mobile Access", other: "RM 49 / Month", our: true },
  { name: "Support Team", other: "Not Included", our: true },
  { name: "Users", other: "RM 49 / User", our: "Unlimited" },
  { name: "Conversations", other: "RM 0.08 / Template", our: "Unlimited" },
  { name: "Blast Messages", other: "RM 0.08 / Template", our: "Unlimited" },
  { name: "Messages", other: "RM 0.003 / Message", our: "Unlimited" },
];

export const Comparison: React.FC = () => {
  return (
    <section id='compare' className="container py-24 sm:py-32">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">
        <span className="bg-gradient-to-r from-blue-300 to-blue-700 text-transparent bg-clip-text">
          Comparison
        </span>
      </h2>
      <p className="text-lg sm:text-xl text-center text-muted-foreground mb-8">
        Explore feature breakdowns for the best value on your investment.
      </p>
      
      <Card className="w-full overflow-hidden">
        <CardHeader className="bg-muted">
          <CardTitle className="text-lg sm:text-xl md:text-2xl grid grid-cols-3">
            <span>AI Solution Features</span>
            <span className="text-center">Other Tools</span>
            <span className="text-center">Our Solution</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {features.map((feature, index) => (
            <div key={index} className={`grid grid-cols-3 p-2 sm:p-4 ${index % 2 === 0 ? 'bg-muted/50' : ''}`}>
              <span className="font-medium text-xs sm:text-sm md:text-base">{feature.name}</span>
              <span className="text-center text-xs sm:text-sm md:text-base">{feature.other}</span>
              <span className="text-center text-xs sm:text-sm md:text-base">
                {typeof feature.our === 'boolean' ? (
                  feature.our ? <Check className="inline text-green-500" /> : <X className="inline text-red-500" />
                ) : (
                  feature.our
                )}
              </span>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
};