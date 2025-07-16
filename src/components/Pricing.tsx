import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,  
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { useState, useEffect } from 'react';

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  setupFee: number;
  supportFee: number;
  messagePrice: number;
  originalPrice?: number;
  description: string;
  buttonText: string;
  benefitList: string[];
  checkoutLink: string;
  addOns: {
    name: string;
    price: number;
    description: string;
  }[];
}

const pricingList: PricingProps[] = [
  {
    title: "Standard AI Plan",
    popular: PopularPlanType.NO,
    price: 0,
    setupFee: 1500,
    supportFee: 518,
    messagePrice: 10,
    description: "Enterprise-grade solution with 500 free AI responses monthly. Additional responses at RM10 per 100 responses.",
    buttonText: "Start",
    checkoutLink: "https://web.jutateknologi.com/register",
    benefitList: [
      "Custom A.I Workflows",
      "A.I Prompt Builder",
      "Automated Follow-Up",
      "Automated Booking System",
      "Automated Tagging",
      "Automated Assign",
      "Automated Blasting",
      "Automated Notification",
    ],
    addOns: [
      {
        name: "Google Calendar Integration",
        price: 50,
        description: "One-time payment"
      },
      {
        name: "Custom Integrations",
        price: 1500,
        description: "Per 1 day of work (8 hours)",
      },
    ],
  },
];

export const Pricing = () => {
  const [currencySymbol, setCurrencySymbol] = useState('RM');
  

  useEffect(() => {
    const detectCountry = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        console.log('Location data:', data);
        const countryCode = data.country_code;
        setCurrencySymbol(countryCode === 'MY' ? 'RM' : 'USD');
      } catch (error) {
        console.error('Error fetching location:', error);
        // Fallback to manually set the currency for testing
        setCurrencySymbol('RM'); // Set to 'RM' for testing purposes
      }
    };
    detectCountry();
  }, []);







  return (
    <section
      id="pricing"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center pb-8">
        Our{' '}
        <span className="bg-gradient-to-r from-blue-300 to-blue-700 text-transparent bg-clip-text">
           Offers
        </span>
      </h2>

      <div className="flex flex-col md:flex-row justify-center gap-8">
        {pricingList.map((pricing: PricingProps) => {

          return (
            <Card
              key={pricing.title}
              className={`w-full md:w-1/2 max-w-md ${
                pricing.popular === PopularPlanType.YES
                  ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                  : ""
              }`}
            >
              <CardHeader>
               
                
                {/* Setup and Support Fees */}
                <div className="mt-4 space-y-2 text-xl">
                  <div className="flex justify-between">
                    <span>Self Setup:</span>
                    <span className="font-medium">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Expert Setup:</span>
                    <span className="font-medium">{currencySymbol} 1500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Support:</span>
                    <span className="font-medium">{currencySymbol} {pricing.supportFee}/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Messages:</span>
                    <span className="font-medium">{currencySymbol} {pricing.messagePrice} per 100</span>
                  </div>
                </div>
                <hr className="w-4/5 m-auto mb-4" />
                <CardDescription>{pricing.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-col gap-2">
                  <Button className="w-full glow-button" asChild>
                    <a 
                      href={pricing.checkoutLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {pricing.buttonText}
                    </a>
                  </Button>
             
                </div>
              </CardContent>

              <hr className="w-4/5 m-auto mb-4" />

              <CardFooter className="flex">
                <div className="space-y-4">
                  {pricing.benefitList.map((benefit: string) => (
                    <span
                      key={benefit}
                      className="flex items-center"
                    >
                      <Check className="text-green-500 mr-2" />
                      <h3 className={
                        benefit.startsWith("Standard AI Plan") || benefit.startsWith("Team Inbox Plan")
                          ? "bg-gradient-to-r from-blue-800/80 to-blue-400/80 p-2 rounded-lg text-white flex-1" 
                          : "ml-2"
                      }>
                        {benefit}
                      </h3>
                    </span>
                  ))}

                  {/* Add-ons section */}
                  {pricing.addOns.length > 0 && (
                    <>
                      <div className="mt-6 pt-6 border-t">
                        <h3 className="font-semibold mb-4">Available Add-ons:</h3>
                        {pricing.addOns.map((addon) => (
                          <div key={addon.name} className="mb-3">
                            <div>{addon.name}</div>
                            <div className="flex items-center gap-2">
                              <span>RM {addon.price}</span>
                              <span className="text-sm text-muted-foreground">{addon.description}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
