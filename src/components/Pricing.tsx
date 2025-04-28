import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { pixelEvent } from '../utils/pixel';
import { useState, useEffect } from 'react';

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
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
    price: 318,
    description: "Enterprise-grade solution with 500 free AI responses monthly. Additional responses at RM10 per 100 responses.",
    buttonText: "Start 7 Days Free Trial",
    checkoutLink: "https://web.jutasoftware.co/register", // You'll need to update this
    benefitList: [
      "Custom A.I Workflows",
      "A.I Prompt Builder",
      "Automated Follow-Up",
      "Automated Booking System",
      "Automated Tagging",
      "Automated Assign",
      "Automated Blasting",
      "Automated Notification",
      "Full Setup & Maintenance",
    ],
    addOns: [
      {
        name: "Google Calendar Integration",
        price: 50,
        description: "One-time payment"
      },
      {
        name: "Custom Automations",
        price: 1500,
        description: "Per 1 day of work (8 hours)",
      },
    ],
  },
];


export const Pricing = () => {
  const [currencySymbol, setCurrencySymbol] = useState('RM');
  const [contractDurations, setContractDurations] = useState<{ [key: string]: number }>({
    "Team Inbox Plan": 1,
    "Standard AI Plan": 1,
    "Unlimited AI Plan": 1,
  });

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

  const handlePricingClick = (planName: string, price: number) => {
    pixelEvent('ViewContent', {
      content_type: 'product',
      content_name: planName,
      currency: 'MYR',
      value: price
    });
  };

  const calculateDiscountedPrice = (price: number, duration: number) => {
    let discount = 0;
    if (duration === 3) discount = 0.10;
    if (duration === 12) discount = 0.30;
    return price * (1 - discount);
  };

  const getDiscountPercentage = (duration: number) => {
    if (duration === 3) return 10;
    if (duration === 12) return 30;
    return 0;
  };

  const handleDurationChange = (planTitle: string, duration: number) => {
    setContractDurations((prev) => ({
      ...prev,
      [planTitle]: duration,
    }));
  };

  return (
    <section
      id="pricing"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center pb-8">
        Our{' '}
        <span className="bg-gradient-to-r from-blue-300 to-blue-700 text-transparent bg-clip-text">
           Unique Plan
        </span>
      </h2>

      <div className="flex flex-col md:flex-row justify-center gap-8">
        {pricingList.map((pricing: PricingProps) => {
          const duration = contractDurations[pricing.title];
          const discountedPrice = calculateDiscountedPrice(pricing.price, duration);
          const discountPercentage = getDiscountPercentage(duration);

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
                <CardTitle className="flex item-center justify-between">
                  {pricing.title}
                </CardTitle>
                
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">{currencySymbol} {discountedPrice.toFixed(2)}</span>
                  {discountPercentage > 0 && (
                    <span className="ml-2 text-xl text-green-500">
                      {discountPercentage}% OFF
                    </span>
                  )}
                  <span className="ml-2 text-muted-foreground"> /month</span>
                </div>
                <CardDescription>{pricing.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-col gap-2">
                  <Button className="w-full glow-button" asChild>
                    <a 
                      href={pricing.checkoutLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={() => handlePricingClick(pricing.title, discountedPrice)}
                    >
                      {pricing.buttonText}
                    </a>
                  </Button>
                  <div className="flex justify-between mt-4 bg-gray-200 dark:bg-gray-800 rounded p-1">
                    {[1, 3, 12].map((duration) => (
                      <button
                        key={duration}
                        className={`flex-1 px-3 py-1 rounded glow-button ${contractDurations[pricing.title] === duration ? 'bg-gray-400 text-black dark:bg-gray-600 dark:text-white' : 'text-black dark:text-white'}`}
                        onClick={() => handleDurationChange(pricing.title, duration)}
                        style={{ whiteSpace: 'nowrap', border: 'none', fontSize: '0.875rem', lineHeight: '1.25rem' }}
                      >
                        {duration} month{duration > 1 ? 's' : ''}
                      </button>
                    ))}
                  </div>
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
